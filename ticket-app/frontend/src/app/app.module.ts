import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TicketConfirmationComponent } from './ticket-confirmation/ticket-confirmation.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
    { path: '', component: SeatSelectionComponent },
    { path: 'ticket-confirmation', component: TicketConfirmationComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        TicketConfirmationComponent,
        SeatSelectionComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
