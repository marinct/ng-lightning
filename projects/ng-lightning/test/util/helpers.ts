/**
 * Testing helpers
 */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NglConfig, NGL_CONFIG } from '../../src/lib/config/config';

// Default configuration for every TestComponent
beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      NglConfig,
      {provide: NGL_CONFIG, useValue: null},
    ],
  });
});

export function selectElements(element: HTMLElement, selector: string): HTMLElement[] {
  return [].slice.call(element.querySelectorAll(selector));
}

// Shortcut function for less boilerplate
export function createGenericTestComponent<T>(type: new (...args: any[]) => T, html?: string, detectChanges = true): ComponentFixture<T> {
  if (html) {
    TestBed.overrideComponent(type, {set: {template: html}});
  }
  const fixture = TestBed.createComponent(type);
  if (detectChanges) {
    fixture.detectChanges();
  }
  return fixture as ComponentFixture<T>;
}
