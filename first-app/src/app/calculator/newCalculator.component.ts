import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-two',
	templateUrl : 'newCalculator.component.html'
})
export class NewCalculatorComponent{
	model : CalculatorModel = new CalculatorModel();
}