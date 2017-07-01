import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css'],
})
export class BugTrackerComponent implements OnInit{
	bugs : Array<IBug> = [];

	constructor(private _bugStorageService : BugStorageService, private _http : Http){
		
	}

	ngOnInit(){
		/*var observable = this._http.get('http://localhost:3000/bugs');
		observable
			.map(response => response.json())
			.subscribe(data => this.bugs = data);*/

		this.bugs = this._bugStorageService.getAll();
	}

	onCreateBug(newBugName : string) : void {
		//this.bugs.push(newBug)
		let newBug = this._bugStorageService.addNew(newBugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug): void {
		let toggledBug = this._bugStorageService.toggle(bugToToggle);
		this.bugs = this.bugs.map(bugInList => bugInList === bugToToggle ? toggledBug : bugInList);
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