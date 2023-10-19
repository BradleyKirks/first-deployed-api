import { onRequest} from 'firebase-functions/v2/https'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use (cors())

app.get("/test",), (req, res) => res.send("it is working!")

export const api = onRequest(app)