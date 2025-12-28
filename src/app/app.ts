import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Certificates } from './components/certificates/certificates';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    About,
    Experience,
    Certificates,
    Skills,
    Projects,
    Contact
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-experience></app-experience>
    <app-certificates></app-certificates>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-contact></app-contact>
  `
})
export class App {
  title = 'Joaquín Huayllasco - Portfolio';
}