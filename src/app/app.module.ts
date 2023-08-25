import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PatientsComponent} from './components/patients/patients.component';
import {RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DateOfBirthPipe } from './components/pipes/date-of-birth.pipe';
import { ChildFormComponent } from './components/child-form/child-form.component';

const appRoutes: Routes = [
  {path: '', component: PatientsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NavbarComponent,
    DateOfBirthPipe,
    ChildFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
