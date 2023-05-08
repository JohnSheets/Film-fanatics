import { useEffect, useState } from "react"
import { Link, useNavigate, useParams} from "react-router-dom"
import { ChatRoom } from "./ChatRoom.js"



export const ChatList = () => {

    const [chats, setChats] = useState([])
    const navigate = useNavigate()
    const { chatId } = useParams()




    const fetchChats = () => {
        fetch(`http://localhost:8088/Messages?_expand=user`)
       .then(response => response.json())
       .then((chatArray) => {
            const filteredChatArray = chatArray.filter(currentChat => {
                return currentChat.chatId === chatId
            })
        setChats(filteredChatArray)
       })
    }


        
    useEffect(
        () => {
           fetch(`http://localhost:8088/Messages?_expand=user`)
           .then(response => response.json())
           .then((chatArray) => {
            const filteredChatArray = chatArray.filter(currentChat => {
               return  currentChat.chatId === parseInt(chatId)
            })
            setChats(filteredChatArray)
           })
        },
        [] 
    )

    return <>
        <h2>Chats</h2>

        <article className="chats">
            {
                chats.map(
                    (messages) => (
                    <section className="chat" key={`message--${messages.id}`}>
                        <h4>{messages.user?.username}</h4>
                        <section>{messages.chat}</section>
                    </section>
                    )
                )
            }
        </article>

        <section>{ <ChatRoom chatId={chatId}/> }</section>

    </>
}

