let myButton = document.createElement("button"); //this is for step 1
let buttonContainer = document.createElement("div");

myButton.textContent = "Beans Test"

document.body.appendChild(buttonContainer);
buttonContainer.appendChild(myButton);

myButton.addEventListener('click', function(){
    alert("Good Job!")
})


//Step 2

document.getElementById('button1').addEventListener('click', function(){
    var x = document.getElementById("textBox");
    let boxText = x.value;
    alert(boxText);

    //  function getTextContent() {
    //      alert(document.getElementById("demo").textContent)
    //    }
    
    
});

//Step 3 baby!


document.getElementById("square").addEventListener("mouseenter", function(){
    let squareColor = document.getElementById("square");
    squareColor.style.background= randomColor();
}); 

document.getElementById("square").addEventListener("mouseleave", function(){
    let squareColor = document.getElementById("square");
    squareColor.style.background= 0, 0, 0 ;
}); 


function randomColor(){
    let r = Math.floor(Math.random() * 256);
    
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
    
}

//Step 4 we're tearing it up!

document.getElementById("p1").addEventListener("mouseenter", function(){
    let pColor = document.getElementById("p1");
    pColor.style.background= randomColor();
}); 

document.getElementById("p1").addEventListener("mouseleave", function(){
    let pColor = document.getElementById("p1");
    pColor.style.background= 0, 0, 0 ;
}); 

document.getElementById('p1').addEventListener('click', function(){
    let pTextColor = document.getElementById("p1");
    pTextColor.style.color = randomColor();
    
});


//Step 5 Almost there!!

let mySpan = document.createElement('span');
mySpan.textContent = "Joseph Moran"
let div2Get = document.getElementById('div2');


document.getElementById('button2').addEventListener('click', function(){
    div2Get.appendChild(mySpan);
    mySpan.style.color = randomColor();
    console.log('spawn successful');
    
    
});


//Step 6 So this is the power of DOM


let list1 = document.getElementById('list1')


let myFriends = ['Nick', 'Lauren', 'John', 'Matt', 'Paul', 'Peter', 'Steve', 'Ervin Howell', 'Ant', 'Eric']

document.getElementById('button3').addEventListener('click', function(){
    for (let i =0; i< myFriends.length; i++) {

    let myLi = document.createElement('li');
    myLi.textContent= myFriends[i]
    list1.appendChild(myLi)

    
}
document.getElementById('button3').disabled= true;
})
