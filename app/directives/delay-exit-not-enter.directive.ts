import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayExitNotEnter]'
})
export class DelayExitNotEnterDirective {

  @Input() set appDelayExitNotEnter(condition: boolean) {
    /*if condition is true (course has been selected) DON'T wait before loading it. Wait when exiting, however.*/
    if (condition) {
        this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      setTimeout(() => {
        this.vcRef.clear();
      }, 500);
    }

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
