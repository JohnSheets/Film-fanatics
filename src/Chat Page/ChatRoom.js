import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import "./ChatRoom.css"

export const ChatRoom = (chatIdState) => {
    
    const [message, update] = useState({
        chat: "",
    })

    const navigate = useNavigate()


    const localFilmUser = localStorage.getItem("Film_user")
    const filmUserObject = JSON.parse(localFilmUser)


    const handleSaveButtonClick = (event) => {
        // event.preventDefault()

        // TODO: Create the object to be saved to the API


        const chatToSendToAPI = {
            userId: filmUserObject.id, 
            chat: message.chat,
            chatId: +chatIdState.chatId
        }
    

        // TODO: Perform the fetch() to POST the object to the API
        fetch (`http://localhost:8088/Messages`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(chatToSendToAPI)
        })
        .then(response => response.json())
        // .then((messageArray) => { updateMessages(messageArray) })
        .then(() => {update({
            chat: "",
        })})
        
    }


    return (
    <form className="chatForm">
        {console.log(chatIdState)}
        <fieldset>
            <input 
                required autoFocus
                type="text"
                className="chat-control"
                placeholder="New Message"
                value={message.chat}
                onChange={
                    (event) =>{
                        const copy = {...message}
                        copy.chat = event.target.value
                        update(copy)
                    }
                } />
        </fieldset>
        <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary" update>
            Post Chat
        </button>
    </form>
    )
}