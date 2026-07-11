import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { filter } from 'rxjs';
import { Footer } from './footer/footer';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signsmith');

  // constructor(private viewportScroller: ViewportScroller) {
  //   this.viewportScroller.setOffset([0, 80  ])
  // }
  
}
