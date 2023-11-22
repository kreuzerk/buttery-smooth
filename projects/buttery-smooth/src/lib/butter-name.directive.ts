import {Directive, HostBinding, Input, OnInit} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[butterName]'
})
export class ButterName implements OnInit {
  @HostBinding('style.view-transition-name') viewTransitionName = '';
  @Input() butterName: string = '';

  ngOnInit(): void {
    this.viewTransitionName = this.butterName;
  }
}
