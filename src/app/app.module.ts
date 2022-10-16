import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistEditorComponent } from './components/playlist-editor/playlist-editor.component';
import { PlaylistModalComponent } from './components/playlist-modal/playlist-modal.component';
import { SongsComponent } from './components/songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistModalComponent,
    SongsComponent,
    PlaylistEditorComponent
  ],
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
