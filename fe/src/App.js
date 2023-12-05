import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [currentDateTime, setCurrentDateTime] = useState("");
	const [randomNumber, setRandomNumber] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const fetchData = async (url, setter) => {
		setLoading(true);
		try {
			const response = await axios(url);
			setter(response.data);
		} catch (error) {
			setError("Error fetching data: " + error.message);
		} finally {
			setLoading(false);
		}
	};

	const getDate = () => {
		fetchData("http://localhost/api/current-datetime", setCurrentDateTime);
	};

	const getNumber = () => {
		fetchData("http://localhost/api/number-service", setRandomNumber);
	};

	useEffect(() => {
		getDate();
		getNumber();
	}, []);

	return (
		<div className="App">
			<h1>{currentDateTime}</h1>
			<h2>{randomNumber}</h2>
			{loading ? <p>loading</p> : <p>not loading</p>}
			{error && <p className="error">{error}</p>}
			<button onClick={getDate}>Get current date</button>
			<button onClick={getNumber}>Get number</button>
		</div>
	);
}

export default App;
