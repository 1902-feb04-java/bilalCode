'use strict'

window.addEventListener('DOMContentLoaded', ()=> {
    let username=document.getElementById('user');
    let pass=document.getElementById('pw');
    
    
    username.addEventListener('submit', () => {
    if (username.textContent.length < 6 ) { 
        let footer = document.createElement('p');
        footer.textContent = 'Username is too short';
        document.body.appendChild(footer);
        }
    });



})