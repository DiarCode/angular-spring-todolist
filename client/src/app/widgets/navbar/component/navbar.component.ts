import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  currentPath: string = '';

  navbarLinks = [
    { path: '/', name: 'Home' },
    { path: '/todos', name: 'Todos' },
    { path: '/Signup', name: 'Signup' },
  ];

  constructor(private router: Router, private location: Location) {
    router.events.pipe(first()).subscribe(() => {
      this.currentPath = location.path() || '/';
    });
  }
}
