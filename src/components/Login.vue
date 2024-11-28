<script setup>
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2' 
let inputs;
let isFocus = ref([]);
onMounted (() => {
    inputs = [...document.querySelectorAll(".inputs")];
    inputs.forEach(input =>{
        isFocus.value.push(false);
    })
    Onfocus();
    Onblur();
})

function Onfocus(){
    inputs.forEach((element,index) => {
        element.addEventListener('focus', () =>{
            if(!isFocus.value[index]){
                isFocus.value[index] = !isFocus.value[index]
            }
        });
    });
}
function Onblur(){
    inputs.forEach((element,index) => {
        element.addEventListener('blur', () =>{
            if(element.value == ""){
                isFocus.value[index] = !isFocus.value[index]
            }

        });
    });
}

</script>

<template>
    <div id="bg" class="w-[100vw]  flex items-center justify-center">
        <div class="flex items-center h-2/3 bg-white rounded">
            <form action="" method="post" class="flex flex-col space-y-8  w-4/6 h-full px-5 justify-center">
                    <img src="../assets/usuario (1).png" alt="icon people" class="w-2/5 mx-auto">
                    <div class="containerInput mx-auto" :class="{'bg-[var(--aurora-1-2)]':isFocus[0]}" >
                        <span class="bg-[var(--color-terceary)] h-[100%] rounded px-2 text-white   flex items-center" :class="{'!bg-[var(--aurora-1-2)] !text-black':isFocus[0]}">Name</span><input type="text" name="" id="nameUser" placeholder=" your name or email" class="inputs h-full" required>
                    </div>
                    <div class="containerInput mx-auto" :class="{'bg-[var(--aurora-1-2)]':isFocus[1]}" >
                    <span class="bg-[var(--color-terceary)] h-[100%] rounded px-2 text-white text-lg  flex items-center" :class="{'!bg-[var(--aurora-1-2)] !text-black':isFocus[1]}">Password</span><input type="password" name="" id="passwordUser" placeholder="your password" class="inputs h-full" required>
                  </div>
                  <input type="submit" value="Login" class="p-1 w-2/3 rounded m-auto  hover:bg-[var(--aurora-1-2)] hover:text-black text-white bg-[var(--color-terceary)]  hover:cursor-pointer hover:scale-105">
            </form>
            <div class="h-full w-2/3">
                <img class="h-full w-full" src="../assets/phone_vote-good-fotor-2024112614711.png" alt="" >
            </div>         
        </div>
    </div>
</template>
<style scoped>
    html{
        overflow: hidden;
    }
    #bg{
        height: calc(100vh - 65px);
        background-image: url('../assets/bgLogin.svg');
        -webkit-box-shadow: inset 10px 62px 215px -15px rgba(77,76,77,1);
        -moz-box-shadow: inset 10px 62px 215px -15px rgba(77,76,77,1);
        box-shadow: inset 10px 62px 215px -15px rgba(77,76,77,1);
    }
    .containerInput{
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius:5px;
        height: 30px;
        padding-right: 5px;
        width: 75%;
        
    }
    span, .containerInput{
        transition: all 0.3s ease;
    }
    .inputs {
        width: 100%;
        padding-left: 10px;
    }
    .inputs:focus {
        outline: none;
    }
    .input:focus + span {
      outline: none;
    }
</style>