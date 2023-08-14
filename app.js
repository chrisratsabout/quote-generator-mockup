const form = document.querySelector("form");
const unit = document.querySelector("#unit");
const customer = document.querySelector("#customer");
let quantity = document.querySelector("#quantity");
let model = document.querySelector(".model");
let description = document.querySelector(".description");
let unitPrice = document.querySelector(".unit-price");
let totalQuotePrice = document.querySelector(".total-quote-price");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let unitName = document.forms["user-form"].units.value;
    let customerType = document.forms["user-form"].customers.value;
    let desiredQuantity = quantity.value;
    generateQuotePrice(unitName, customerType, desiredQuantity);

})

function generateQuotePrice(unitName, customerType, desiredQuantity) {
    let chosenUnit = "";
    let pricePerUnit = 0;
    let totalQuoteForUnit = 0;
    for (let i = 0; i < units.length; i++) {
        if (units[i].name == unitName) {
            chosenUnit = units[i].name;
            if(customerType == 'stagnation'){
                pricePerUnit = units[i].stagnation;
            } else if (customerType == 'standard'){
                pricePerUnit = units[i].standard;
            } else if (customerType == 'distributor'){
                pricePerUnit = units[i].distributor;
            } 
        }
    }
    totalQuoteForUnit = pricePerUnit * desiredQuantity;
    console.log(chosenUnit);
    console.log(pricePerUnit);
    console.log(totalQuoteForUnit);
    renderQuotedUnitName(chosenUnit);
    renderQuotedUnitDescription(chosenUnit);
    renderQuotedPricePerUnit(pricePerUnit);
    renderTotalQuotePrice(totalQuoteForUnit);
}

function renderQuotedUnitName(chosenUnit){
    model.innerHTML= chosenUnit;
}

function renderQuotedUnitDescription(chosenUnit){
    let descriptionText = "";
    for(let i = 0; i < units.length; i++){
        if(units[i].name == chosenUnit){
            descriptionText = units[i].description;
        }
    }
    description.innerHTML = descriptionText;
}

function renderQuotedPricePerUnit(pricePerUnit){
    unitPrice.textContent= `$${pricePerUnit.toFixed(2)}`;
}

function renderTotalQuotePrice(totalQuoteForUnit){
    totalQuotePrice.textContent= `$${totalQuoteForUnit.toFixed(2)}`;
}

const units = [
    {
        name: "421B989AB",
        description: "DOUBLE EXTENSION, KEYWAY",
        stagnation: 322.45,
        standard: 229.42,
        distributor: 200.57
    },
    {
        name: "421B989AC",
        description: "SINGLE EXTENSION, WOODRUFF KEY",
        stagnation: 312.32,
        standard: 219.82,
        distributor: 194.83
    },
    {
        name: "423C819AA",
        description: "COMUTATOR ENDSHIELD",
        stagnation: 132.98,
        standard: 129.18,
        distributor: 102.36
    },
    {
        name: "256A070CA",
        description: "COMPLETE ASSEMBLED UNIT",
        stagnation: 3215.46,
        standard: 3085.78,
        distributor: 2866.21
    }
]