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
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { InputOutputShowcaseComponent } from './InputOutputShowcase/InputOutputShowcase.component';
import { BindingsComponent } from './Bindings/Bindings.component';

@NgModule({
  declarations: [			
    AppComponent,
    TopBarComponent,
    SidenavComponent,
    HomeComponent,
    FormsComponent,
    ExampleComponent,
    InputOutputShowcaseComponent,
    BindingsComponent,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'form', component: FormsComponent },
      { path: 'communication', component: InputOutputShowcaseComponent },
      { path: 'bindings', component: BindingsComponent },
    ], {
      initialNavigation: 'enabledBlocking'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
