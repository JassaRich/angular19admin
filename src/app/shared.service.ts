import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Create a signal to hold the data
  sharedData = signal<string>('Initial data from Signal');

  // Method to update the signal's value
  updateData(newData: string) {
    this.sharedData.set(newData);
  }
}
