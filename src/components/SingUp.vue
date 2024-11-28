<script setup>
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2' 
let inputs;
let isFocus = ref([]);
let passwords 
onMounted (() => {
    inputs = [...document.querySelectorAll(".inputs")];
    passwords =[...document.querySelectorAll('#passwordUser')];
    
    inputs.forEach(input =>{
        isFocus.value.push(false);
    })
    Onfocus();
    Onblur();
    registerData()
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
function EqualPasswords(){
    return (passwords[0].value == passwords[1].value);
}
function registerData(){
    let register = document.querySelector("#form");
    register.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(EqualPasswords()){
            fetch('http://127.0.0.1:8080/user/create',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body :JSON.stringify({
                    name : inputs[0].value,
                    email : inputs[1].value,
                    password:inputs[2].value
                })
            }).then(response => response.json())
            .then(data => {    
                console.log(data)                 
                Swal.fire({ 
                    title: data.title, 
                    text: data.message,
                    icon: data.icon}); })
                   
             .catch((error) => { 
                console.log(error)
             });

            inputs.forEach(input =>{
                input.value = ''; 
            })
        }
        else{
            Swal.fire({ 
            title: "Passwords do not match", 
            text: "Please enter the same password in both entries",
            icon: "warning"});
            passwords[1].value = '';
        }
});
}
</script>

<template>
    <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma@4/bulma.css" rel="stylesheet">
    <div id="bg" class="w-[100vw]  flex items-center justify-center">
        <div class="flex items-center justify-center h-2/3 w-[60%]  rounded">
            <div id="textWelcome" class="h-full w-3/4 flex flex-col space-y-5 text-white bg-[#00000062] p-10 mr-[-10px] ">
                    <div class="size-10">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_6_330)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                                fill="currentColor"
                            ></path>
                            </g>
                            <defs>
                            <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                            </defs>
                        </svg>
                    </div>
                <div class="flex h-1/2">
                    <h4 class="">Hello, I am very happy that you decided to use Freevote
                        , I hope it will be of great help to you.
                        <br>
                        Best regards,<br>
                        Caleb Acosta Ortiz creator of Freeevote.
                    </h4>
                    <img src="../assets/image-removebg-preview (3).png" alt="" class="h-full mt-[-30px]">
                </div>
            </div>    
            <form id="form" action="" method="post" class="flex flex-col space-y-8  w-4/6 h-full px-5 justify-center bg-white rounded-lg">
                    
                    <div class="containerInput mx-auto" :class="{'bg-[var(--aurora-1-2)]':isFocus[0]}" >
                        <span class="bg-[var(--color-terceary)] h-[100%] rounded px-2 text-white   flex items-center" :class="{'!bg-[var(--aurora-1-2)] !text-black':isFocus[0]}">Name</span><input type="text" name="" id="nameUser" placeholder="name" class="inputs h-full" required>
                    </div>
                    <div class="containerInput mx-auto" :class="{'bg-[var(--aurora-1-2)]':isFocus[1]}" >
                    <span class="bg-[var(--color-terceary)] h-[100%] rounded px-2 text-white   flex items-center" :class="{'!bg-[var(--aurora-1-2)] !text-black':isFocus[1]}">Email</span><input type="email" name="" id="emailUser" placeholder="your email" class="inputs h-full" required>
                  </div>
                  <div class="containerInput mx-auto" :class="{'bg-[var(--aurora-1-2)]':isFocus[2]}" >
                    <span class="bg-[var(--color-terceary)] h-[100%] rounded px-2 text-white   flex items-center" :class="{'!bg-[var(--aurora-1-2)] !text-black':isFocus[2]}">Password</span><input type="password" name="" id="passwordUser" placeholder="your password" class="inputs h-full" required>
                  </div>
                  <div class="containerInput mx-auto" :class="{'bg-[var(--aurora-1-2)]':isFocus[3]}" >
                    <span class="bg-[var(--color-terceary)] h-[100%] rounded px-2 text-white  flex items-center" :class="{'!bg-[var(--aurora-1-2)] !text-black':isFocus[3]}">Password</span><input type="password" name="" id="passwordUser" placeholder="repeat password" class="inputs h-full" required>
                  </div>
                  <div class="containerInput mx-auto space-x-5 flex justify-center " >
                    <input type="checkbox" name="" id="checkTerms" class="" required><span class=" h-full rounded px-2  text-xs  flex items-center">I agree the <a href="" class="font-semibold" >Terms of User</a></span>
                  </div>
                  <input type="submit" value="Login"  class="p-1 w-2/3 rounded m-auto  hover:bg-[var(--aurora-1-2)] hover:text-black text-white bg-[var(--color-terceary)]  hover:cursor-pointer hover:scale-105">
            </form>     
        </div>
    </div>
</template>
<style scoped>

#textWelcome{
    background-image: url('../assets/layered-waves-haikei (1).svg');
    background-size: cover;
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
        transition: all 0.3s linear;
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