import { Component } from '@angular/core';

@Component({
	selector : 'calculator-one',
	templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
	result : number = 0;
	add(number1, number2){
		this.result = parseInt(number1) + parseInt(number2);
	}
	subtract(number1, number2){
		this.result = parseInt(number1) - parseInt(number2);
	}
	multiply(number1, number2){
		this.result = parseInt(number1) * parseInt(number2);
	}
	divide(number1, number2){
		this.result = parseInt(number1) / parseInt(number2);
	}
}