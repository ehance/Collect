import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StatementComponent } from './statement/statement.component';
import { AdminComponent } from './admin/admin.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: StatementComponent },
       { path: 'admin', component: AdminComponent },
      
    ])
   ],
  declarations: [ AppComponent, HelloComponent, StatementComponent, AdminComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
