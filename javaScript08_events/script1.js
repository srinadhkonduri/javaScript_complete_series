// selecting owl and clicking and getting owl function it

// document.getElementById('owl').onclick = function(){
//     alert("owl clicked");
// }

// accessing owl clicked by event listener
// this is the best approach which is to add event listener
// here false means event bubbling
    // type , timeStamp , default position
    // target ,to element ,src element , current target
    // client x , client y , screen x , screen y

document.getElementById('images').addEventListener('click',function(event){
    // console.log("clicked in the ul")
},false)
document.getElementById('owl').addEventListener('click',function(event){
    // console.log("clicked the owl")
},false)

// here owl element is inside the images element if we click the screen 
// it shows clicked the ul
// or  else if we clicked the owl it shows clicked the owl and clicked the ul this is called event propagation = bubbling up (inside to outside)


// cpaturing mode = top to bottom


document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    // here the preventDefalut(); function when clicked it prevents to open
    // the hyper link provided


    // console.log("google clicked")
},false)

// mini project click the image it should be disappeared

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove();
    }
})
