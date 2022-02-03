$('body').append('<button id = "beanButton">Beans Test</button>');
$('#beanButton').click(function(){
    alert('This is the Beans Button!')
});
//!this is for step 1


// let myButton = document.createElement("button"); 
// let buttonContainer = document.createElement("div");

// myButton.textContent = "Beans Test"

// document.body.appendChild(buttonContainer);
// buttonContainer.appendChild(myButton);

// myButton.addEventListener('click', function(){
//     alert("Good Job!")
// })




//!Step 2

// document.getElementById('button1').addEventListener('click', function(){
//     var x = document.getElementById("textBox");
//     let boxText = x.value;
//     alert(boxText);

//     //  function getTextContent() {
//     //      alert(document.getElementById("demo").textContent)
//     //    }
    
    
// });


$('#button1').click(function(){
    let boxText = $('#textBox').val();
    //console.log(boxText)
    alert(boxText);
    
    
})

//!Step 3 baby!
 let mySquareDiv= $('#square');
 
 mySquareDiv.mouseenter(function(){
     let squareColor= mySquareDiv
     squareColor.css('background-color', randomColor());
 })

 mySquareDiv.mouseleave(function(){
    let squareColor= mySquareDiv
    squareColor.css('background-color', 'white');
})

// document.getElementById("square").addEventListener("mouseenter", function(){
//     let squareColor = document.getElementById("square");
//     squareColor.style.background= randomColor();
// }); 

// document.getElementById("square").addEventListener("mouseleave", function(){
//     let squareColor = document.getElementById("square");
//     squareColor.style.background= 0, 0, 0 ;
// }); 


function randomColor(){
    let r = Math.floor(Math.random() * 256);
    
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
    
}

//!Step 4 we're tearing it up!

let myP1= $('#p1')

myP1.mouseenter(function(){
    let pColor= myP1
    pColor.css('background-color', randomColor());
});

// document.getElementById("p1").addEventListener("mouseenter", function(){
//     let pColor = document.getElementById("p1");
//     pColor.style.background= randomColor();
// }); 


myP1.mouseleave(function(){
    let pColor= myP1
    pColor.css('background-color', 'white');
});

// document.getElementById("p1").addEventListener("mouseleave", function(){
//     let pColor = document.getElementById("p1");
//     pColor.style.background= 0, 0, 0 ;
// }); 

myP1.click(function(){
    //let pTextColor= $('p1');
    $('#p1').css('color', randomColor())
});

// document.getElementById('p1').addEventListener('click', function(){
//     let pTextColor = document.getElementById("p1");
//     pTextColor.style.color = randomColor();
    
// });


//!Step 5 Almost there!!



// let mySpan = document.createElement('span');
// mySpan.textContent = "Joseph Moran"
// let div2Get = document.getElementById('div2');


$('#button2').click(function(){
    $('#div2').append('<span id = "beanButton">Joseph Moran</button>');
    $('#beanButton').css("color", randomColor())

    $('#button2').attr('disabled', true); //how to stop button from being pressed??
});

// document.getElementById('button2').addEventListener('click', function(){
//     div2Get.appendChild(mySpan);
//     mySpan.style.color = randomColor();
//     console.log('spawn successful');
    
    
// });


//!Step 6 So this is the power of jQuery


let list1 = $('#list1')

//let list1 = document.getElementById('list1')


let myFriends = ['Nick', 'Lauren', 'John', 'Matt', 'Paul', 'Peter', 'Steve', 'Ervin Howell', 'Ant', 'Eric']

$('#button3').click(function(){
    for(let i = 0; i< myFriends.length; i++){
        let myLi = $(`<li>${myFriends[i]}</li>`)
        myLi.css('background-color', randomColor()).css('color', randomColor())
        $('#list1').append(myLi)
        //myLi.val(i)
       // list1.appendTo(myLi);
    }
    $('#button3').attr('disabled', true);
})

// document.getElementById('button3').addEventListener('click', function(){
//     for (let i =0; i< myFriends.length; i++) {

//     let myLi = document.createElement('li');
//     myLi.textContent= myFriends[i]
//     list1.appendChild(myLi)

    
// }
// document.getElementById('button3').disabled= true;
// })
