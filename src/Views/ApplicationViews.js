import { Route, Routes, Outlet } from "react-router-dom"
import { ChatForm } from "../Chat Page/ChatForm.js"
import { ChatList } from "../Chat Page/ChatList.js"
import { ChatPage } from "../Chat Page/ChatPage.js"
import { ChatRoom } from "../Chat Page/ChatRoom.js"
import { FavoriteForm } from "../Home Page/FavoritesForm.js"
import { HomePage } from "../Home Page/HomePage.js"
import { WatchedForm } from "../Home Page/WatchedForm.js"


export const ApplicationViews = () => {
	return ( 
	<Routes>
<Route path="/" element={
<>
	<Outlet />
	</>
	}>
		<Route path="/chatRoom/:chatId" element={ <ChatList/> } />
		{/* <Route path="/chatRoom" element={ <ChatRoom/> } /> */}
		<Route path="/chatForm" element={ <ChatForm/> } />
		<Route path="/moviechat" element={ <ChatPage/> } />
		<Route path="/favoriteForm" element={ <FavoriteForm/> } />
		<Route path="/watchedForm" element={ <WatchedForm/> } />
        <Route path="/home" element={ <HomePage/> } />

</Route>
	</Routes>
	
	)
}