import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './tournament/hello/hello.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { BracketsComponent } from './tournament/brackets/brackets.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    RegistrationComponent,
    BracketsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path: 'hello', component: HelloComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'brackets', component: BracketsComponent},
    {path: '**', component: HelloComponent}
  ]),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
