import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

import { BugServerService } from './services/bugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css'],
})
export class BugTrackerComponent implements OnInit{
	bugs : Array<IBug> = [];

	constructor(private _bugStorageService : BugStorageService, private _bugServer : BugServerService){
		
	}

	ngOnInit(){
		this._bugServer
			.getAll()
			.subscribe(data => this.bugs = data);
	}

	onCreateBug(newBugName : string) : void {
		//this.bugs.push(newBug)
		this._bugServer
			.addNew(newBugName)
			.subscribe(newBug => this.bugs = [...this.bugs, newBug]);
	}

	onBugClick(bugToToggle : IBug): void {
		this._bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bugInList => bugInList === bugToToggle ? toggledBug : bugInList));
	}

	onRemoveClosedClick() : void {
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed){
				this._bugStorageService.remove(this.bugs[index]);
				this.bugs.splice(index, 1);
			}
		}
	}

	
}