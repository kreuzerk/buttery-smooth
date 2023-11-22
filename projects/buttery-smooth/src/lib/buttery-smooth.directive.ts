import {ChangeDetectorRef, Directive, inject, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Directive({
  standalone: true,
  selector: '[butterySmooth]'
})
export class ButterySmoothDirective {
  private viewContainerRef = inject(ViewContainerRef);
  private templateRef = inject(TemplateRef<any>);
  private document = inject(DOCUMENT);
  private cdr = inject(ChangeDetectorRef);

  // this should probably be a setter
  @Input() set butterySmoothOf(collection: any[]){
    (this.document as any).startViewTransition(() => {
      this.viewContainerRef.clear();
      collection.forEach((item, index) => {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          $implicit: item,
          index
        });
      });
      this.cdr.detectChanges();
    });
  }
}
