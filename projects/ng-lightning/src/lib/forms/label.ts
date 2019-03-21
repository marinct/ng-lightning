import { Component, Input, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { InputBoolean } from '../util/convert';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'label[nglFormLabel]',
  templateUrl: './label.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.slds-form-element__label]': 'true',
  },
})
export class NglFormLabel {

  @Input('nglFormLabel') label: string | TemplateRef<any>;

  @Input() @InputBoolean() required: boolean;

}
