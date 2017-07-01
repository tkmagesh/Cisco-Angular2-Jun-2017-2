import { Pipe , PipeTransform } from '@angular/core';

interface IComparer{
	(item1:any, item2:any) : number
}


@Pipe({
	name : 'orderBy'
})
export class OrderByPipe implements PipeTransform{
	transform(data : Array<any>, attrName : string, descending : boolean = false) : Array<any> {
		if (!attrName)
			return data;
		let comparer = this.getComparerFor(attrName);
		if (descending){
			comparer = this.getDescendingComparerFor(comparer);
		}
		data.sort(comparer);
		return data;
	}

	getComparerFor(attrName:string) : IComparer {
		return function(item1:any, item2:any) : number{
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	getDescendingComparerFor(comparer : IComparer):IComparer{
		return function(item1:any, item2:any) : number{
			return comparer.apply(undefined, arguments) * -1;	
		}
	}
}



