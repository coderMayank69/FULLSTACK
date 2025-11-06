//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

for (let i = 1 ; i<=1025 ; i++){
    const newSpan =  document.createElement('span');
    const newImg = document.createElement('img');
    newSpan.classList.add('center');
    newImg.classList.add('block');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    newSpan.innerText = `#${i}`;
    container.appendChild(newImg);
    container.appendChild(newSpan);
    // newImg.style.display('block');
    // newSpan.style.textAlign('center');


}
