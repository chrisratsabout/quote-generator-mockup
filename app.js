const form = document.querySelector("form");
const unit = document.querySelector("#unit");
const customer = document.querySelector("#customer");
let quantity = document.querySelector("#quantity");
let model = document.querySelector(".model");
let description = document.querySelector(".description");
let unitPrice = document.querySelector(".unit-price");
let totalQuotePrice = document.querySelector(".total-quote-price");
let guitarImage = document.querySelector(".guitar-image");


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
            if (customerType == 'standard'){
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
    renderImage(chosenUnit)
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

function renderImage(chosenUnit){
    let imageSrc = "";
    for(let i = 0; i < units.length; i++){
        if(units[i].name == chosenUnit){
            imageSrc = units[i].img;
        }
    }
    guitarImage.setAttribute("src", imageSrc);
}

const units = [
    {
        name: "JBM9999",
        description: "Ibanez Jake Bowen Signature JBM9999 Electric Guitar - Azure Metallic Matte. Solidbody Electric Guitar, Signature, with Basswood Body, Maple/Walnut Neck, Ebony Fingerboard, and 2 Humbucking Pickups - Azure Metallic Matte",
        standard: 3499.99,
        distributor: 3299.99,
        img: "images/jbm9999.png"
    },
    {
        name: "JBM10FX",
        description: "Ibanez Jake Bowen Signature JBM10FX - Pearl White Matte. Solidbody Electric Guitar with Nyatoh Body, Maple Top, Maple Neck, Rosewood Fretboard, and 2 Humbucking Pickups - Pearl White Matte",
        standard: 1299.99,
        distributor: 1099.99,
        img: "images/jbm10fx.png"
    },
    {
        name: "JBM27",
        description: "Ibanez Jake Bowen Signature JBM27 - Black. 7-string Solidbody Electric Guitar with Mahogany Body, Maple Top, 3-pc Maple Neck, Jatoba Fretboard, and 2 Humbucking Pickups - Black",
        standard: 1599.99,
        distributor: 1399.99,
        img: "images/jbm27.png"
    },
    {
        name: "MAR10",
        description: "Ibanez Mario Camarena (Chon) Signature MAR10 - Lavender Metallic Matte. Solidbody Electric Guitar with Basswood Body, Roasted Maple Neck and Fingerboard, HSS Pickups, and Tremolo Bridge - Lavender Metallic Matte",
        standard: 1699.99,
        distributor: 1499.99,
        img: "images/mar10.png"
    }
]