import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugStorageService{
	private currentBugId : number = 0;
	private storage : Storage = window.localStorage;

	constructor(private _bugOperationsService : BugOperationsService){

	}

	getAll() : Array<IBug>{
		let result = [];
		for(let index = 0; index < this.storage.length; index++){
			let key = this.storage.key(index),
				dataAsString = this.storage.getItem(key),
				bug = JSON.parse(dataAsString);

			this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
			result.push(bug);
		}
		return result;
	}
	addNew(bugName : string) : IBug{
		let newBug = this._bugOperationsService.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}

	private save(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}

	toggle(bug : IBug) : IBug {
		let toggledBug = this._bugOperationsService.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}

	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}