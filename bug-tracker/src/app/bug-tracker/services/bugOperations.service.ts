import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(id : number = 0 ,  bugName : string) : IBug {
		return {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
	}
	
	toggle(bug : IBug) : IBug{
		//bug.isClosed = !bug.isClosed;
		return {
			...bug,
			isClosed : !bug.isClosed
		};
	}
}