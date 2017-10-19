import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';


import { ContactUsComponent } from './contact-us.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent],
  providers: [ContactService]
})
export class ContactModule {}
