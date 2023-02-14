const currentLvlInput = document.querySelector(".current-lvl");
const targetLvlInput = document.querySelector(".target-lvl");
const currentXPInput = document.querySelector(".current-xp");
const crafttXPInput = document.querySelector(".craft-xp");

const XpDifference = document.querySelector(".xp-difference .value");
const CraftDifference = document.querySelector(".crafts-needed .value");

const calculateBtn = document.querySelector(".calculate-btn");

let currentLVL = parseFloat(currentLvlInput.value);
let targetLVL = parseFloat(targetLvlInput.value);
let currentXP = parseFloat(currentXPInput.value);
let craftXP = parseFloat(crafttXPInput.value);


const calculateXPD = (x,y,z) => {
    checkValues();
    refreshInputValues();

    // Declare an array of undefined size
    var arr = [];
	var cur = [];

    var x = currentLVL;
    var y = targetLVL;
    var z = currentXP;

    // Initiating loop to iterate
    // for inputs
    for (var i = 0; i < y+1; i++) { 
  
        // Feeding integer inputs to array
        arr[i] = Math.floor(200 * (i ** (1 + i/100)));
          
        // Calculate sum of array elements
        var sum = arr.reduce(function (a, b) {
            return a + b;
        }, 0)
    }
	
	for (var i = 0; i < x+1; i++) { 
  
        // Feeding integer inputs to array
        cur[i] = Math.floor(200 * (i ** (1 + i/100)));
          
        // Calculate sum of array elements
        var dum = cur.reduce(function (a, b) {
            return a + b;
        }, 0)
    }	
	
    let xpd = sum - dum - z;

    return xpd;

}

const checkValues = () => {
    let currentLvlvalue = currentLvlInput.value;
    let targetLvlvalue = targetLvlInput.value;
    let currentXPvalue = currentXPInput.value;
    let craftXPvalue = crafttXPInput.value;

    let regexNumber = /^[0-9]+$/;

    if(!currentLvlvalue.match(regexNumber) || !targetLvlvalue.match(regexNumber) || !currentXPvalue.match(regexNumber)) {
        currentLvlInput.value = "0";
        targetLvlInput.value = "1";
        currentXPInput.value = "0";
        alert("Why are you trying to break my calculator?");
    }

    if(!craftXPvalue.match(regexNumber)) {
        crafttXPInput.value = "1";
        alert("Why are you trying to break my calculator?");
    }

    if(craftXPvalue < 1) {
        crafttXPInput.value = "1";
        alert("STOP! Dividing by 0 destroys the universe!");
    }

    if(currentLvlvalue > 400 || targetLvlvalue > 400) {
        currentLvlInput.value = "0";
        targetLvlInput.value = "1";
        alert("If you are actually aiming for this level you are spending too much time gaming");
    }

    if(targetLvlvalue <= currentLvlvalue) {
        targetLvlInput.value = Math.abs(currentLvlvalue - currentLvlvalue - currentLvlvalue - 1);
        if(currentLvlInput.value < 0) {
            currentLvlInput.value = "0";
            targetLvlInput.value = "1";
        }
    }

}

const refreshInputValues = () => {
    currentLVL = parseFloat(currentLvlInput.value);
    targetLVL = parseFloat(targetLvlInput.value);
    currentXP = parseFloat(currentXPInput.value);
}

const inti = () => {
    let xpd = calculateXPD();
    if(xpd < 0){
        XpDifference.innerHTML = "Error: Current XP too high";
    }else{
        updateData(xpd,crafttXPInput.value);        
    }
}

const updateData = (xpd,xpc) => {
    
    XpDifference.innerHTML = xpd.toLocaleString("en-US");
    let j = Math.ceil(xpd/xpc);
    CraftDifference.innerHTML = j.toLocaleString("en-US");

}

inti();

calculateBtn.addEventListener("click", inti);