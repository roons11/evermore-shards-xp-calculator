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
    for (var i = x+1; i < y+1; i++) { 
  
        // Feeding integer inputs to array
        arr[i] = Math.floor(200 * (i ** (1 + i/100)));
          
        // Calculate sum of array elements
        var sum = arr.reduce(function (a, b) {
            return a + b;
        }, 0)
    }
	
    let xpd = sum - z;

    return xpd;

}

const checkValues = () => {
    let currentLvlvalue = currentLvlInput.value;
    let targetLvlvalue = targetLvlInput.value;
    let currentXPvalue = currentXPInput.value;
    let craftXPvalue = crafttXPInput.value;

    if(Math.abs(targetLvlvalue) <= Math.abs(currentLvlvalue)) {
        targetLvlInput.value = Math.abs(currentLvlvalue) + 1;
        if(currentLvlInput.value < 0) {
            currentLvlInput.value = "0";
            targetLvlInput.value = "1";
        }
    }

    if(craftXPvalue < 1) {
        crafttXPInput.value = "1";
    }  

    if(currentLvlvalue >= 400 || targetLvlvalue > 400) {
        currentLvlInput.value = "0";
        targetLvlInput.value = "1";
        alert("If you are actually aiming for this level you are spending too much time gaming");
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
        checkValues();
        XpDifference.innerHTML = "Error: Current XP too high";
        CraftDifference.innerHTML = "N/A";
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

/*
calculateBtn.addEventListener("click", inti);
*/

const myCurrent = document.querySelector('input[class="current-lvl"]');
const myTarget = document.querySelector('input[class="target-lvl"]');
const myXP = document.querySelector('input[class="current-xp"]');
const myCraft = document.querySelector('input[class="craft-xp"]');

myCurrent.addEventListener("input", (e) => {
  inti();
});

myTarget.addEventListener("change", (e) => {
    
    let currentLvlvalue = currentLvlInput.value;
    let targetLvlvalue = targetLvlInput.value;

    if(Math.abs(targetLvlvalue) <= Math.abs(currentLvlvalue)) {
        currentLvlInput.value = Math.abs(targetLvlvalue) - 1;
        if(currentLvlInput.value < 0) {
            currentLvlInput.value = "0";
            targetLvlInput.value = "1";
        }
    }

    inti();
});

myXP.addEventListener("input", (e) => {
  inti();
});

myCraft.addEventListener("input", (e) => {
    inti();
});

  