import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AnimalService } from './animal.service';
import { ChildComponent } from "./child/child.component";
import { TestcomComponent } from "./signaldoc/testcom/testcom.component";
import { TemplateExampleComponent } from './template-example/template-example/template-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, ChildComponent, TestcomComponent,TemplateExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  viewProviders: [{provide:AnimalService, useClass: AnimalService}],
})
export class AppComponent {
  title = 'code2025';

  animal = inject(AnimalService);
}
