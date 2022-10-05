import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatetimeCustomEvent } from '@ionic/core';
import { Playlist } from 'src/app/entities/playlist';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss'],
})
export class PlaylistDetailComponent implements OnInit {
  playlist: Playlist;
  user: any = {};
  today = new Date();
  maxdate: Date; 

  constructor(private modalCtrl: ModalController) {
    this.today = new Date();
    this.maxdate = new Date(new Date().setDate(this.today.getDate() + 15));

    this.user.djname = 'Dj Mega';
    this.playlist = new Playlist();

  }

  ngOnInit() {}

  changeEventDate($event: DatetimeCustomEvent) {
    this.playlist.eventDate = new Date($event.detail.value.toString());
    this.playlist.availableUntil = new Date(this.playlist.eventDate);
    this.playlist.setAvailableUntilAfternoon();
  }

  changeMinDate($event: DatetimeCustomEvent) {
    this.playlist.availableSince = new Date($event.detail.value.toString());
  }


  createPlaylist() {
    console.log(this.playlist);
    this.modalCtrl.dismiss({reload: true});
  }

}
