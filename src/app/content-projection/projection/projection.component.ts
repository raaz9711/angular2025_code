import { Component } from '@angular/core';
import { WidgetComponent } from "../widget/widget.component";
import { WidgetContentComponent } from "../widget-content/widget-content.component";

@Component({
  selector: 'app-projection',
  imports: [WidgetComponent, WidgetContentComponent, WidgetContentComponent],
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.css'
})
export class ProjectionComponent {

}
 