import { Component } from '@angular/core';
import { Hike } from '../shared/hike';
import {HikeService } from './hike.service';


@Component({
	moduleId: module.id,
	selector: 'hike-list',
	templateUrl: 'hike-list.component.html'
})
export class HikeListComponent {
	hikes: Hike[];
	searchTerm: string;

	constructor(private _hikeService: HikeService) {}
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
