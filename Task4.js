let a = parseInt(prompt('enter number'));
let b = parseInt(prompt('enter number'));

let timerId = setInterval(function(){
    for (let i = a; i <= b; i++) {
        console.log(i);
        if (i === b) {
            clearInterval(timerId);
        }
    }
}, 1000);


