import {Component} from '@angular/core';

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.css']
})
export class AdminToolbarComponent {
  dataSource = ITEMS;

  fillerNav = this.dataSource;

  constructor() {
  }
}

export const ITEMS = [
  {id: 1, value: 'Местоположение', path: 'location'},
  {id: 2, value: 'Словари', path: 'dictionaries'},
  {id: 3, value: 'Персонажи', path: 'characters'},
  {id: 4, value: 'Пользователи', path: 'users'},
  {id: 5, value: 'Эпизоды', path: 'episodes'}
];
