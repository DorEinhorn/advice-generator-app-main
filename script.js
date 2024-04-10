const adviceNum = document.querySelector('.adviceid');
const adviceContent = document.querySelector('.advicecontent');
const dice = document.querySelector('button');

async function adviceId(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    adviceNum.textContent = advice.slip.id;
    adviceContent.textContent = advice.slip.advice;
}

adviceId();

dice.addEventListener('click', adviceId);