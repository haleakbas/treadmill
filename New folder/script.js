window.onload = function(){
    if(!window.location.hash){
        window.location = window.location + '#loaded';
        window.location.reload();
    }

let count = 0;
let sCount = 0;
document.getElementById("incline-up-btn").onclick = function(){
    if (count < 15){
        count += 1;
    }
    
    document.getElementById("countlabel1").innerHTML = count;
}

document.getElementById("incline-down-btn").onclick = function(){
    if(count > 0){
        count -= 1;
    }
    document.getElementById("countlabel1").innerHTML = count;
}

document.getElementById("speed-up-btn").onclick = function(){
    if(sCount < 10){
        sCount += .5;
    }
    document.getElementById("countlabel2").innerHTML = sCount;
    

}

document.getElementById("speed-down-btn").onclick = function(){
    if(sCount > 0){
        sCount -= .5;
    }
    document.getElementById("countlabel2").innerHTML = sCount;
    
}

document.getElementById("calculate").onclick = function(){
    console.log("countlabel1" + "countlabel2");
}

 
// function calculate(){

//     let incline = document.getElementById("countlabel1").value;
//     count = count / 100; //turning the percentage to a decimal
//     let speed = document.getElementById("countlabel2").value;
//     speed = speed * 26.8; //converting it to meters
//     let weight = document.getElementById("weight").value;
//     let time = document.getElementById("time").value;
//     let distance = document.getElementById("distance").value;
//     distance = (distance * 1.6 * 1000);

    
    


// }

}