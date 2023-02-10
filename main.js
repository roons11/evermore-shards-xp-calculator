const currentLvlInput = document.querySelector(".current-lvl");
const targetLvlInput = document.querySelector(".target-lvl");

const XpDifference = document.querySelector(".xp-difference .value");

const calculateBtn = document.querySelector(".calculate-btn");

let currentLVL = parseFloat(currentLvlInput.value);
let targetLVL = parseFloat(targetLvlInput.value);

const calculateXPD = (x,y) => {

    // Declare an array of undefined size
    var arr = [];
	var cur = [];

    var x = currentLVL;

    var y = targetLVL;

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
	
    let xpd = sum - dum;

    return xpd;

}

const updateData = (xpd) => {

    XpDifference.innerHTML = xpd.toLocaleString("en-US");

}

const refreshInputValues = () => {
    currentLVL = parseFloat(currentLvlInput.value);
    targetLVL = parseFloat(targetLvlInput.value);
}

const inti = () => {
    refreshInputValues();
    let xpd = calculateXPD();
    updateData(xpd);
}

inti();

calculateBtn.addEventListener("click", inti);