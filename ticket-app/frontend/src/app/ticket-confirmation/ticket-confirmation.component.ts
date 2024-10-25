import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-ticket-confirmation',
    template: `
      <h1>Ticket Confirmation</h1>
      <p><strong>Route:</strong> {{route}}</p>
      <p><strong>Date of Journey:</strong> {{dateOfJourney}}</p>
      <p><strong>Selected Seats:</strong> {{selectedSeats}}</p>
      <p><strong>Total Amount:</strong> ₹{{totalAmount}}</p>
      <button (click)="saveTicket()">Save Ticket</button>
    `
})
export class TicketConfirmationComponent implements OnInit {
    route: string;
    dateOfJourney: string;
    selectedSeats: string;
    totalAmount: number;

    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.route = `${params['origin']} to ${params['destination']}`;
            this.dateOfJourney = params['date'];
            this.selectedSeats = params['seats'];
            this.totalAmount = params['totalAmount'];
        });
    }

    saveTicket() {
        const ticketData = {
            route: this.route,
            dateOfJourney: this.dateOfJourney,
            selectedSeats: this.selectedSeats,
            totalAmount: parseFloat(this.totalAmount)
        };

        this.http.post('http://localhost:3000/api/tickets', ticketData)
            .subscribe(response => {
                alert('Ticket saved successfully!');
            }, error => {
                alert('Error saving ticket: ' + error.message);
            });
    }
}
