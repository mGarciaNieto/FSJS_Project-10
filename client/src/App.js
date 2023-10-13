import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Courses from './components/Courses'
import Header from './components/Header'
import CourseDetail from './components/CourseDetail'
import UpdateCourse from './components/UpdateCourse'
import UserSignIn from './components/UserSignIn'
import UserSignUp from './components/UserSignUp'
import CreateCourse from './components/CreateCourse'
import NotFound from './components/NotFound'
import Forbidden from './components/Forbidden'
import UnhandledError from './components/UnhandledError'
import UserSignOut from './components/UserSignOut'
import PrivateRoute from './components/PrivateRoute'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				{
					<Routes>
						<Route
							path='/courses/create'
							element={
								<PrivateRoute>
									<CreateCourse />
								</PrivateRoute>
							}
						/>
						<Route
							path='/courses/:id/update'
							element={
								<PrivateRoute>
									<UpdateCourse />
								</PrivateRoute>
							}
						/>

						{/* <Route element={<PrivateRoute />}>
							<Route path='/courses/:id/update' element={<UpdateCourse />} />
							<Route path='/courses/create' element={<CreateCourse />} />
						</Route> */}

						<Route exact path='/' element={<Courses />} />
						<Route path='/courses/:id' element={<CourseDetail />} />
						<Route path='/signin' element={<UserSignIn />} />
						<Route path='/signup' element={<UserSignUp />} />
						<Route path='/signout' element={<UserSignOut />} />
						<Route path='/forbidden' element={<Forbidden />} />
						<Route path='/error' element={<UnhandledError />} />
						<Route path='/notfound' element={<NotFound />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				}
			</main>
		</BrowserRouter>
	)
}

export default App
