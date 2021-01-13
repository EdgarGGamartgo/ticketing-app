import request from 'supertest'
import { app } from '../../app'

it('has a route handler listening to /api/tickets for post requests', async () => {
   const response = await request(app).post('/api/tickets').send({})

   expect(response.status).not.toEqual(401)
})

it('can only be accessed if the user is signed in', async () => {
    await request(app)
        .post('/api/tickets')
        .send({})
        .expect(404)
})

it('return a status other than 404 if the user is signed in', async () => {
    const response = await request(app).post('/api/tickets').send({})

    expect(response.status).not.toEqual(404)
})

it('returns an error if an invalid title is provided', async () => {

})

it('returns an arror if an invalid price is provided', async () => {

})

it('creates a ticket with valid inputs', async () => {

})


