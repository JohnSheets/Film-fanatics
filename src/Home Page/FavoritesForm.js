import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const FavoriteForm = () => {

        const [favorites, updateFavorites] = useState({
            title: "",
            image: ""
        })

        const navigate = useNavigate()

    const localFilmUser = localStorage.getItem("Film_user")
    const filmUserObject = JSON.stringify(localFilmUser)

    const handleSaveButtonClick = (event) => {
        // event.preventDefult()


        const movieToSendToAPI = {
            userId: filmUserObject.id, 
            title: favorites.title, 
            image: favorites.image
        }

         fetch(`http://localhost:8088/Favorites`, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify(movieToSendToAPI)
        })
                .then(response => response.json())
                .then(() => {
                        navigate("/Favorites")
        })


    }

    return <>
        <form className="favoriteForm">
            <h2 className="favoritForm_title">New Favorite Movie</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Movie Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Movie Title"
                        value={favorites.title}
                        onChange={
                                (evt) => {
                                        const copy = {...favorites}
                                        copy.title = evt.target.value
                                        updateFavorites(copy)
                                }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Image URL:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="URL"
                        value={favorites.image}
                        onChange={
                                (evt) => {
                                        const copy = {...favorites}
                                        copy.image = evt.target.value
                                        updateFavorites(copy)
                                }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="button">
                submit Movie
            </button>

        </form>
    </>

}