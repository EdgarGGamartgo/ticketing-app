import { Subjects, Publisher, ExpirationCompleteEvent } from '@oregtickets/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete
}