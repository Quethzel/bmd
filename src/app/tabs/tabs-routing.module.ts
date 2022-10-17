import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'playlist',
        loadChildren: () => import('../modules/playlist/playlist.module').then(m => m.PlaylistModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../modules/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: '',
        redirectTo: '/tabs/playlist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/playlist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
