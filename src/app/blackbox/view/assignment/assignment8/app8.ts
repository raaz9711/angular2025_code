import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-demo',
  template: `
    <button (click)="scrollToSection()">Jump to Section 3</button>
    <div style="height: 400px; background: #eee;">Section 1</div>
    <div style="height: 400px; background: #ddd;">Section 2</div>
    <div #sectionThree style="height: 400px; background: #ccc;">
      Section 3 (Target)
    </div>
  `
})
export class ScrollDemoComponent {
  @ViewChild('sectionThree') sectionThree!: ElementRef<HTMLDivElement>;

  scrollToSection() {
    this.sectionThree.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}