import IServerSentEvent from './data/IServerSentEvent';
import EventStream from './EventStream';
import ChannelWritable from './stream/ChannelWritable';

export default class ChannelPublisher {
    private readonly parent: EventStream;
    private readonly channel: string;

    public constructor(parent: EventStream, channel: string) {
        this.parent = parent;
        this.channel = channel;
    }

    public async publishEvent(event: IServerSentEvent) {
        await this.parent.publishEvent(this.channel, event);
    }

    public createWritable() {
        return new ChannelWritable(this);
    }
}
