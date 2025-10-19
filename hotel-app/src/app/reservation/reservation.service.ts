import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservation: Reservation[] = [];

  //CRUD

  constructor() {
    try {
      let savedReservations = localStorage.getItem('reservations');
      if (savedReservations && savedReservations !== 'undefined' && savedReservations !== 'null') {
        this.reservation = JSON.parse(savedReservations);
      } else {
        this.reservation = [];
      }
    } catch (error) {
      console.warn('Error loading reservations from localStorage:', error);
      this.reservation = [];
      // Clear the corrupted data
      localStorage.removeItem('reservations');
    }
  }

  getReservations(): Reservation[] {
    return this.reservation;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservation.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservation.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservation));
  }
  deleteReservation(id: string): void {
    let index = this.getReservations().findIndex((res) => res.id === id);
    this.reservation.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservation));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservation.findIndex((res) => res.id === id);
    updatedReservation.id = id;
    this.reservation[index] = updatedReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservation));
  }
}
