import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import { AddressRenderDirective } from './directives/address-render.directive';
import { ZipPipe } from './pipes/zip.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UserFormComponent,
    CurriculumListComponent,
    AddressRenderDirective,
    ZipPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ZipPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
