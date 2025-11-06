const button = document.querySelector('#button');
const joke = document.querySelector('#jokes');


button.addEventListener('click',() => {
    getDadJoke()
        .then((jokeText) => {
            const li = document.createElement('li');
            li.textContent = jokeText;
            joke.appendChild(li);
        })
        .catch((error) => {
            console.error('Error fetching joke:', error);
        });
});




    const getDadJoke = async () => {
    const config ={headers: {Accept : 'application/json'}}
   const res = await axios.get('https://icanhazdadjoke.com/' , config );
    return res.data.joke;

}