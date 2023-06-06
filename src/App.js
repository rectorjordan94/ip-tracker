import './App.css';
import Body from './Body';
import Header from './Header';

// IPify API key: at_MjlXfrvwoMkao9oy5Jw6zidZo039Y
// GET request example: https://geo.ipify.org/api/v2/country,city?apiKey=at_MjlXfrvwoMkao9oy5Jw6zidZo039Y&ipAddress=



function App() {
	return (
		<div className="App">
			<Body />
			<Header />
		</div>
	);
}

export default App;
