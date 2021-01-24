import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbStepperModule,
  NbSelectModule,
} from '@nebular/theme';
import { NameComponent } from './name/name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionTypeComponent } from './question-type/question-type.component';

@NgModule({
  declarations: [HomeComponent, NameComponent, QuestionTypeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    NbStepperModule,
    ReactiveFormsModule,
    NbSelectModule,
  ],
})
export class PagesModule {}
