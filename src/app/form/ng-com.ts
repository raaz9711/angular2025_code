import { Component } from "@angular/core"; 
import { FormsModule } from "@angular/forms";
    
@Component({
imports:[FormsModule],
selector: 'app-ng-com',
template: `<p> Child</p>
    <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
      <input name="username" [(ngModel)]="user.username" required>
      <br>
      <input type="email" name="email" [(ngModel)]="user.email" required>
      <button type="submit">Submit</button>
    </form>

`
})
export class NGComComponent {
    user = {username : '' , email : ''}

    onSubmit(form : any){
        console.log('form',form.value);
        
    }
    
}