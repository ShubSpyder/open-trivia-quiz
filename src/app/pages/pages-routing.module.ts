import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NameComponent } from './name/name.component';
import { QuestionTypeComponent } from './question-type/question-type.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'entername',
    component: NameComponent,
  },
  {
    path: 'selectquestiontype',
    component: QuestionTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
