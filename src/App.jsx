import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sharedstyle from './Components/Sharedstyle';
import Home from './Pages/Home';
import About from './Pages/About';
import {AppProvider} from './Context/context';

const App = () => {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Sharedstyle />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
};

export default App;
