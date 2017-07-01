import { Component, Input } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
	`,
	styles : [
		`section {
			width : 500px;
			border : 1px solid black;
			padding : 5px;
			margin-bottom: 10px;
			text-align : right;
		}`,
		`.stats{
			font-size: 22pt;
		}`,
		`.closed{
			color : red;
			text-decoration: line-through;
			font-style: italic;
		}`
	]
})
export class BugStatsComponent{

	@Input('data')
	bugs : Array<IBug>;

	getClosedCount() : number {
		let closedCount = 0;
		for(let index = 0; index < this.bugs.length; index++)
			if (this.bugs[index].isClosed)
				++closedCount;
		return closedCount;	
	}
}