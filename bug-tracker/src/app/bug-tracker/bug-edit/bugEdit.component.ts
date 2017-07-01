import { Component, Output, EventEmitter } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from '../services/bugOperations.service';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">New Bug :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create" (click)="onCreateClick(txtBugName.value)">
		</section>
	`,
	styles : [
		`section {
			width : 500px;
			border : 1px solid black;
			padding : 5px;
			margin-bottom: 10px;
		}`]
})
export class BugEditComponent{

	@Output()
	newBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private _bugOperationsService : BugOperationsService){

	}

	onCreateClick(bugName : string) : void {
		let newBugObj : IBug = this._bugOperationsService.createNew(bugName);
		this.newBug.emit(newBugObj);
	}
}
