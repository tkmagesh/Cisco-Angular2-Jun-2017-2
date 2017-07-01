import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';

import { Http } from '@angular/http';
import { BugOperationsService } from './bugOperations.service';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class BugServerService{
	private _baseUrl = 'http://localhost:3000/bugs';

	constructor(private _http : Http, private _bugOperations : BugOperationsService){

	}
	getAll():Observable<Array<IBug>>{
		return this._http
					.get(this._baseUrl)
					.map(response => response.json());
	}
	addNew(bugName : string) : Observable<IBug>{
		var newBugData = this._bugOperations.createNew(0, bugName);
		return this._http
				.post(this._baseUrl, newBugData)
				.map(response => response.json());

	}

	toggle(bug : IBug) : Observable<IBug>{
		let toggledBug = this._bugOperations.toggle(bug);
		return this._http
				.put(`${this._baseUrl}/${bug.id}`, toggledBug)
				.map(response => response.json());
	}
}