//dom

'use strict'

// document.body.style.backgroundColor='lightyellow'; //this won't work unless the script is loaded after the body


window.onload = function(){
    document.body.style.backgroundColor='lightyellow'
}
//for every event, you can register a event handler with a property name 'on<eventname>', an event handler is a function
// js has a special object called the global object aka "window", every variable in global scope is actually stored on the window object

//a more flexible way to do this:
window.addEventListener('load', () => {
    let header = document.body.firstElementChild;
    header.textContent = "DOM changed this"
});

//ideally we dont wait all the way until the window loads
//that means after all the images etc. have downloads

// window.addEventListener('DOMContentLoaded', () {
//     let header = document.getElementById('headertext');
//     let col1 = document.getElementById('col1');

//     document.querySelector('#headertext');

    
//     let counter =0;
//     header.addEventListener('click', () =>{
//         counter++;
//         header.textContent = 'DOM Changed This (clicked ${counter} time(1)';
//         col1.innerHTML = '<em>Col</em> <u>1</u>'
//     });   
// });

function printEventDetails(event) {
    console.log(`event type: ${event.type}`); //name of event
    console.log(`event target: ${event.target}`); //element that fired the event originally
    console.log(`event currentTarget: ${event.currentTarget}`); //element that event handler is registered on
    console.log(`this: ${this}`); //"this" is bound to the same as currentTarget (unless this is an arrow function)
    console.log('');
// if your event handlers take an argument, it will be set to the event object

// methods availabile on the event obj: preventDefault()[browser has default event handlers]
//preventDefault lets us stop the default behavior from occuring
//stopPropagation() [this switches all event handlers on later elements in the sequence]
//stopImmediatePropagation() {}
}