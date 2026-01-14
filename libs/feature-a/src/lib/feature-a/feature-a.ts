import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatureAStore } from './feature-a.store';

@Component({
  selector: 'lib-feature-a',
  imports: [CommonModule, FormsModule],
  templateUrl: './feature-a.html',
  styleUrl: './feature-a.css',
  providers: [FeatureAStore],
})
export class FeatureA {
  readonly store = inject(FeatureAStore);
  newItemText = '';

  onAddItem() {
    if (this.newItemText.trim()) {
      this.store.addItem(this.newItemText.trim());
      this.newItemText = '';
    }
  }
}
