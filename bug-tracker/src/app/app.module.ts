import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { BugStorageService } from './bug-tracker/services/bugStorage.service';
import { BugServerService } from './bug-tracker/services/bugServer.service';

import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { BugStatsComponent } from './bug-tracker/bug-stats/bugStats.component';
import { BugEditComponent } from './bug-tracker/bug-edit/bugEdit.component';
import { OrderByPipe } from './bug-tracker/pipes/orderBy.pipe';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';
import { ElapsedPipe } from './bug-tracker/pipes/elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    BugStatsComponent,
    BugEditComponent,
    OrderByPipe,
    ClosedCountPipe,
    ElapsedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BugOperationsService, BugStorageService, BugServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
