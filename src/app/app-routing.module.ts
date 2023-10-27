import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';

const routes: Routes = [
  { path: '', component: CurriculumListComponent },
  { path: 'edit', component: UserFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
