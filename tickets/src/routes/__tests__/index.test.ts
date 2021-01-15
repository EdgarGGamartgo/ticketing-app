import request from 'supertest'
import { app } from '../../app'

const craeteTicket = () => {
    return request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            title: 'adsfsd',
            price: 20
        })
}

it('can fetch a list of tickets', async () => {
    await craeteTicket()
    await craeteTicket()
    await craeteTicket()

    const response = await request(app)
        .get('/api/tickets')
        .send()
        .expect(200)

    expect(response.body.length).toEqual(3)
})