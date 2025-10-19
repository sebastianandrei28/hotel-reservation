import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home';

@NgModule({
  declarations: [Home],
  imports: [CommonModule, RouterModule],
  exports: [Home],
})
export class HomeModule {}
