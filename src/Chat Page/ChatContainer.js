// import { ChatForm } from "./ChatForm.js"
// import { ChatList } from "./ChatList.js"
// import { useState, useEffect } from "react"

// export const ChatContainer = () => {

//     const [chat, update] = useState([])


//     useEffect(() => {
//         fetch(`http://localhost:8088/Messages`)
//           .then(response => response.json())
//           .then((chatArray) => { update(chatArray) })
//       }, [])
  
//     return (
//         <>
//             <ChatList chat={chat}  />
//             <ChatForm  updateChats={update}/>
//         </>
//     )
// }
