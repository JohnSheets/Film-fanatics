import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css"


export const HomePage = () => {

    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate()
    const [watched, setWatched] = useState([])


        useEffect(
            () => {
               fetch(`http://localhost:8088/Favorites`)
               .then(response => response.json())
               .then((favoriteArray) => {
                    setFavorites(favoriteArray)
               })
            },
            [] // When this array is empty, you are observing initial component state
        )

        useEffect(
            () => {
               fetch(`http://localhost:8088/WatchedMovies`)
               .then(response => response.json())
               .then((watchedArray) => {
                    setWatched(watchedArray)
               })
            },
            [] 
        )


    return<>

        <div>
            <article className="Favorites">
            <header>Favorites</header>
                {
                    favorites.map(
                        (favorite) => (
                            <section className="favoriteCard" key={`favorite--${favorite.id}`}>
                                <header> {favorite.title}</header>
                                <img 
                                    src={favorite.image}
                                />
                                <footer>
                                </footer>
                            </section>
                        )
                    )
                }
                    <button
                            className="favorite_Button" onClick={() => navigate("/favoriteForm")}>Add
                    </button>
            </article>
        </div>  
            <div>
            <article className="Watched">
            <header>Watched</header>
                {
                    watched.map(
                        (watch) => (
                            <section className="watchedCard" key={`watch--${watch.id}`}>
                                <header> {watch.title}</header>
                                <img 
                                    src={watch.image}
                                />
                                <footer>
                                    <p> Watch Again? &nbsp;
                                {watch.watchAgain === true ? 
                                    "✅": 
                                    "❌" }
                                    </p>
                                </footer>
                            </section>
                        )
                    )
                }
                    <button
                            className="watched_Button" onClick={() => navigate("/watchedForm")}>Add
                    </button>
            </article>
        </div>  </>
    
}

// if (watch.watchAgian === true) {
//     console.log("✅")
// } else {
//     console.log("❌")
// }


// (watch.watchAgian === true) ? 
//     console.log("✅") :
//     console.log("❌") ;