import { Message } from 'node-nats-streaming'
import { Listener } from './base-listener'
import { TicketCreatedEvent } from './ticket-created-event'
import { Subjects } from './subjects'

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    // subject: Subjects.TicketCreated = Subjects.TicketCreated
    readonly subject = Subjects.TicketCreated
    // readonly subject: Subjects.TicketCreated = Subjects.TicketCreated
     
    queueGroupName = 'payments-service'

    onMessage(data: any, msg: Message) {
        console.log('Event data!', data)

        msg.ack()
    }
}