var openbtn = document.querySelector(".button");
var closebtn = document.querySelector(".popup");

// openbtn.addEventListener('click', function(){
//     document.body.classList.add('popup-active');
// })

// closebtn.addEventListener('click', function(){
//     document.body.classList.remove('popup-active');
// })
function openHandler(){
    openbtn.classList.add('hidden');
    openbtn.classList.remove('visible');
    closebtn.classList.add('visible');
    closebtn.classList.remove('hidden');
}
function closeHandler(){
    openbtn.classList.add('visible');
    openbtn.classList.remove('hidden');
    closebtn.classList.add('hidden');
    closebtn.classList.remove('visible');
}
function checkhandler(){
    if(openbtn.classList.contains('visible'))
    {
        openHandler();
    }
    else{closeHandler();}
}