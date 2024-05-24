import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sharedstyle from './Components/Sharedstyle';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Sharedstyle />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
