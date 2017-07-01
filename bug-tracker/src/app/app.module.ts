import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { BugStatsComponent } from './bug-tracker/bug-stats/bugStats.component';
import { BugEditComponent } from './bug-tracker/bug-edit/bugEdit.component';
import { OrderByPipe } from './bug-tracker/pipes/orderBy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    BugStatsComponent,
    BugEditComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BugOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
