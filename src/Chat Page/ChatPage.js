import {React, useState, useEffect} from 'react';
import "./ChatPage.css"
import { Link, useNavigate } from 'react-router-dom';


    // const Card = ({ imageUrl, buttonText }) => {
    //   return (
    //     <div className="card">
    //       <img src={imageUrl} alt="card image" />
    //       <button>{buttonText}</button>
    //     </div>
    //   );
    // };
        
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
                                className="watched_Button" onClick={() => navigate("/watchedForm")}>Join Chat
                            </button>
                        </section>
                    }
                )
            }

            {/* <div className="card-list">
            <Card
                imageUrl="https://m.media-amazon.com/images/I/81V+b69u3xL._AC_UF894,1000_QL80_.jpg" 
                buttonText="Join Chat"
            />
            <Card
                imageUrl="https://resizing.flixster.com/U57o0Is2JIvvWS96TOEMzFanBUg=/206x305/v2/https://flxt.tmsimg.com/assets/p19526_p_v8_au.jpg"
                buttonText="Join Chat"
            />
            <Card
                imageUrl="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
                buttonText="Join Chat"
            />
            </div> */}
            <footer>
                <button
                        className="create_Button" onClick={() => navigate("/chatForm")}>Create Chat
                </button>
            </footer>
        </article>
        </>
    };
    
