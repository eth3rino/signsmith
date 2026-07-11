import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollSpy {
  activeFragment: WritableSignal<string | null> = signal(null);
  private observer?: IntersectionObserver;

  observeSections(sectionIds: string[]) {
    this.observer?.disconnect();
    this.activeFragment.set(null);

    console.log(sectionIds)

    this.observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        this.activeFragment.set(visible.target.id);
        console.log(this.activeFragment())
      } else {
        const leftScreen = entries.some(
          e => !e.isIntersecting && e.target.id === this.activeFragment()
        );
        if (leftScreen) {
          this.activeFragment.set(null);
        }
      }
    }, {threshold: .6}
  );
    
    sectionIds.forEach(id => {
        const el = document.getElementById(id);

        if (el) {
          this.observer!.observe(el)
        } else {
          console.warn(`ScrollSpy: element #${id} not found`)
        }
      })

  }

  disconnect(): void {
    this.activeFragment.set(null)
    this.observer?.disconnect()
  }
}
