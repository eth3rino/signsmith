import { Component } from '@angular/core';
import { SITE_WORKS, Work } from './trabajos-data/trabajos-data';

@Component({
  selector: 'app-trabajos',
  imports: [],
  templateUrl: './trabajos.html',
  styleUrl: './trabajos.scss',
})
export class Trabajos {
  selectedWorks: Work[] = SITE_WORKS
  loopWorks: Work[] = [...this.selectedWorks, ...this.selectedWorks]
}
