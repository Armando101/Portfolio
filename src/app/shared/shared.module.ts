import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, NavbarComponent, ButtonComponent],
})
export class SharedModule {}
