const submit = document.querySelector("button");
const input = document.querySelector(".form-input");
const error = document.querySelector(".error-txt-hidden");
const errorIcon = document.querySelector(".error-icon-hidden");

submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const inputValue = input.value.trim();

    if (!isEmail(inputValue)) {
        error.style.display = "block";
        errorIcon.style.display = "block";
    } else {
        error.style.display = "none";
        errorIcon.style.display = "none";
    }
}

isEmail = (input) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};


// const submit = document.querySelector(".submit");
// const input = document.querySelector("input");
// const error = document.querySelector(".error-txt");
// const errorIcon = document.querySelector(".error-icon");

// submit.addEventListener("click", validate);

// function validate(e) {
//     e.preventDefault();

//     const inputValue = input.value.trim();

//     if (!isEmail(inputValue)) {
//         error.style.display = "block";
//         errorIcon.style.display = "block";
//     } else {
//         error.style.display = "none";
//         errorIcon.style.display = "none";
//     }
// }

// isEmail = (input) => {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
// };