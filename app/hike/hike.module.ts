import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeListComponent } from './hike-list.component';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeFilterPipe } from './hike-filter.pipe'
import { HikeService } from './hike.service';
@NgModule({
	imports: [CommonModule, RouterModule,FormsModule],
	declarations: [HikeListComponent, HikeDetailsComponent, HikeFilterPipe], // declaration des composants
	exports: [HikeListComponent],
	providers: [HikeService] // services
})
export class HikeModule {

}
