import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
// This directive hides the content after a specified time and shows a placeholder.

// Context class to hold the state of the directive
// It provides the implicit value for the template and the counter for the countdown.
// The counter is updated every second and the hideAfter value is the initial delay in milliseconds.

class HideAfterContext {
  public get $implicit() { return this.hideAfter; }
 public hideAfter: number = 0;
 public counter: number = 0;
}

@Directive({
  selector: '[hideAfter]'
})

export class HideAfterDirective  implements OnInit {
constructor(private viewContainerRef:ViewContainerRef , private templateRef : TemplateRef<any>) { }

@Input('hideAfter') 
set hideAfter(value: number | null) {
  this._delay = value ?? 0;
  this.context.hideAfter = this.context.counter = this._delay / 1000;
}
 private _delay : number = 0;

 private context = new HideAfterContext();

@Input('hideAfterThen') placehoder : TemplateRef<any> | null = null;


ngOnInit(): void {

  const idx = setInterval(() => {
    this.context.counter--;}, 1000);


  console.log('HideAfterDirective initialized with delay:', this._delay);
  console.log('HideAfterDirective context:', this.context.counter, this.context.hideAfter);
  // Create the initial view with the template and context
  // This will render the template with the context values.
  // The context is passed to the template and the counter is updated every second.
  // After the delay, the view will be cleared and the placeholder will be rendered if provided.
  // dont forget to pass context to the template else it will not be available in the template.
  // variable will not render in the template if context is not passed.
this.viewContainerRef.createEmbeddedView(this.templateRef,this.context);
setTimeout(() => {
  this.viewContainerRef.clear();
  if (this.placehoder) {
    this.viewContainerRef.createEmbeddedView(this.placehoder, this.context);
    clearInterval(idx);
  }
},this._delay);
}

}