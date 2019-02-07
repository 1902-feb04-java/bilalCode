//ajax is how the website grabs info in a way so the page does not reload
'use strict'


document.addEventListener('DOMContentLoaded', ()=> {
    let jokeHeader = document.getElementById('joke');
    let jokeButton = document.getElementById('joke-button');

    jokeButton.addEventListener('click', ()=> {
        let jokeText = getJoke();
        jokeHeader.textContent = jokeText;
    });
});

function getJoke() {
    //AJAX stands for asynchorous JS and XML
    // means HTTP requests through JS
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', ()=>{
        console.log(`readyState: ${xhr.readyState}`);

        if (xhr.readyState ===4) {
            let responseJSON = xhr.response;
            console.log(responseJSON);
            if(xhr.status >= 200 && xhr.status < 300);
        }
    })
}