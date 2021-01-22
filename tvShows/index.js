// GET request using fetch()
const fetchMovies = async query => {
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(res => res.json());
    console.log(response);
}

//GET request using axios.get()
const axiosMovies = async query => {
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
    return response.data;
}

const searchForm = document.querySelector('#searchForm');
const body = document.querySelector('body');

let searchQuery = [];

searchForm.addEventListener('submit', async e => {
    e.preventDefault();
    searchQuery = searchForm.elements.query.value;
    const response = await axiosMovies(searchQuery);
    const tvShows = response;
    console.log(tvShows);
    tvShows.map(show => {
        if (show.show.image) {
            const image = document.createElement('img');
            image.src = show.show.image.medium;
            body.append(image);
        }
    })
});