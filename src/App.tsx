import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { json } from "node:stream/consumers";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Login from "./components/Login";

function App() {
	// const [formData, setFormData] = useState({
	// 	content: "",
	// });

	// const [post, setPost] = useState([{}]);
	// async function handleSubmit(e: any) {
	// 	e.preventDefault();
	// 	console.log("button clicked, data:", formData);
	// 	axios
	// 		.post("http://localhost:3001", formData)
	// 		.then((response) => console.log(response));
	// }

	// const changeHandler = (e: any) => {
	// 	setFormData((prev) => {
	// 		// console.log("value", e.target.value);
	// 		// console.log("name", e.target.name);
	// 		console.log({ ...prev, [e.target.name]: e.target.value });
	// 		return { ...prev, [e.target.name]: e.target.value };
	// 	});
	// };

	// const fetchPost = async () => {
	// 	fetch("http://localhost:3001", { method: "GET" })
	// 		.then((response) => response.json())
	// 		.then((data) => setPost(data));
	// };

	// const fetchData = async () => {
	// 	fetchPost();
	// 	console.log(post);
	// };

	// useEffect(() => {
	// 	fetchPost();
	// 	console.log(post);
	// }, []);
	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<Link to="/home" className="">
							Home
						</Link>
						<Link to="/login" className="">
							Login
						</Link>
					</nav>
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
