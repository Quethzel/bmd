import { ISong } from "./ISong";

export interface IPlaylist {
    eventName: string;
    eventPlace: string;
    eventDate: Date;
    availableSince: Date;
    availableUntil: Date;
    status: boolean;
    songs: ISong[];
}
