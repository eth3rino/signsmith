import { Component } from '@angular/core';
import { LucideVan, LucideLayers, LucideLightbulb, LucidePencilRuler, LucideBuilding, LucideUnplug } from '@lucide/angular';

@Component({
  selector: 'app-home-services',
  imports: [LucidePencilRuler, LucideLightbulb, LucideLayers, LucideVan, LucideBuilding, LucideUnplug],
  templateUrl: './home-services.html',
  styleUrl: './home-services.scss',
})
export class HomeServices {}
