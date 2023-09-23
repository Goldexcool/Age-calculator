const  outputyear = document.getElementById('outputyear');
const  outputmonth = document.getElementById('outputmonth');
const  outputday = document.getElementById('outputday');
const calculate = document.getElementById('calculate');

const inputyear = document.getElementById('year');
const inputmonth = document.getElementById('month');
const inputday = document.getElementById('day');

const errorday = document.getElementById('error_day');
const errormonth = document.getElementById('error_month');
const erroryear = document.getElementById('error_year');

const errday = document.querySelector('.label');
const errmon = document.querySelector('.label2');
const erryear = document.querySelector('.label3');


const errInp = document.querySelector(".input")
const errInpMon = document.querySelector(".input2")
const errInpYear = document.querySelector(".input3")



calculate.addEventListener('click', Calculatedate);
let isValid = false;

inputday.addEventListener('input', e =>{
  const day = e.target.value;
  if(day < 1 || day > 31 || day === 0){
    errorday.textContent = 'Invalid day';
    errday.classList.add("err");
    errInp.classList.add("errr");
    // day.classList.add('errr');
    isValid = false;
  }else{
    errorday.textContent = '';
    isValid = true;
    errday.classList.remove("err");
    errInp.classList.remove("errr");
  }
})

inputmonth.addEventListener('input', e =>{
  const month = e.target.value;
  if(month < 1 || month > 12 || month === 0){
    errormonth.textContent = 'Invalid month';
    errmon.classList.add("err");
    errInpMon.classList.add("errr");
    isValid = false;
  }else{
    errormonth.textContent = '';
    isValid = true;
    errmon.classList.remove("err");
    errInpMon.classList.remove("errr");
  }
})

inputyear.addEventListener('input', e =>{
  const year = e.target.value;
  if(year< 1 || year > 2023 || year === 0){
    erroryear.textContent = 'Invalid year';
    erryear.classList.add("err");
    errInpYear.classList.add("errr");
    isValid = false;
  }else{
    erroryear.textContent = '';
    isValid = true;
    erryear.classList.remove("err");
    errInpYear.classList.remove("errr");
  }
})


function Calculatedate(e){
  e.preventDefault();
  if(isValid){
    let birthdate = `${inputmonth.value}/${inputday.value}/${inputyear.value}`;
    let birthdateObj = new Date(birthdate);
    let ageDiffMill = Date.now() - birthdateObj;
    let ageDate = new Date(ageDiffMill);
    let ageYear = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth() ;
    let ageDay = ageDate.getUTCDay() ;
    outputday.textContent = ageDay;
    outputmonth.textContent = ageMonth;
    outputyear.textContent = ageYear;

  }else{
    alert('Please enter valid date');
  }

}












