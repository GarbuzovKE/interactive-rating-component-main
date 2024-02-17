let ratingNum = document.querySelectorAll(".rating-scale__number");
let userRating = [5];
let oldUserRating;
let output = document.querySelector(".rating-result")

ratingNum[4].style.backgroundColor = "#7E8799";
ratingNum[4].style.color = "#FFFFFF";
output.textContent = `You selected ${userRating[0]} out of 5`;

for (let element of ratingNum) {
  element.addEventListener("click", (event) => {
    userRating.push(Number(event.target.textContent));
    if (userRating.length > 1) {
        oldUserRating = userRating.shift()-1;
        ratingNum[oldUserRating].style.backgroundColor = "";
        ratingNum[oldUserRating].style.color = "";
    }
    event.target.style.backgroundColor = "#7E8799";
    event.target.style.color = "#FFFFFF";
    output.textContent = `You selected ${userRating[0]} out of 5`;
  });
}

function afterSubmit(){
    const hideElem = document.getElementById("before-submit");
    const showElem = document.getElementById("after-submit");
    hideElem.style.display = "none";
    showElem.style.display = "flex";    
}
