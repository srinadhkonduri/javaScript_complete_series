const clock = document.getElementById('clock')

// here we are using set interval time 

// syntax 
// for making a clock we can a setinterval function
// which can we very useful for setting time interval

setInterval(function(){
    let date = new Date()
    clock.innerHTML= (date.toLocaleTimeString())
},1000)