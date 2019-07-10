function act1(){
    $('.act1').animate({
        top:"0",
        height:"100%"
    },100).animate({
        top:"25%",
        height:"50%"
    },100);
}
function act2(){
    $('.act2').animate({
        top:"0",
        height:"100%"
    },100).animate({
        top:"25%",
        height:"50%"
    },100);
}
function act3(){
    $('.act3').animate({
        top:"0",
        height:"100%"
    },100).animate({
        top:"25%",
        height:"50%"
    },100);
}
function act4(){
    $('.act4').animate({
        top:"0",
        height:"100%"
    },100).animate({
        top:"25%",
        height:"50%"
    },100);
}
function act5(){
    $('.act5').animate({
        top:"0",
        height:"100%"
    },100).animate({
        top:"25%",
        height:"50%"
    },100);
}
function msg(){
    $('.msg').animate({
        opacity:"1"
    },500).animate({
        opacity:"0.5"
    },500);
}
$(function(){
    setInterval(function(){
    setTimeout(msg,0);
    setTimeout(act1,100);
    setTimeout(act2,200);
    setTimeout(act3,300);
    setTimeout(act4,400);
    setTimeout(act5,500);
},1000);
})
