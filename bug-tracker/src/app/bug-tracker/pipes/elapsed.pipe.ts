import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name : 'elapsed'
})
export class ElapsedPipe{
	transform(data : any):string{
		return moment(data).fromNow();
	}
}