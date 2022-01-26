import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    ButtonComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, NavbarComponent, ButtonComponent, FooterComponent],
})
export class SharedModule {}
