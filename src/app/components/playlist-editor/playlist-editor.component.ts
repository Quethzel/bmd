import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatetimeCustomEvent } from '@ionic/angular';
import { Playlist } from 'src/app/entities/playlist';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.scss'],
})
export class PlaylistEditorComponent implements OnInit {

  @Input() playlist: Playlist;
  @Output() savePlaylist = new EventEmitter<Playlist>();

  user: any = {};
  today = new Date();
  maxdate: Date; 

  constructor() {
    this.today = new Date();
    this.maxdate = new Date(new Date().setDate(this.today.getDate() + 15));

    this.user.djname = 'Dj Mega';
    this.playlist = new Playlist({});

  }

  ngOnInit() {
    console.log(this.playlist);
  }

  changeEventDate($event: DatetimeCustomEvent) {
    this.playlist.eventDate = new Date($event.detail.value.toString());
    this.playlist.availableUntil = new Date(this.playlist.eventDate);
    this.playlist.setAvailableUntilAfternoon();
  }

  changeMinDate($event: DatetimeCustomEvent) {
    this.playlist.availableSince = new Date($event.detail.value.toString());
  }


  save() {
    this.savePlaylist.next(this.playlist);
  }

}
