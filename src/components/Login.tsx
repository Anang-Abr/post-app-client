import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { isExportSpecifier } from "typescript";

const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [cookies, setCookies] = useCookies(["session_id"]);

	const handleChange = (e: any) => {
		setFormData((prev) => {
			console.log({ ...prev, [e.target.name]: e.target.value });
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		axios.defaults.baseURL = "http://localhost:3000";
		console.log("button clicked");
		axios.defaults.headers.post["Content-Type"] =
			"application/json;charset=utf-8";
		axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
		axios
			.post("http://localhost:3001/auth/login", formData, {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response.data);
				let expires = new Date();
				expires.setTime(expires.getTime() + response.data.expires_in * 1000);
				setCookies("session_id", response.data.sessionId, { path: "/" });
			});
	};
	return (
		<div>
			<input
				type="email"
				name="email"
				id=""
				value={formData.email}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				id=""
				value={formData.password}
				onChange={handleChange}
			/>
			<input type="submit" value="Login" onClick={handleSubmit} />
		</div>
	);
};

export default Login;
