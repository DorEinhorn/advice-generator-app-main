const adviceNum = document.querySelector('.adviceid');
const adviceContent = document.querySelector('.advicecontent');

async function adviceId(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    console.log(advice);
    console.log(advice.slip.advice);
    adviceNum.textContent = advice.slip.id;
    adviceContent.textContent = advice.slip.advice;
}

adviceId();