import Card from "./Card";

function App() {
	const dateTimeAPI = "http://localhost/api/current-datetime";
	const randomNumberAPI = "http://localhost/api/number-service";

	return (
		<div className="App">
			<div className=" flex flex-col items-center mx-auto container p-8 gap-8">
				<Card
					title="Random number service"
					buttonText="Get random number"
					url={randomNumberAPI}
				></Card>

				<Card
					title="Current date service"
					buttonText="Get current date"
					url={dateTimeAPI}
				></Card>
			</div>
		</div>
	);
}

export default App;
