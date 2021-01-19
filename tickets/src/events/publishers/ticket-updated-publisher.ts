import { Publisher, Subjects, TicketUpdatedEvent } from '@oregtickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated 
}