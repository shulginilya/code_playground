import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	AppContainer,
	NotFoundContainer,
} from '@/containers';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppContainer />} />
				<Route path="*" element={<NotFoundContainer />} />
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
