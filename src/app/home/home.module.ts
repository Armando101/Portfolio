import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [HeroComponent, HomeComponent, ProjectComponent, ProjectListComponent, ExperienceComponent, ExperienceListComponent, ContactComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
