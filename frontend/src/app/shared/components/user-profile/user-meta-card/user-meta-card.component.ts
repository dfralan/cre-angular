import { Component } from '@angular/core';
import { InputFieldComponent } from './../../form/input/input-field.component';
import { ModalService } from '../../../services/modal.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-user-meta-card',
  imports: [
    CommonModule,
    ModalComponent,
    InputFieldComponent,
    ButtonComponent,
  ],
  templateUrl: './user-meta-card.component.html',
  styles: ``
})
export class UserMetaCardComponent {

  constructor(public modal: ModalService) {}

  isOpen = false;
  openModal() { this.isOpen = true; }
  closeModal() { this.isOpen = false; }

  // Example user data (could be made dynamic)
  user = {
    firstName: 'Alan',
    lastName: 'D',
    role: 'Software Architect',
    location: 'Rosario, Argentina',
    avatar: '/images/user/owner.jpg',
    social: {
      facebook: 'https://www.facebook.com/dufouralan',
      x: 'https://x.com/dfralan',
      linkedin: 'https://www.linkedin.com/in/dfralan',
      instagram: 'https://instagram.com/dufouralan',
    },
    email: 'dfralan@gmail.com',
    phone: '+54 9 11 1234 5678',
    bio: 'Software Architect',
  };

  handleSave() {
    // Handle save logic here
    console.log('Saving changes...');
    this.modal.closeModal();
  }
}
