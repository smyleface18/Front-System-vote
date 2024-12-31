<script setup>
import {  ref } from 'vue';
import Iconclose from './icons/IconClose.vue';
import IconAdd from './icons/IconAdd.vue';
import IconQuestion from './icons/IconQuestion.vue';
import Swal from 'sweetalert2';


const props = defineProps(['idUser'])
let options = ref([{ id: 1, showDelete: false, input: null, select: false },
                    { id: 2, showDelete: false, input: null, select: false }
                ])
let inputTitle = ref()
const token = localStorage.getItem("token");
let dateInit = ref(null);
let dateEnd = ref(null);
let regex = ref(null);

let ShowPreviewBallotBoxe = ref(false)

function addOption(){
    options.value.push({
            id: (options.value[options.value.length-1]).id +1,
            showDelete: false,
            input: null,
            select: false
    })
}
function deleteOption(option){
    if(options.value.length > 2){
        options.value = options.value.filter((op) => op.id != option.id)
    }
}

function optionFocus(option){
    options.value.forEach((op) => op.select = false)
    option.select = true;
    option.input.focus()
}

function submitForm(){
            let TextOptions = []
            options.value.forEach((option) =>{
                TextOptions.push(option.input.value)})

            fetch("http://127.0.0.1:8080/vote/create",{
                    method: 'POST',
                    headers:{
                            'Authorization': `Bearer ${token}`,
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify({
                            idUser : props.idUser,
                            title : inputTitle.value,
                            options : TextOptions,
                            dateInit : new Date(dateInit.value).getTime(),
                            dateEnd : new Date(dateEnd.value).getTime(),
                            regex : regex.value
                        })
                    }).then(Response => {
                        if(Response.ok){
                            location.reload();
                        }
                    })
}

function informationRegex(){
        Swal.fire({                    
                    text: "Regex (Regular Expression): This field is an additional security setting. If the poll creator wishes to restrict participation to only certain registered Freevote users who have a specific email domain, they must enter that domain in this field. For example, if “@udecoder.com” is entered, only users with emails ending in “@udecoder.com” will be able to vote. If this field is left empty, any user with any email will be able to vote.",
                    icon: "info"})
        informationRegex.value = false

} 

</script>
<template>
        <div class=" w-full rounded py-2">
            <form action="" class="flex flex-col items-center space-y-5 " id="form">
                <div class="flex flex-col  w-1/2">
                    <span class="font-semibold  text-lg">title of the ballot boxe </span>
                    <input type="text" v-model="inputTitle" placeholder="you cannot repeat titles" class="rounded focus:outline-none bg-gray-200 text-center py-[2px] font-semibold text-xl" required>
                </div>
                <div class="flex space-x-5 w-full flex-wrap justify-center h-[35vh] overflow-y-auto ">
                    <div v-for="(option, index) in options" 
                    :key="option.id"   
                    @mouseover="() => (option.showDelete = true)"
                    @mouseleave="() => (option.showDelete = false)" 
                     @click="optionFocus(option)" 
                     :class="{'bg2':option.select}" 
                     class="rounded  h-5/6 flex hover:scale-105 flex-col items-center space-y-2 my-2 p-2  transition ease-linear delay-200  hover:cursor-pointer "
                     >
                        <div class="w-full flex justify-end  h-5">
                            <Iconclose
                             @click="deleteOption(option)"
                             v-if="option.showDelete"  
                             class="size-5 text-red-600 hover:cursor-pointer" 
                             ></Iconclose>
                        </div>
                        <img src="../assets/noble.png" alt="img option" class="rounded-full bg-black h-1/2 p-1">
                        <input :ref="el => option.input = el" type="text" name="" id="inputNameOption" placeholder="name of the option" 
                        class="focus:outline-none  rounded bg-gray-200 text-center py-[2px]" required>
                    </div>
                    <div class="flex justify-center items-center h-5/6">
                        <button @click="addOption()" @click.prevent 
                            class="p-5 h-5 flex justify-center items-center mt-5 rounded  bg2 animationPersonalite">
                            <IconAdd class="text-gray-200"></IconAdd>
                        </button>
                    </div>
                </div>
                <div class="flex space-x-10 w-full justify-center">
                        <div class="flex flex-col font">
                            <span class="font-semibold">Date initial </span>
                            <input type="datetime-local" v-model="dateInit" class="focus:outline-none bg-gray-200 rounded">
                        </div>
                        <div class="flex flex-col font">
                            <span class="font-semibold">Date end </span>
                            <input type="datetime-local" v-model="dateEnd" class="focus:outline-none bg-gray-200 rounded">
                        </div>
                        <div class="flex flex-col font">
                            <span class="font-semibold flex">Regex <IconQuestion @click="informationRegex()" class="ml-2 hover:cursor-pointer" ></IconQuestion></span>
                            <input type="text" v-model="regex" placeholder="Example '@netflix.com'"
                                class="focus:outline-none bg-gray-200 rounded">
                        </div>
                </div>
                <button type="submit" @click="submitForm()"
                class="bg px-2 rounded text-xl mt-10 h-10 w-40 text-white hover:scale-110 mx-auto">Create</button>
            </form>
        </div>
</template>
<style scoped>
.bg{
    background-image: url("../assets/bgButtonRedandWhite.svg");
    background-size: cover;
    background-repeat: no-repeat;
    color: black;
 }
.bg2{
    background-image: url("../assets/bgColum.svg");
    background-size: cover;
    background-repeat: no-repeat;
 }

.animationPersonalite:hover {
    animation: shake 0.5s; 

}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
