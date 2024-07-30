import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NglComboboxesModule, NglPillsModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoLookupsComponent } from './lookups.component';

// Examples
import { DemoLookupsBasic } from './examples/basic';
import { DemoLookupsHttp } from './examples/http';
import { DemoLookupsMultiple } from './examples/multiple';

const routes: Routes = [
  { path: '', component: DemoLookupsComponent },
];

@NgModule({ declarations: [
        DemoLookupsComponent,
        DemoLookupsBasic,
        DemoLookupsHttp,
        DemoLookupsMultiple,
    ], imports: [CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NglComboboxesModule,
        NglPillsModule,
        NglDemoExampleModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class NglDemoLookupsModule {}
