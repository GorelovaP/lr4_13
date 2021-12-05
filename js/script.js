let texts = document.getElementsByName("text");
let widths = document.getElementsByName("width");
let colors = document.getElementsByName("color");
let opacities = document.getElementsByName("opacity");
let pictures = document.getElementsByName("picture");
let btn1 = document.querySelector(".btn1")
let areaForPicture = document.querySelector(".areaForPicture");
let table = document.querySelector(".table")

function getSelectedElement(options) {
    let selectedOptionValue;
    for (let option of options) {
        if (option.selected) {
            selectedOptionValue = option.value;
        }
    }
    return selectedOptionValue;
}

btn1.addEventListener("click", function () {

    let textSelected = getSelectedElement(texts);
    let div = document.createElement("div");
    let textP = document.createElement("p");
    textP.innerHTML = textSelected;
    div.append(textP);


    let pic = document.createElement("img");


    let widthSelected = getSelectedElement(widths);
    console.log(widthSelected)
    if (widthSelected == "200") pic.style.width = "200px";
    if (widthSelected == "250") pic.style.width = "250px";
    if (widthSelected == "300") pic.style.width = "300px";

    let colorSelected = getSelectedElement(colors);
    if (colorSelected === "red") pic.style.borderColor = "red";
    if (colorSelected === "green") pic.style.borderColor = "green";
    if (colorSelected === "blue") pic.style.borderColor = "blue";


    let opacitySelected = getSelectedElement(opacities);
    if (opacitySelected == "0.2") pic.style.opacity = "0.2";
    if (opacitySelected == "0.5") pic.style.opacity = "0.5";
    if (opacitySelected == "1") pic.style.opacity = "1";


    let pictureSelected = getSelectedElement(pictures);
    if (pictureSelected === "1") pic.src = "../resource/dog.jpg"
    if (pictureSelected === "2") pic.src = "../resource/tree.jpg"
    if (pictureSelected === "3") pic.src = "../resource/house.jpg"
    div.append(pic);


    areaForPicture.insertAdjacentElement("beforeend", div);

    let row = document.createElement("tr");
    let t1 = document.createElement("td");
    t1.innerHTML = textSelected;
    let t2 = document.createElement("td");
    t2.innerHTML = widthSelected;
    let t3 = document.createElement("td");
    t3.innerHTML = colorSelected;
    let t4 = document.createElement("td");
    t4.innerHTML = opacitySelected;
    row.append(t1);
    row.append(t2);
    row.append(t3);
    row.append(t4);

    table.insertAdjacentElement("beforeend",row)


})
