import { Hono } from "hono"
import index from "./index.html"

const app = new Hono().get("/api/v1/hello", (c) => {
	return c.json({ message: "Hello Hono API!" })
})

export type AppType = typeof app

export default {
	fetch: app.fetch,
	routes: {
		"/": index,
	},
}
