import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const TopFiveForm = () => {

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
    
    
            const moviesToSendToAPI = {
                userId: filmUserObject.id, 
                titleOne: topFive.titleOne,
                titleTwo: topFive.titleTwo,
                titleThree: topFive.titleThree,
                titleFour: topFive.titleFour,
                titleFive: topFive.titleFive 
            }
    
             fetch(`http://localhost:8088/TopFives`, {
                    method: "POST",
                    headers: {
                            "Content-Type": "application/json"
                    },
                    body: JSON.stringify(moviesToSendToAPI)
            })
                    .then(response => response.json())
                    .then(() => {
                            navigate("/TopFives") // set up route in application views
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
                                onChange={
                                        (evt) => {
                                                const copy = {...topFive}
                                                copy.title = evt.target.value
                                                updateTopFive(copy)
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
                                onChange={
                                        (evt) => {
                                                const copy = {...topFive}
                                                copy.title = evt.target.value
                                                updateTopFive(copy)
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
                                onChange={
                                        (evt) => {
                                                const copy = {...topFive}
                                                copy.title = evt.target.value
                                                updateTopFive(copy)
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
                                onChange={
                                        (evt) => {
                                                const copy = {...topFive}
                                                copy.title = evt.target.value
                                                updateTopFive(copy)
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
                                onChange={
                                        (evt) => {
                                                const copy = {...topFive}
                                                copy.title = evt.target.value
                                                updateTopFive(copy)
                                        }
                                } />
                        </div>
                </fieldset>
                </form>
        </>
}