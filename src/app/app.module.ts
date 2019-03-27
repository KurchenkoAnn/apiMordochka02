import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerComponent } from './worker/worker.component';


import{WorkersService} from './workers.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';

import { MatButtonModule,MatMenuModule,MatDatepickerModule,MatNativeDateModule  } from '@angular/material';
import { MatInputModule,MatTooltipModule,MatCardModule,MatIconModule,MatFormFieldModule  } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [WorkersService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
