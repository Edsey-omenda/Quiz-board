alert("Welcome  to Java script  quizes");
function  confirm()  {
    document.getElementById("after_start").style.visibility="visible";
}

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
    if (testThree == "Round up a value  to  the  nearest interger"){
        score +=1;
    }
    if (testFour == "Joining two  or  more  things  together"){
        score +=1;
    } 
    var grade_messages = ["Distinction", "Credit", "Pass", "Fail"];

    var scale;

    if(score < 1) {
        scale = 2;
    }

    if (score > 0 && score < 4) {
        scale = 1;
    }

    if (score > 2) {
        scale = 0;
    }
    document.getElementById("grade_message").innerHTML = grade_messages(scale);
    document.getElementById("scoreCard").innerHTML = "Your  score is" + "score";
}

