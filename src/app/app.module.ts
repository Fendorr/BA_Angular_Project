import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopBarComponent } from './top-bar/top-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './spaceholder/forms.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidenavComponent,
    HomeComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'form', component: FormsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
