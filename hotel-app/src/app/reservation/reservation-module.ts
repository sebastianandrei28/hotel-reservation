import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationForm } from '../reservation-form/reservation-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationForm],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ReservationModule {}
