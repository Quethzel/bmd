import { IPlaylist } from "../interfaces/IPlaylist";
import { ISong } from "../interfaces/ISong";

export class Playlist implements IPlaylist {
    id: string;
    eventName: string;
    eventPlace: string;
    eventDate: Date;
    availableSince: Date;
    availableUntil: Date;
    status: boolean;
    songs: ISong[];

    constructor(pls: Partial<IPlaylist>) {
        this.id = pls?.id ? pls.id : null;
        this.eventName = pls?.eventName;
        this.eventPlace = pls?.eventPlace;
        this.songs = pls.songs?.length > 0 ? pls.songs : [];
        
        this.eventDate = this.nightTime(new Date());
        this.availableSince = this.morningTime(new Date());
        this.availableUntil = this.afternoonTime(new Date());
    }

    get hasId() {
        return this.id != null;
    }

    get len() { 
        return this.songs.length;
    }

    get textStatus() {
        const today = new Date();
        return today.getTime() - this.availableUntil.getTime() > 0 ? 'Open' : 'Closed';
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
