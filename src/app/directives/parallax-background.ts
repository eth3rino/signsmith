import { Directive, ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallaxBackground]',
})
export class ParallaxBackground implements OnDestroy, OnInit {
  private factor: number = 0.5;
  private tileHeight: number = 1200; // must match --ambient-tile-height in CSS
  private scrollListener?: () => void;
  private ticking: boolean = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private zone: NgZone
  ) {}

  onScroll() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const offset = -(y * this.factor) % this.tileHeight;
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translateY(${offset}px)`);
      this.ticking = false;
    })
  }

  ngOnInit(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    this.zone.runOutsideAngular(() => {
      this.scrollListener = () => this.onScroll();
      window.addEventListener('scroll', this.scrollListener, { passive: true })
    })
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    } 
  }
}
