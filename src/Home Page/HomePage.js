import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css"


export const HomePage = () => {

    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate()
    const [watched, setWatched] = useState([])


    const fetchFavorites = () => {
        return fetch(`http://localhost:8088/Favorites`)
        .then(response => response.json())
        .then((favoriteArray) => {
             setFavorites(favoriteArray)
        })
    }
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

        const fetchWatched = () => {
            return fetch(`http://localhost:8088/WatchedMovies`)
            .then(response => response.json())
            .then((watchedArray) => {
                 setWatched(watchedArray)
            })
        }
    
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
        <header>Favorites</header>
            <article className="Favorites">
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
            <header>Watched</header>
            <article className="Watched">
                {
                    watched.map(
                        (watch) => (
                            <section className="watchedCard" key={`watch--${watch.id}`}>
                                <header> {watch.title}</header>
                                <img 
                                    src={watch.image}
                                />
                                <footer>
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