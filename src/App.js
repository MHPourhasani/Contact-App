import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route) => (
					<Route {...route} element={<route.component />} key={route.path} />
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
