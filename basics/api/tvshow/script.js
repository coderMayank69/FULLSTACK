const form =document.querySelector('form');
form.addEventListener('submit',async function(event) {
    event.preventDefault();
    const searchTerm = form.elements.search.value;
    const config = {params : {q: searchTerm}};
    const res = await axios.get( "https://api.tvmaze.com/search/shows", config);
    makeImages(res.data);
})

const makeImages = (searchTerm) => {
for(result of searchTerm) {
    if(result.show.image) {
    const img= document.createElement('IMG');
    img.src = result.show.image.medium;
    document.body.append(img);
    form.elements.search.value = '';
    }
}
}