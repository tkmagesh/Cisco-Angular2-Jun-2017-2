import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	template : `
		<label for="">Name :</label>
		<input type="text" #txtName />
		<input type="button" value="Greet" (click)="onGreetClick(txtName.value)"/>
		<h3>{{message}}</h3>
	`
})
export class GreeterComponent{
	message : string = 'Hello World!!';

	onGreetClick(name){
		this.message = `Hello ${name}, Have a nice day!`;
	}
}