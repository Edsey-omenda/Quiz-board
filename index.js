alert("Welcome  to Java script  quizes");
function  confirm()  {
    document.getElementById("after_start").style.visibility="visible";
}
const buttonsubmit = document.getElementById("s-btn");

function search() {
    var testOne = document.getElementById("1");
    var testTwo = document.getElementById("2");
    var testThree = document.getElementById("3");
    var testFour = document.getElementById("4");
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