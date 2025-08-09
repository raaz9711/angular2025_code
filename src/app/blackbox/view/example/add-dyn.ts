import { NgIf } from "@angular/common";
import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core"; 
    
@Component({
imports:[NgIf],
selector: 'app-dyn',
template: `
  <ng-template #tpl >
      <p>Loaded dynamically!</p>

    </ng-template>
    <button (click)="loadTemplate()">Add</button>
    <button (click)="removeTemplate()">Remove</button>

<div *ngIf="show" #box>Visible Box</div>

    <button (click)="showhide()">Show / Hide</button>

`
})
export class ChildComponent implements AfterViewInit {
  @ViewChild('box', { static: false }) box!: ElementRef;

  show = true;

  ngAfterViewInit() {
    console.log(this.box.nativeElement.textContent);
  }
  @ViewChild('tpl') tpl!: TemplateRef<any>;

  constructor(private vcr: ViewContainerRef) {}

  loadTemplate() {
    this.vcr.createEmbeddedView(this.tpl);
  }

  removeTemplate() {
    this.vcr.remove();
  }

  showhide(){
    this.show = !this.show
  }
}