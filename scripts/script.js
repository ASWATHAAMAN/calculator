`use strict`;

const answerEl = document.getElementById(`answer`);
const btnAndEl = document.getElementById(`btn-and`);
const btnPerEl = document.getElementById(`btn-per`);
const btnMinusEl = document.getElementById(`btn-minus`);
const btnDivideEl = document.getElementById(`btn-divide`);
const btnSevenEl = document.getElementById(`btn-seven`);
const btnEightEl = document.getElementById(`btn-eight`);
const btnNineEl = document.getElementById(`btn-nine`);
const btnMultiplyEl = document.getElementById(`btn-multiply`);
const btnFourEl = document.getElementById(`btn-four`);
const btnFiveEl = document.getElementById(`btn-five`);
const btnSixEl = document.getElementById(`btn-six`);
const btnPlusEl = document.getElementById(`btn-plus`);
const btnOneEl = document.getElementById(`btn-one`);
const btnTwoEl = document.getElementById(`btn-two`);
const btnThreeEl = document.getElementById(`btn-three`);
const btnDotEl = document.getElementById(`btn-dot`);
const btnZeroEl = document.getElementById(`btn-zero`);
const btnDelEl = document.getElementById(`btn-delete`);
const btnEqualEl = document.getElementById(`btn-equal`);
const inputsContainerEl = document.querySelector(`.inputs-container`);
// global scope
let input;

// function

const numberInputs = (input) => {
  const inputEl = Number(input.value);
  answerEl.innerText = inputEl;
};
const logicInputs = () => {
  

  // let input = `+`;
  // answerEl = input + input;
};

// eventListeners
btnOneEl.addEventListener(`click`, () => {
  numberInputs(btnOneEl);
  logicInputs();
});
btnTwoEl.addEventListener(`click`, () => {
  numberInputs(btnTwoEl);
});
btnThreeEl.addEventListener(`click`, () => {
  numberInputs(btnThreeEl);
});
btnFourEl.addEventListener(`click`, () => {
  numberInputs(btnFourEl);
});
btnFiveEl.addEventListener(`click`, () => {
  numberInputs(btnFiveEl);
});
btnSixEl.addEventListener(`click`, () => {
  numberInputs(btnSixEl);
});
btnSevenEl.addEventListener(`click`, () => {
  numberInputs(btnSevenEl);
});
btnEightEl.addEventListener(`click`, () => {
  numberInputs(btnEightEl);
});
btnNineEl.addEventListener(`click`, () => {
  numberInputs(btnNineEl);
});
btnZeroEl.addEventListener(`click`, () => {
  numberInputs(btnZeroEl);
});

// btnPlusEl.addEventListener(`click`,() =>{

// })
