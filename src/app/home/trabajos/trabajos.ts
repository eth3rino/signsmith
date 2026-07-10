import { Component } from '@angular/core';
import { LucideMoveRight, LucideSquareArrowOutUpRight } from '@lucide/angular';
import { SITE_WORKS, Work } from './trabajos-data/trabajos-data';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleInstagram } from '@ng-icons/simple-icons';

@Component({
  selector: 'app-trabajos',
  imports: [LucideMoveRight, LucideSquareArrowOutUpRight, NgIcon],
  providers: [provideIcons({simpleInstagram})],
  templateUrl: './trabajos.html',
  styleUrl: './trabajos.scss',
})
export class Trabajos {
  selectedWorks: Work[] = SITE_WORKS
  loopWorks: Work[] = [...this.selectedWorks, ...this.selectedWorks]
}
