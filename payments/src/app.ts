import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import { errorHandler, NotFoundError, currentUser } from '@oregtickets/common'
import cookieSession from 'cookie-session'


const app = express()
app.set('trust proxy', true)
app.use(json())
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test'  
// This allows request comming only from https connections.
// Plain http requests will not work.
}))
app.use(currentUser)


app.all('*', async(req, res) => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }