import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : Array<IBug> = [];

	constructor(private _bugOperationsService : BugOperationsService){
		
	}

	onCreateClick(bugName : string) : void {
		let newBug : IBug = this._bugOperationsService.createNew(bugName);
		this.bugs.push(newBug)
	}

	onBugClick(bug : IBug): void {
		this._bugOperationsService.toggle(bug);
	}

	onRemoveClosedClick() : void {
		for(let index = this.bugs.length-1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}

	getClosedCount() : number {
		let closedCount = 0;
		for(let index = 0; index < this.bugs.length; index++)
			if (this.bugs[index].isClosed)
				++closedCount;
		return closedCount;	
	}
}