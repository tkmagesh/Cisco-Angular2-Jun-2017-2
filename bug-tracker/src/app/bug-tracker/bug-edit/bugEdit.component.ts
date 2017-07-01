import { Component, Output, EventEmitter } from '@angular/core';



@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">New Bug :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create" (click)="onCreateClick()">
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
	newBug : EventEmitter<string> = new EventEmitter<string>();

	newBugName : string = '';

	constructor(){

	}

	onCreateClick() : void {
		
		this.newBug.emit(this.newBugName);
	}
}
