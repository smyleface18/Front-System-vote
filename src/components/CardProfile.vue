<script setup>
import IconEdit from './icons/IconEdit.vue'
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
 const props = defineProps(['id','name','email'])
 let edit = ref(false)

onMounted(() =>{
    const BUTTON_EDIT = document.querySelector("#buttonEdit");

    BUTTON_EDIT.addEventListener('click',() =>{
        edit.value = !edit.value;
        if(edit.value){
            Swal.fire({                    
                    text: "You can change one or several data of your account, if you want to change only one, then you only have to write in the one you want to change the information and leave the others the same.",
                    icon: "info"})
        }
    })

    sendForm()
})

function sendForm() {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const { value: password } = await Swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Your password",
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
            return "You need to write something!";
            }
        }
        });
        console.log(inputs[0].value)
        console.log(inputs[1].value)
        console.log(inputs[2].value)
        fetch("http://127.0.0.1:8080/user/updata",{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({    
                id:props.id,
                name: inputs[0].value != ""? inputs[0].value : props.name,
                email: inputs[1].value != ""? inputs[1].value : props.email,
                password: password,
                newPassword: inputs[2].value
                }
            )
        })

        edit.value = !edit.value;
    });
}

</script>
<template>
    <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma@4/bulma.css" rel="stylesheet">
    <div class="h-full w-full bg--600 flex flex-col justify-start items-center">
        <button class="ml-[80%]">
            <IconEdit id="buttonEdit"></IconEdit>
        </button>
        <img src="../assets/caballeroV2.png" alt="foto profile" class="w-1/2 rounded-full bg-black">
        <div v-if="!edit" class="flex flex-col space-y-5 p-10 w-full">
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Name</h6>
                <p>{{ props.name }}</p>
            </div>
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Email</h6>
                <p>{{ props.email }}</p>
            </div>
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Password</h6>
                <p>************</p>
            </div>
        </div>
        <form v-show="edit" action="" class="flex flex-col space-y-5 p-10 w-full">
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Name</h6>
                <input type="text" name="" id="name" class="bg-red-200 rounded focus:outline-none w-full" :placeholder="props.name">
            </div>
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Email</h6>
                <input type="email" name="" id="email" class="bg-red-200 rounded focus:outline-none w-full" :placeholder="props.email">
            </div>
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Password</h6>
                <input type="text" name="" id="password" class="bg-red-200 rounded focus:outline-none w-full" placeholder="new password">
            </div>
            <button type="submit" class=" rounded bg-red-500 text-white">Send</button>
        </form>
    </div>
</template>