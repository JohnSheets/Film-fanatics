import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const ChatForm = () => {

        const [chats, updateChats] = useState({
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
            title: chats.title, 
            image: chats.image
        }

         fetch(`http://localhost:8088/Chats`, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify(movieToSendToAPI)
        })
                .then(response => response.json())
                .then(() => {
                        navigate("/moviechat")
        })


    }

    return <>
        <form className="newChatForm">
            <h2 className="chatForm_title">New Movie Chat</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Movie Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Movie Title"
                        value={chats.title}
                        onChange={
                                (evt) => {
                                        const copy = {...chats}
                                        copy.title = evt.target.value
                                        updateChats(copy)
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
                        value={chats.image}
                        onChange={
                                (evt) => {
                                        const copy = {...chats}
                                        copy.image = evt.target.value
                                        updateChats(copy)
                                }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="button">
                submit Chat
            </button>

        </form>
    </>

}