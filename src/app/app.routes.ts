import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './ProfileSection/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

export const routes: Routes = [
  {
    component: ThemeToggleComponent,
    path: ''
  },
  {
    component: HomeComponent,
    path: 'home'

  },

  {
    component: ListsComponent,
    path: 'lists'
  },
  {
    component: SettingsComponent,
    path: 'settings'
  },
  {
    component: ProfileComponent,
    path:'profile'
  },
  {
    component: BookmarksComponent,
    path:'bookmarks'
  }
];
