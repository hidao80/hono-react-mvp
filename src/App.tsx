import { hc } from "hono/client"
import { useState } from "react"
import type { AppType } from "./server"

const client = hc<AppType>("/")

export default function App() {
	const [msg, setMsg] = useState("")

	const clickHello = () => {
		client.api.v1.hello
			.$get()
			.then((res) => res.json())
			.then((data) => setMsg(data.message))
	}

	return (
		<article>
			<button type="button" onClick={clickHello}>
				Hello, Hono!
			</button>
			<footer>{msg}</footer>
		</article>
	);
}
