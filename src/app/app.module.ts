import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopBarComponent } from './top-bar/top-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GridComponent } from './Grid/Grid.component';
import { FormsComponent } from './forms/forms.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SeperateBindingExampleComponent } from './SeperateBindingExample/SeperateBindingExample.component';
import { InputOutputShowcaseComponent } from './InputShowcase/InputShowcase.component';
import { BindingsComponent } from './Bindings/Bindings.component';
import { OutputShowcaseComponent } from './OutputShowcase/OutputShowcase.component';
import { HTTPRequestsComponent } from './HTTPRequests/HTTPRequests.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidenavComponent,
    GridComponent,
    FormsComponent,
    SeperateBindingExampleComponent,
    InputOutputShowcaseComponent,
    BindingsComponent,
    OutputShowcaseComponent,
    HTTPRequestsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: GridComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'bindings', component: BindingsComponent },
      { path: 'http', component: HTTPRequestsComponent },
    ], {
      initialNavigation: 'enabledBlocking'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
