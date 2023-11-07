// C1: For each movie returned from http://localhost:3000/movies create an image and add it to the movie-list nav element.
// C3: when you click on each movie image in the top nav/ you should see the detail area
// global scope to load in everywhere
const title = document.getElementById('title')
const year = document.getElementById('year-released')
const des = document.getElementById('description')
const poster = document.getElementById('detail-image')
const watchedButton = document.getElementById('watched')
const bloodAmt = document.getElementById('blood-amount')
const bloodForm = document.getElementById('blood-form')



document.addEventListener("DOMContentLoaded", (e) => {
    const movieUrl = "http://localhost:3000/movies";
    let movieList = document.getElementById('movie-list')
    const showDetails = () => {



    fetch(movieUrl) 
        .then(resp => resp.json())
        .then((movies) => {
            movies.forEach((movie) => {
                // create HTML element
                let movieImage = document.createElement("img");
                // set the property / set the text
                movieImage.src = movie.image;
                // put it on the page
                movieList.append(movieImage)
                movieImage.addEventListener('click', () => {
                    console.log(movie.title)
                })
            })
            // C2: As soon as the page loads, we should see the details of the first movie in the dataset.
            let firstMovie = movies[0]
            title.textContent = firstMovie.title
            year.textContent = firstMovie.release_year
            des.textContent = firstMovie.description
            poster.src = firstMovie.image
            bloodAmt.textContent = firstMovie.bloodAmt


            // use if/else statement to DECIDE what button should say
            if(firstMovie.watched === true){
                watchedButton.textContent = 'Watched'
            }else {
                watchedButton.textContent = 'Unwatched'
            }
        })}
        showDetails()
})

