alert("Welcome  to Java script  quizes");
function  confirm()  {
    document.getElementById("after_start").style.visibility="visible";
}

function search() {
    var testOne = document.getElementById("1");
    var testTwo = document.getElementById("2");
    var testThree = document.getElementById("3");
    var testFour = document.getElementById("4");
    var button = document.querySelector("s-btn");
    var score = 0;


    if(testOne == "Scripting language"){
        score +=1;
    }

    if (testTwo == "Record output of java programs"){
        score +=1;
    }
    if (testThree == "Roundup a value  to  the  nearest interger"){
        score +=1;
    }
    if (testFour == "Joining two  or  more  things  together"){
        score +=1;
    }
   
}

document.getElementById("after_s-btn").style.visibility = "visible"; 
button.addEventListener('click', search());