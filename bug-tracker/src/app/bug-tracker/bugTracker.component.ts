import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css'],
})
export class BugTrackerComponent{
	bugs : Array<IBug> = [];

	constructor(private _bugOperationsService : BugOperationsService){
		this.bugs.push(this._bugOperationsService.createNew('Server communication failure'));
		this.bugs.push(this._bugOperationsService.createNew('User actions not recognized'));
		this.bugs.push(this._bugOperationsService.createNew('Application not responding'));
		this.bugs.push(this._bugOperationsService.createNew('Data cleansing error'));
	}

	onCreateBug(newBug : IBug) : void {
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

	
}