import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Sample, NotFound } from "@/pages";

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sample" element={<Sample />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
