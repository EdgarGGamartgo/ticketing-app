import { Subjects, Publisher, PaymentsCreatedEvent } from '@oregtickets/common'

export class PaymentCreatedPublisher extends Publisher<PaymentsCreatedEvent> {
    readonly subject = Subjects.PaymentCreated
}