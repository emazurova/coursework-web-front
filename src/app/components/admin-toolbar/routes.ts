import {AdminLocationPageComponent} from '../../pages/admin-location-page/admin-location-page.component';
import {AdminCharactersPageComponent} from '../../pages/admin-characters-page/admin-characters-page.component';
import {AdminUsersPageComponent} from '../../pages/admin-users-page/admin-users-page.component';
import {AdminGamePageComponent} from '../../pages/admin-game-page/admin-game-page.component';
import {AdminEpisodePageComponent} from '../../pages/admin-episode-page/admin-episode-page.component';
import {ADMIN_LOCATION_ROUTES} from '../../pages/admin-location-page/routes';
import {ADMIN_GAME_ROUTES} from '../../pages/admin-game-page/routes';
import {ADMIN_EPISODE_ROUTES} from '../../pages/admin-episode-page/routes';

export const ADMIN_ROUTES = [
  { path: '', redirectTo: 'characters', pathMatch: 'full'},
  { path: 'character_locations', component: AdminLocationPageComponent, children: ADMIN_LOCATION_ROUTES},
  { path: 'characters', component: AdminCharactersPageComponent},
  { path: 'users', component: AdminUsersPageComponent},
  { path: 'languages', component: AdminGamePageComponent, children: ADMIN_GAME_ROUTES},
  { path: 'seasons', component: AdminEpisodePageComponent, children: ADMIN_EPISODE_ROUTES}
];
