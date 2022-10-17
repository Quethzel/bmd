import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { QrPlaylistComponent } from './components/qr-playlist/qr-playlist.component';
import { PlaylistEditorComponent } from './components/playlist-editor/playlist-editor.component';
import { PlaylistModalComponent } from './components/playlist-modal/playlist-modal.component';
import { SongsComponent } from './components/songs/songs.component';
import { QRCodeModule } from 'angularx-qrcode';

const routes: Routes = [
  { 
    path: '', 
    component: PlaylistComponent, 
  }
]


@NgModule({
  declarations: [
    PlaylistComponent,
    PlaylistModalComponent,
    PlaylistEditorComponent,
    QrPlaylistComponent,
    SongsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    QRCodeModule
  ]
})
export class PlaylistModule { }
