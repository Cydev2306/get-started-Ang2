import { Component } from '@angular/core';
import { Hike } from './hike/hike';

import {HikeService } from './hike/hike.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'app.component.html' ,
})
export class AppComponent  {
	hikes: Hike[];

	constructor(private _hikeService: HikeService) {
	}
	ngOnInit(){
		// this.hikes = this._hikeService.getHikes();
		// the old one
		this._hikeService.getHikesFromAPI()
			.subscribe(
				res => this.hikes = res,
				err => console.error(err.status)
			)
			// 3 cb en param ok, err, done 
		console.log(this.hikes);
	}
 }
