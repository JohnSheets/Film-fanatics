import { useState, useNavigate } from "react"

export const TopFiveList = () => {

        const [topFive, updateTopFive] = useState({
            titleOne: "",
            titleTwo: "",
            titleThree: "",
            titleFour: "",
            titleFive: ""
        })

        const navigate = useNavigate()

        const localFilmUser = localStorage.getItem("Film_user")
        const filmUserObject = JSON.stringify(localFilmUser)
    
        const handleSaveButtonClick = (event) => {
            // event.preventDefult()
    
    
            const movieToSendToAPI = {
                userId: filmUserObject.id, 
                titleOne: topFive.titleOne,
                titleTwo: topFive.titleTwo,
                titleThree: topFive.titleThree,
                titleFour: topFive.titleFour,
                titleFive: topFive.titleFive 
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
                <form className="topFiveForm">
                <h2 className="topFiveForm_title">Top Five Favorites</h2>
                <fieldset>
                        <div className="form-group">
                        <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Movie Title"
                                value={topFive.title}
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
                        <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Movie Title"
                                value={topFive.title}
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
                        <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Movie Title"
                                value={topFive.title}
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
                        <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Movie Title"
                                value={topFive.title}
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
                        <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                placeholder="Movie Title"
                                value={topFive.title}
                                onChange={
                                        (evt) => {
                                                const copy = {...favorites}
                                                copy.title = evt.target.value
                                                updateFavorites(copy)
                                        }
                                } />
                        </div>
                </fieldset>
                </form>
        </>
}