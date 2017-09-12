import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayedExit]'
})
export class DelayedExitDirective {

  @Input() set appDelayedExit(condition: boolean) {
    /*if condition is true (course has been selected) wait before loading it*/
    if (condition) {
      setTimeout(() => {
        this.vcRef.createEmbeddedView(this.templateRef);
      }, 500);
    } else {
        setTimeout(() => {
          this.vcRef.clear();
        }, 500);
      }

    }

constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
