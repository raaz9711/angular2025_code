import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-toggle-panel',
  imports:[NgIf],
  template: `
    <button (click)="togglePanel()">Toggle Panel</button>
    <div *ngIf="showPanel" #panel>
      <p>Panel Content</p>
    </div>
  `
})
export class TogglePanelComponent implements AfterViewChecked {
  showPanel = true;
  @ViewChild('panel') panelRef?: ElementRef<HTMLDivElement>;

  togglePanel() {
    this.showPanel = !this.showPanel;
  }

  ngAfterViewChecked() {
    if (this.panelRef?.nativeElement) {
      // Safe to access panel
      this.panelRef.nativeElement.style.background = 'red';
      console.log('Panel is present');
    } else {
      // Panel is destroyed, avoid access
      console.log('Panel is not present');
    }
  }
}