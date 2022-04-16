const parrotWrapper = document.querySelector(".list");


for (let i = 0; i < products.length; i++) {
    const productsI = products[i];

    const item = document.createElement("li");
    item.className = ("col-6");

    const divFirst = document.createElement("div");
    divFirst.className = ("card");

    const img = document.createElement("img");
    img.src = productsI.img;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = productsI.title;

    const price = document.createElement("p");
    price.className = "card-text fw-bold";
    price.textContent = "$" + productsI.price;

    const sizes = document.createElement("p");
    sizes.className = "badge bg-success";
    sizes.textContent = productsI.sizes.width + "sm" + " x " + productsI.sizes.height + "sm";

    const birthDate = document.createElement("p");
    birthDate.className = "card-text";
    birthDate.textContent = productsI.birthDate;

    const featuresWrapper = document.createElement("ul");
    featuresWrapper.className = "d-flex flex-wrap list-unstyled";

    const featuresItem = document.createElement("li");
    featuresItem.className = "badge bg-primary me-1 mb-1";
    featuresItem.textContent = productsI.features;

    const divSecond = document.createElement("div");
    divSecond.className = "position-absolute top-0 end-0 d-flex";


    const btnYellow = document.createElement("button");
    btnYellow.className = "btn rounded-0 btn-success";

    const btnYellowI = document.createElement("i");
    btnYellowI.className = "fa fa-star-o";

    const pointerBtn = document.createElement("button");
    pointerBtn.className = "btn rounded-0 btn-secondary";

    const pointerBtnI = document.createElement("i");
    pointerBtnI.className = "fa-solid fa-pen";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn rounded-0 btn-danger";

    const deleteBtnI = document.createElement("i");
    deleteBtnI.className = "fa-solid fa-trash";

    

    item.append(divFirst);
    divFirst.append(img);
    divFirst.append(cardBody);
    divFirst.append(featuresWrapper);
    divFirst.append(divSecond);
    divFirst.append(btnYellow);
    divFirst.append(pointerBtn);
    divFirst.append(deleteBtn);

    cardBody.append(title);
    cardBody.append(price);
    cardBody.append(sizes);
    cardBody.append(birthDate);
    cardBody.append(featuresWrapper);
    cardBody.append(divSecond);

    featuresWrapper.append(featuresItem);

    divSecond.append(btnYellow);
    divSecond.append(pointerBtn);
    divSecond.append(deleteBtn);

    btnYellow.append(btnYellowI);
    pointerBtn.append(pointerBtnI);
    deleteBtn.append(deleteBtnI);


    parrotWrapper.append(item);
}

const addParrotForm = document.querySelector("#add-form");
const titleInput = document.querySelector("#parrot-title");
const imgUrl = document.querySelector("#parrot-img");
const priceInput = document.querySelector("#price");
const parrotBirthDate = document.querySelector("#parrot-date");
const sizeWidthValue = document.querySelector("#parrot_width");
const sizeHeightValue = document.querySelector("#parrot_height");

addParrotForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const titleValue = titleInput.value;
    const imgValue = imgUrl.value;
    const priceValue = priceInput.value;
    const parrotBithValue = parrotBirthDate.value;
    const sizeValue = sizeWidthValue.value;
    const sizeHeightsValue = sizeHeightValue.value;

    const adder = {
        title: titleValue,
        img: imgValue,
        price: priceValue,
        birthDate: parrotBithValue,
        sizes: {
            width: sizeValue,
            height: sizeHeightsValue
        },
        isFavorite: false,
        features: ""
    }

    products.push(adder);
    addParrotForm.reset();


    const item = document.createElement("li");
    item.className = ("col-6");

    const divFirst = document.createElement("div");
    divFirst.className = ("card");

    const img = document.createElement("img");
    img.src = adder.img;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = adder.title;

    const price = document.createElement("p");
    price.className = "card-text fw-bold";
    price.textContent = "$" + adder.price;

    const sizes = document.createElement("p");
    sizes.className = "badge bg-success";
    sizes.textContent = adder.sizes.width + "sm" + " x " + adder.sizes.height + "sm";


    const birthDate = document.createElement("p");
    birthDate.className = "card-text";
    birthDate.textContent = adder.birthDate;

    const featuresWrapper = document.createElement("ul");
    featuresWrapper.className = "d-flex flex-wrap list-unstyled";

    const featuresItem = document.createElement("li");
    featuresItem.className = "badge bg-primary me-1 mb-1";
    featuresItem.textContent = adder.features;

    const divSecond = document.createElement("div");
    divSecond.className = "position-absolute top-0 end-0 d-flex";


    const btnYellow = document.createElement("button");
    btnYellow.className = "btn rounded-0 btn-success";

    const btnYellowI = document.createElement("i");
    btnYellowI.className = "fa fa-star-o";

    const pointerBtn = document.createElement("button");
    pointerBtn.className = "btn rounded-0 btn-secondary";

    const pointerBtnI = document.createElement("i");
    pointerBtnI.className = "fa-solid fa-pen";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn rounded-0 btn-danger";

    const deleteBtnI = document.createElement("i");
    deleteBtnI.className = "fa-solid fa-trash";

    item.append(divFirst);
    divFirst.append(img);
    divFirst.append(cardBody);
    divFirst.append(featuresWrapper);
    divFirst.append(divSecond);
    divFirst.append(btnYellow);
    divFirst.append(pointerBtn);
    divFirst.append(deleteBtn);

    cardBody.append(title);
    cardBody.append(price);
    cardBody.append(sizes);
    cardBody.append(birthDate);
    cardBody.append(featuresWrapper);
    cardBody.append(divSecond);

    featuresWrapper.append(featuresItem);

    divSecond.append(btnYellow);
    divSecond.append(pointerBtn);
    divSecond.append(deleteBtn);

    btnYellow.append(btnYellowI);
    pointerBtn.append(pointerBtnI);
    deleteBtn.append(deleteBtnI);


    parrotWrapper.append(item);
});