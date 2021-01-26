import { Publisher, OrderCreatedEvent, Subjects } from '@oregtickets/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated
}