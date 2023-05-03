import { Route, Routes} from 'react-router-dom';
import { Authorized } from './Login/Authorized.js';
import { Login } from './Login/Login.js';
import { Register } from './Login/Register.js';
import { NavBar } from './Nav/NavBar.js';
import { ApplicationViews } from './Views/ApplicationViews.js';


export const FilmFanatics = () => {
	return <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
				<h2>Film Fanatics</h2>
		  <NavBar/>
		  <ApplicationViews/>
        </>
			</Authorized>


		} />
	</Routes>
}
