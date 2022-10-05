export class Playlist {
    eventName: string;
    eventPlace: string;
    eventDate: Date;
    availableSince: Date;
    availableUntil: Date;

    constructor() {
        this.eventDate = this.nightTime(new Date());
        this.availableSince = this.morningTime(new Date());
        this.availableUntil = this.afternoonTime(new Date());
    }

    setAvailableUntilAfternoon() {
        this.availableUntil = this.afternoonTime(this.availableUntil);
    }

    private morningTime(date: Date): Date {
        return new Date(date.setHours(10, 0, 0));
    }

    private afternoonTime(date: Date) {
        return new Date(date.setHours(17, 0, 0));
    }

    private nightTime(date: Date) {
        return new Date(date.setHours(20, 0, 0));
    }
}
