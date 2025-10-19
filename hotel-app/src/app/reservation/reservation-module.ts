import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationForm } from '../reservation-form/reservation-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home-module';

@NgModule({
  declarations: [ReservationForm],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HomeModule],
})
export class ReservationModule {}
