import { useFetchData } from "./hooks/useFetchData";

export default function Card({ title, buttonText, url }) {
	const { data, error, loading, fetchData } = useFetchData(url);

	return (
		<div className="flex flex-col w-80 gap-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>

			{/* Error handler */}

			{error && <p className=" text-red-500"> {error}</p>}

			{/* Loading handler */}

			{loading && (
				<p className="font-normal text-gray-700 dark:text-gray-400">Loading</p>
			)}

			{/* Data handler */}
			{data && !loading && (
				<p className="font-normal text-gray-700 dark:text-gray-400">{data}</p>
			)}

			<button
				className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				onClick={fetchData}
			>
				{buttonText}
			</button>
		</div>
	);
}
