
//  final results
var meanRes;
var weightedRes;

var valid;

//  percentage of each activity
var percentage1;
var percentage2;
var percentage3;
var percentage4;


//  weight of each activity
var weight1;
var weight2;
var weight3;
var weight4;


//  grade of each activity
var grade1;
var grade2;
var grade3;
var grade4;


//  total gradepoints of each activity
var tGrade1;
var tGrade2;
var tGrade3;
var tGrade4;

//  maximum weight points of activities
var maxWeight;

const test = document.getElementByTagName('input');
test.addEventListener('input',updater);


// document.getElementsByTagName('input').addEventListener('change',testFunc);

// function testFunc(){
//     //  percentage of each activity
//     var grade1 = parseInt(document.getElementById('grade1-1').value);
//     var grade2 = parseInt(document.getElementById('grade2-1').value);
//     var grade3 = parseInt(document.getElementById('grade3-1').value);
//     // alert("grade:"+ grade1 + grade2 + grade3);
//     document.getElementById("result").innerHTML = "clicked";

// }

function updater(){
    weight1 = parseInt(document.getElementById('weight1').value);
    weight2 = parseInt(document.getElementById('weight2').value);
    weight3 = parseInt(document.getElementById('weight3').value);
    weight4 = parseInt(document.getElementById('weight4').value);

    grade1 = parseInt(document.getElementById('grade1-1').value);
    grade2 = parseInt(document.getElementById('grade2-1').value);
    grade3 = parseInt(document.getElementById('grade3-1').value);
    grade4 = parseInt(document.getElementById('grade4-1').value);

    tGrade1 = parseInt(document.getElementById('grade1-2').value);
    tGrade2 = parseInt(document.getElementById('grade2-2').value);
    tGrade3 = parseInt(document.getElementById('grade3-2').value);
    tGrade4 = parseInt(document.getElementById('grade4-2').value);
    // alert("updater called");
    calcPercent();
}

function calcPercent(){
    valid=0;
    if(!isNaN(grade1)&&!isNaN(tGrade1)){
        percentage1 = ((grade1/tGrade1)*100).toFixed(2);
        valid+=1;
    }
    else{percentage1=NaN}
    document.getElementById("percent1").innerHTML = percentage1;
    if(!isNaN(grade2)&&!isNaN(tGrade2)){
        percentage2 = ((grade2/tGrade2)*100).toFixed(2);
        valid+=1;
    }
    else{percentage2=NaN}
    document.getElementById("percent2").innerHTML = percentage2;
    if(!isNaN(grade3)&&!isNaN(tGrade3)){
        percentage3 = ((grade3/tGrade3)*100).toFixed(2);
        valid+=1;
    }
    else{percentage3=NaN}
    document.getElementById("percent3").innerHTML = percentage3;
    if(!isNaN(grade4)&&!isNaN(tGrade4)){
        percentage4 = ((grade4/tGrade4)*100).toFixed(2);
        valid+=1;
    }
    else{percentage4=NaN}
    document.getElementById("percent4").innerHTML = percentage4;
}

function calcMean(){
    var total =0;
    total = adder(total,percentage1);
    total = adder(total,percentage2);
    total = adder(total,percentage3);
    total = adder(total,percentage4);

    meanRes = (parseFloat(total) / valid).toFixed(2);
    alert("valid is:"+valid+" total:"+total);
    document.getElementById("result").innerHTML = "Mean = " + meanRes;
}

function adder(total,value){
    if (isNaN(value)){
        return total;
    }
    return parseFloat(total) + parseFloat(value);
}
function isEmpty(value){
    return(!value||value.length===0);
}

function calcWeight(){
    maxWeight=0;
    weightedRes=0;
    if(!isNaN(percentage1)&&!isNaN(weight1)){
        weightedRes+=parseFloat(percentage1*weight1);
        maxWeight+=weight1;
    }
    if(!isNaN(percentage2)&&!isNaN(weight2)){
        weightedRes+=parseFloat(percentage2*weight2);
        maxWeight+=weight2;
    }
    if(!isNaN(percentage3)&&!isNaN(weight3)){
        weightedRes+=parseFloat(percentage3*weight3);
        maxWeight+=weight3;
    }
    if(!isNaN(percentage4)&&!isNaN(weight4)){
        weightedRes+=parseFloat(percentage4*weight4);
        maxWeight+=weight4;
    }
    alert("weighted res: "+weightedRes+" maxWeight"+maxWeight);
    weightedRes=(parseFloat(weightedRes)/parseFloat(maxWeight)).toFixed(2);
    document.getElementById("result").innerHTML = "Weighted = " + weightedRes;
}

