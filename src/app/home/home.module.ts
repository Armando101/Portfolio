import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
