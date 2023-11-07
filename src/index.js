// For each movie returned from http://localhost:3000/movies create an image and add it to the movie-list nav element.
// document.addEventListener("DOMContentLoaded", (e) => {
    const poster = document.getElementById('detail-image')
    const title = document.getElementById('title')
    const year = document.getElementById('year-released')
    const des = document.getElementById('description')
    const watchedButton = document.getElementById('watched')
    const bloodAmt = document.getElementById('amount')
    const bloodForm = document.getElementById('blood-form')
    
    const movieList = document.getElementById('movie-list')
    const movieUrl = "http://localhost:3000/movies";
    
    const showDetails = (movie) => {
    // let movie = movie[0]
    title.textContent = movie.title
    year.textContent = movie.release_year
    des.textContent = movie.description
    poster.src = movie.image
    bloodAmt.textContent = movie.blood_amount
    
    if(movie.watched === true) {
        watchedButton.textContent = 'Watched'
    } else {
       watchedButton.textContent = 'Unwatched'
    }
    }
    
    fetch(movieUrl) 
    .then(res => res.json())
    .then((movies) => {
        movies.forEach((movie) => {
            let movieImage = document.createElement("img");
            movieImage.src = movie.image;
            movieList.append(movieImage);
            movieImage.addEventListener('click', () => {
                showDetails(movie)
            })
            // console.log(movieDetail)
        })
        showDetails(movies[0])
    })
    watchedButton.addEventListener('click', () => {
        if( watchedButton.textContent === "watched"){
            watchedButton.textContent = "unwatched"
        } else {
            watchedButton.textContent = "watched"
        }
    })
    bloodForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let newDrops = e.target["blood-amount"].value
        bloodAmt.textContent = parseInt(bloodAmt.textContent) + parseInt(newDrops)
        // console.log(newDrops)
        e.target.reset
    })