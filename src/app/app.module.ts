import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopBarComponent } from './topbar/topbar.component';
import { NavBarComponent } from './NavBar/NavBar.component';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
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
}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
