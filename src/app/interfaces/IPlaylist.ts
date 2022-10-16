import { ISong } from "./ISong";

export interface IPlaylist {
    id: string;
    eventName: string;
    eventPlace: string;
    eventDate: Date;
    availableSince: Date;
    availableUntil: Date;
    status: boolean;
    songs: ISong[];
}
