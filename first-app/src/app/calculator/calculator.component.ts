import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-one',
	templateUrl : 'calculator.component.html'

})
export class CalculatorComponent{
	model : CalculatorModel = new CalculatorModel();
}