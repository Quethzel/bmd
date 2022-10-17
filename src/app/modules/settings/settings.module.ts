import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { SettingsComponent } from './settings.component';


const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SettingsComponent }]),
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule {}
