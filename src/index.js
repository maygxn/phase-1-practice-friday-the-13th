// For each movie returned from http://localhost:3000/movies create an image and add it to the movie-list nav element.
document.addEventListener("DOMContentLoaded", (e) => {
    const movieUrl = "http://localhost:3000/movies";
    let movieList = document.getElementById('movie-list')
    const detailImage = document.getElementById('detail-image')


    fetch(movieUrl) 
        .then(resp => resp.json())
        .then((movies) => {
            movies.forEach((movie) => {
                const movieImage = document.createElement("img");
                movieImage.src = movie.image;
                movieList.appendChild(movieImage);
                console.log(movieDetail)
            })
        })
// As soon as the page loads, we should see the details of the first movie in the dataset.
function movieDetail(movie) {
    document.querySelector('#title').textContent = movie.title
    document.querySelector('#detail-image').src = movie.image
    document.querySelector('#year-released').textContent = movie.release_year
    document.querySelector('#description').textContent = movie.description
    document.querySelector('#watched').textContent = movie.watched
    document.querySelector('#amount').textContent = movie.blood_amount
}
})

