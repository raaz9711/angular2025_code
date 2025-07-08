import { Component, inject, viewChild, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-dyanmic-main',
  imports: [],
  templateUrl: './dyanmic-main.component.html',
  styleUrl: './dyanmic-main.component.css'
})
export class DyanmicMainComponent {
   // vcr = inject(ViewContainerRef);
vcr = viewChild('container', { read: ViewContainerRef});
  createComponent() {
    //this will create component output side the current component
    //this.vcr.createComponent(WidgetComponent);

    //to create component inside the current component 
    // first add anchor on current component html div or container 

    this.vcr()?.createComponent(WidgetComponent);

    console.log("Create Component clicked");
  }

  destroyComponent() {
    console.log("Destroy Component clicked");
  }


}
