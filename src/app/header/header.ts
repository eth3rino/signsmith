import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideMenu, LucideX } from '@lucide/angular';
import { ScrollSpy } from '../services/scroll-spy';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LucideMenu, LucideX],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private scrollSpy = inject(ScrollSpy)

  currentFragment = computed(() => this.scrollSpy.activeFragment());
  
  isNavOpen: WritableSignal<boolean> = signal(false)

  toggleNav() {
    this.isNavOpen.update((isnavOpen) => !isnavOpen)
  }

  onWrapperClick(event: MouseEvent) {
    if (event.target === event.currentTarget) this.toggleNav()
  }

  
}
