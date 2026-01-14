import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatureBStore } from './feature-b.store';

@Component({
  selector: 'lib-feature-b',
  imports: [CommonModule, FormsModule],
  templateUrl: './feature-b.html',
  styleUrl: './feature-b.css',
  providers: [FeatureBStore],
})
export class FeatureB {
  readonly store = inject(FeatureBStore);
  newMessage = '';
  newUserName = '';

  onAddMessage() {
    if (this.newMessage.trim()) {
      this.store.addMessage(this.newMessage.trim());
      this.newMessage = '';
    }
  }

  onUpdateUserName() {
    if (this.newUserName.trim()) {
      this.store.setUserName(this.newUserName.trim());
      this.newUserName = '';
    }
  }
}
