import { OrderStatus, Subjects, Listener, PaymentsCreatedEvent } from '@oregtickets/common'
import { queueGroupName } from './queue-group-name'
import { Message } from 'node-nats-streaming'
import { Order } from '../../models/order'

export class PaymentCreatedListener extends Listener<PaymentsCreatedEvent> {
    readonly subject = Subjects.PaymentCreated
    queueGroupName = queueGroupName

    async onMessage(data: PaymentsCreatedEvent['data'], msg: Message) {
        const order = await Order.findById(data.orderId)

        if(!order) {
            throw new Error('Order not found')
        }

        order.set({
            status: OrderStatus.Complete
        })
        await order.save()
        msg.ack()
    }
}