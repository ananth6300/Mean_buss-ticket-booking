import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-seat-selection',
    template: `
      <h1>Select Your Seats</h1>
      <div *ngFor="let seat of seats" (click)="toggleSeat(seat)" [class.selected]="selectedSeats.includes(seat)">
          {{seat}}
      </div>
      <button (click)="confirmSeats()">Confirm Seats</button>
    `,
    styles: [`
      .selected {
          background-color: #dc3545;
      }
    `]
})
export class SeatSelectionComponent {
    seats = Array.from({ length: 10 }, (_, i) => i + 1);
    selectedSeats: number[] = [];

    constructor(private router: Router) {}

    toggleSeat(seat: number) {
        const index = this.selectedSeats.indexOf(seat);
        if (index >= 0) {
            this.selectedSeats.splice(index, 1);
        } else {
            this.selectedSeats.push(seat);
        }
    }

    confirmSeats() {
        if (this.selectedSeats.length > 0) {
            const seatsString = this.selectedSeats.join(', ');
            const totalAmount = this.selectedSeats.length * 800;
            this.router.navigate(['/ticket-confirmation'], {
                queryParams: {
                    origin: 'Delhi',
                    destination: 'Mumbai',
                    date: '2024-10-15',
                    seats: seatsString,
                    totalAmount: totalAmount
                }
            });
        } else {
            alert('Please select at least one seat.');
        }
    }
}
