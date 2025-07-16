import { HideAfterDirective } from './hide-after.directive';
import { ViewContainerRef, TemplateRef } from '@angular/core';

describe('HideAfterDirective', () => {
  let directive: HideAfterDirective;
  let viewContainer: ViewContainerRef;
  let templateRef: TemplateRef<any>;

  beforeEach(() => {
    // Mock ViewContainerRef and TemplateRef
    viewContainer = jasmine.createSpyObj('ViewContainerRef', ['createEmbeddedView', 'clear']);
    templateRef = jasmine.createSpyObj('TemplateRef', ['elementRef']);
    directive = new HideAfterDirective(viewContainer, templateRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should show template initially', () => {
    directive.hideAfter = 1000;
    directive.ngOnInit();
    expect(viewContainer.createEmbeddedView).toHaveBeenCalled();
  });

  it('should hide template after specified time', () => {
    directive.hideAfter = 1000;
    directive.ngOnInit();
    jasmine.clock().tick(1001);
    expect(viewContainer.clear).toHaveBeenCalled();
  });
});
