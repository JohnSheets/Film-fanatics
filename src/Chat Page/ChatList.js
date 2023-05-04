import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"


export const ChatList = () => {

    const [chats, setChats] = useState([])
    const navigate = useNavigate()



    const fetchChats = () => {
        fetch(`http://localhost:8088/Messages`)
       .then(response => response.json())
       .then((chatArray) => {
            setChats(chatArray)
       })
    }


    useEffect(
        () => {
           fetch(`http://localhost:8088/Messages`)
           .then(response => response.json())
           .then((chatArray) => {
                setChats(chatArray)
           })
        },
        [] // When this array is empty, you are observing initial component state
    )
    //not functional right now 
    return <>
        <h2>Chats</h2>

        <article className="chats">
            {
                chats.map(
                    (message) => {
                    <section className="chat" key={`message--${message.id}`}>
                        <h4>{message.user?.username}</h4>
                        <section>{message.chat}</section>
                    </section>
                    }
                )
            }
        </article>

    </>
}

