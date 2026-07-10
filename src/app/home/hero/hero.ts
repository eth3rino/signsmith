import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowDown } from '@lucide/angular';

@Component({
  selector: 'app-hero',
  imports: [LucideArrowDown, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
