import { Publisher, Subjects, TicketCreatedEvent } from '@oregtickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated 
}