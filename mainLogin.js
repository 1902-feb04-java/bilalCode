'use strict'

window.addEventListener('DOMContentLoaded', ()=> {
    let user=document.getElementById('user');
    let pw=document.getElementById('pw');
    let login=document.getElementById('login');
    let newUser=document.getElementById('user');
    let newPass=document.getElementById('pw');
    let register=document.getElementById('register');



    login.addEventListener('register',(e)=>{
        sessionStorage.setItem(newUser.value,newPass.value);
        e.preventDefault();
    })
 
    
    // username.addEventListener('submit', () => {
    // if (username.textContent.length < 6 ) { 
    //     let footer = document.createElement('p');
    //     footer.textContent = 'Username is too short';
    //     document.body.appendChild(footer);
    //     }
    // });



})