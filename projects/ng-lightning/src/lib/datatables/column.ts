import { Directive, Input, ContentChild } from '@angular/core';
import { NglDatatableCell } from './cell';
import { NglDatatableHeadingTemplate } from './heading';
import { InputBoolean } from '../util/convert';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ngl-datatable-column',
})
export class NglDatatableColumn {
  @Input() heading: string;
  @Input() key: string;
  @Input() headClass: any;
  @Input() cellClass: any;
  @ContentChild(NglDatatableCell) cellTpl: NglDatatableCell;
  @ContentChild(NglDatatableHeadingTemplate) headingTpl: NglDatatableHeadingTemplate;

  @Input() @InputBoolean() sortable = false;
  @Input() @InputBoolean() truncate = false;
}
