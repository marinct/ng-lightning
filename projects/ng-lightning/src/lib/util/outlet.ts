import { Component, Input, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[nglInternalOutlet]',
  template: `
    <ng-template [ngIf]="isTemplate()" [ngIfElse]="str">
      <ng-template [ngTemplateOutlet]="nglInternalOutlet"></ng-template>
    </ng-template>
    <ng-template #str>{{nglInternalOutlet}}</ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglInternalOutlet {
  @Input() nglInternalOutlet: string | TemplateRef<any>;

  isTemplate() {
    return this.nglInternalOutlet instanceof TemplateRef;
  }
}
