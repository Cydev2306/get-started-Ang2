import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hike } from './hike';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'; // pratique pour du debug


@Injectable()
export class HikeService {
	constructor(private _http:Http){

	}
	
	/*getHikes(){
		return this.hikes;
	}*/

	getHikesFromAPI() {
		return this._http.get('app/api/hikes.json')
			.do(r => console.log(r))
			.map(hikes => hikes.json())
	}
}