import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { HomeServices } from './home-services/home-services';
import { Nosotros } from './nosotros/nosotros';
import { Trabajos } from './trabajos/trabajos';
import { Testimonios } from './testimonios/testimonios';
import { WorkProcess } from './work-process/work-process';
import { Contact } from './contact/contact';
import { Parallax } from './parallax/parallax';

@Component({
  selector: 'app-home',
  imports: [Hero, HomeServices, Nosotros, Trabajos, Testimonios, WorkProcess, Contact, Parallax],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
