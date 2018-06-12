import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing-module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { MatDialog } from '@angular/material/dialog';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    MatSidenavModule,
    ProjectModule,
    LoginModule,
    TaskModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [ MatDialog ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
