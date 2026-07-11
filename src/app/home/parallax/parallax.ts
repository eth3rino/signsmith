import { Component } from '@angular/core';
import { ParallaxBackground } from '../../directives/parallax-background';

@Component({
  selector: 'app-parallax',
  imports: [ParallaxBackground],
  templateUrl: './parallax.html',
  styleUrl: './parallax.scss',
})
export class Parallax {

}
