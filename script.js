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


calculate.addEventListener('click', Calculatedate);
let isValid = false;

inputday.addEventListener('input', e =>{
  const day = e.target.value;
  if(day < 1 || day > 31 || day === 0){
    errorday.textContent = 'Invalid day';
    isValid = false;
  }else{
    errorday.textContent = '';
    isValid = true;
  }
})

inputmonth.addEventListener('input', e =>{
  const month = e.target.value;
  if(month < 1 || month > 12 || month === 0){
    errormonth.textContent = 'Invalid month';
    isValid = false;
  }else{
    errormonth.textContent = '';
    isValid = true;
  }
})

inputyear.addEventListener('input', e =>{
  const year = e.target.value;
  if(year< 1 || year > 2023 || year === 0){
    erroryear.textContent = 'Invalid year';
    isValid = false;
  }else{
    erroryear.textContent = '';
    isValid = true;
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
    let ageDay = ageDate.getUTCDay() -1;
    outputday.textContent = ageDay;
    outputmonth.textContent = ageMonth;
    outputyear.textContent = ageYear;

  }else{
    alert('Please enter valid date');
  }

}












