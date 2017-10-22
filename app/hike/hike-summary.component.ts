import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hike } from './hike';


@Component({
	moduleId: module.id,
	selector: 'hike-summary',
	templateUrl: 'hike-summary.component.html',
	styles: ['a { text-decoration: none } a:hover { color: #999}']
})
export class HikeSummaryComponent {
	@Input() hike: Hike;
	@Output() addHikeAsFavorite = new EventEmitter<Hike>();


	toggleAsTodoHike(isAdded:any){
		console.log("checked : ", isAdded)
		if(isAdded){
				this.addHikeAsFavorite.emit(this.hike);
		}
	}
}
