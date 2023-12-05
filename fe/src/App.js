import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function App() {
	const [currentDateTime, setCurrentDateTime] = useState("");
	const [randomNumber, setRandomNumber] = useState("");
	const [error, setError] = useState("");

	const fetchData = async (url, setter) => {
		try {
			const response = await axios(url);
			setter(response.data);
		} catch (error) {
			setError("Error fetching data: " + error.message);
		} finally {
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
			<div className=" flex flex-col items-center mx-auto container p-8 gap-8">
				{error && (
					<div className="text-red-500  flex-1 text-center">
						<p className="error">{error}</p>
						<p>Run backend service</p>
					</div>
				)}
				<Card
					title="Random number service"
					data={randomNumber}
					action={getNumber}
					buttonText="Get number"
				></Card>

				<Card
					title="Current date service"
					data={currentDateTime}
					action={getDate}
					buttonText="Get current date"
				></Card>
			</div>
		</div>
	);
}

export default App;
