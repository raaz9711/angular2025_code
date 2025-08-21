import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, ViewChild, ElementRef, TemplateRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports:[NgTemplateOutlet],
  template: `
    <div class="card">
      <h3 #header>Card Header</h3>
      <ng-content></ng-content>
      <ng-container *ngTemplateOutlet="cardActionTpl"></ng-container>
            <ng-container *ngTemplateOutlet="cardActionTpl2"></ng-container>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 16px; border-radius: 4px; }
  `]
})
export class CardComponent implements AfterViewInit {
  @ViewChild('header') headerEl!: ElementRef<HTMLHeadingElement>;
  @ContentChild('cardAction') cardActionTpl!: TemplateRef<any>;
  @ContentChild('cardAction2') cardActionTpl2!: TemplateRef<any>;


  ngAfterViewInit() {
    // Access internal header element
    console.log('Header text:', this.headerEl.nativeElement.textContent);
    // Access projected action template
    console.log('Action template:', !!this.cardActionTpl);
  }

  
}