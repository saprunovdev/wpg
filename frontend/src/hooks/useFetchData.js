import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchData = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);

		try {
			const response = await axios.get(url);
			setData(response.data);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { data, error, loading, fetchData };
};
