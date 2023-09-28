import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Courses from './components/Courses'
import Header from './components/Header'
import CourseDetail from './components/CourseDetail'
import UpdateCourse from './components/UpdateCourse'
import UserSignIn from './components/UserSignIn'
import UserSignUp from './components/UserSignUp'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				{
					<Routes>
						<Route exact path='/' element={<Courses />} />
						<Route path='/courses/:id' element={<CourseDetail />} />
						<Route path='/courses/:id/update' element={<UpdateCourse />} />
						<Route path='/signin' element={<UserSignIn />} />
						<Route path='/signup' element={<UserSignUp />} />
					</Routes>
				}
			</main>
		</BrowserRouter>
	)
}

export default App
