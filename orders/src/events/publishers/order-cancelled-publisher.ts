import { Publisher, OrderCancelledEvent, Subjects } from '@oregtickets/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled
}