import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Hero } from './hero/hero';
import { HomeServices } from './home-services/home-services';
import { Nosotros } from './nosotros/nosotros';
import { Trabajos } from './trabajos/trabajos';
import { Testimonios } from './testimonios/testimonios';
import { WorkProcess } from './work-process/work-process';
import { Contact } from './contact/contact';
import { Parallax } from './parallax/parallax';
import { ScrollSpy } from '../services/scroll-spy';

@Component({
  selector: 'app-home',
  imports: [Hero, HomeServices, Nosotros, Trabajos, Testimonios, WorkProcess, Contact, Parallax],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy{
  private scrollSpy = inject(ScrollSpy)

  observableSections: string[] = ['servicios', 'trabajos', 'nosotros', 'contacto']
  ngAfterViewInit(): void {
    console.log('starting observer...')
    this.scrollSpy.observeSections(this.observableSections)
  }
  ngOnDestroy(): void {
    this.scrollSpy.disconnect();
  }
}
