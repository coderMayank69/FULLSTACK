const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');


btn.addEventListener('click', function () {

    // const h1 = document.createElement('h1');
    const newColor = random();

    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;
    // document.body.appendChild(h1);
});
const random = () => {
    let i = Math.floor(Math.random() * 256);
    let j = Math.floor(Math.random() * 256);
    let k = Math.floor(Math.random() * 256);

    if(i <= 30 && j<=30 && k<= 30){
        h1.style.color = 'white' ;
    }else{
       h1.style.color = 'black' ; 
    }

    return `rgb(${i}, ${j}, ${k})`;


}