import {React, useState, useEffect} from 'react';
import "./ChatPage.css"
import { Link, useNavigate } from 'react-router-dom';

        
    export const ChatPage = () => {

        const [chats, setChats] = useState([])
        const navigate = useNavigate()

    
    
    
        const fetchChats = () => {
           return fetch(`http://localhost:8088/Chats`)
           .then(response => response.json())
           .then((chatArray) => {
                setChats(chatArray)
           })
        }

        useEffect(
            () => {
               fetch(`http://localhost:8088/Chats`)
               .then(response => response.json())
               .then((chatArray) => {
                    setChats(chatArray)
               })
            },
            [] 
        )
    


      return <>

        <article className="movieChat">
            {
                chats.map(
                    (chat) => {
                        return <section className="chat">
                            <header>
                                {chat.title}
                            </header>
                            <img
                            src={chat.image}
                            />
                            <button 
                                className="join_Button" onClick={() => navigate(`/chatRoom/${chat.id}`)}>Join Chat
                            </button>
                        </section>
                    }
                )
            }
            <footer>
                <button
                        className="create_Button" onClick={() => navigate("/chatForm")}>Create Chat
                </button>
            </footer>
        </article>
        </>
    };
    
