import { Component, inject } from "@angular/core"; 
import { FormBuilder,FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
    
@Component({
imports:[ReactiveFormsModule],
selector: 'app-react-form',
template: `<p> === Reactive Form ===</p>
  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input formControlName="username" placeholder="Username">
      <input formControlName="password" placeholder="Password" type="password">
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>

`
})
export class ReactFormComponent {
    
//   loginForm = new FormGroup({
//     username: new FormControl('', Validators.required),
//     password: new FormControl('', [Validators.required, Validators.minLength(6)])
//   });
/**
 *
 */

fb = inject(FormBuilder)

// loginForm !: FormBuilder;

loginForm = this.fb.group({
  username: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(6)]]
});


  onSubmit() {
    console.log(this.loginForm.value);
  }    
}