import { ExpirationCompleteListener } from '../expiration-complete-listener'
import { natsWrapper } from '../../../nats-wrapper'
import { Ticket } from '../../../models/ticket'
import mongoose  from 'mongoose'
import { Order } from '../../../models/order'
import { ExpirationCompleteEvent, OrderStatus } from '@oregtickets/common'
import { Message } from 'node-nats-streaming'

const setup = async () => {
    const listener = new ExpirationCompleteListener(natsWrapper.client)

    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        id: mongoose.Types.ObjectId().toHexString() 
    })
    await ticket.save()
    const order = Order.build({
        status: OrderStatus.Created,
        userId: 'dsad',
        expiresAt: new Date(),
        ticket
    })
    await order.save()

    const data: ExpirationCompleteEvent['data'] = {
        orderId: order.id
    }

    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    }

    return { listener, order, ticket, data, msg }
}

it('updates the order status to cancelled', async () => {
    const { listener, order, data, msg } = await setup()
    await listener.onMessage(data, msg)
    const updateOrder = await Order.findById(order.id)
    expect(updateOrder!.status).toEqual(OrderStatus.Cancelled)
})

it('emits an OrderCancelled event', async () => {
    const { listener, order, data, msg } = await setup()
    await listener.onMessage(data, msg);
    expect(natsWrapper.client.publish).toHaveBeenCalled()
    const eventData = JSON.parse((natsWrapper.client.publish as jest.Mock).mock.calls[0][1])
    expect(eventData.id).toEqual(order.id)
})

it('acks the message', async () => {
    const { listener, data, msg } = await setup()
    await listener.onMessage(data, msg)
    expect(msg.ack).toHaveBeenCalled()
})