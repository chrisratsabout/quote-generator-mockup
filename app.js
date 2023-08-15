const form = document.querySelector("form");
const unit = document.querySelector("#unit");
const customer = document.querySelector("#customer");
let quantity = document.querySelector("#quantity");
let model = document.querySelector(".model");
let description = document.querySelector(".description");
let unitPrice = document.querySelector(".unit-price");
let totalQuotePrice = document.querySelector(".total-quote-price");
let guitarImage = document.querySelector(".guitar-image");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    try {
        const res = await fetch("data.json")
        const data = await res.json();
   
        console.log(data)   
        console.log(data[0].model) 
        let unitName = document.forms["user-form"].units.value;
    let customerType = document.forms["user-form"].customers.value;
    let desiredQuantity = quantity.value;
    generateQuotePrice(data, unitName, customerType, desiredQuantity);
    } catch {
       alert("An error has occurred.")
    }
})

function generateQuotePrice(data, unitName, customerType, desiredQuantity) {
    let chosenUnit = "";
    let pricePerUnit = 0;
    let totalQuoteForUnit = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].model == unitName) {
            chosenUnit = data[i].model;
            if (customerType == 'standard'){
                pricePerUnit = data[i].standard_price;
            } else if (customerType == 'distributor'){
                pricePerUnit = data[i].distributor_price;
            } 
        }
    }
    totalQuoteForUnit = (pricePerUnit * desiredQuantity).toFixed(2);
    unitPrice.textContent = `$${pricePerUnit}`;
    totalQuotePrice.textContent = `$${totalQuoteForUnit}`
    renderQuotedUnitName(chosenUnit);
    renderQuotedUnitDescription(data, chosenUnit);
    renderImage(data, chosenUnit)
}

function renderQuotedUnitName(chosenUnit){
    model.innerHTML= chosenUnit;
}

function renderQuotedUnitDescription(data, chosenUnit){
    let descriptionText = "";
    for(let i = 0; i < data.length; i++){
        if(data[i].model == chosenUnit){
            descriptionText = data[i].description;
        }
    }
    description.innerHTML = descriptionText;
}

function renderTotalQuotePrice(totalQuoteForUnit){
    totalQuotePrice.textContent= `$${totalQuoteForUnit.toFixed(2)}`;
}

function renderImage(data, chosenUnit){
    let imageSrc = "";
    for(let i = 0; i < data.length; i++){
        if(data[i].model == chosenUnit){
            imageSrc = data[i].image_path;
        }
    }
    guitarImage.setAttribute("src", imageSrc);
}