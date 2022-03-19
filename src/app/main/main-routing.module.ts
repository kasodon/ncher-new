import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { PublicationsComponent } from './publications/publications.component';
import { EventsComponent } from './events/events.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      },
      { path: 'about', component: AboutComponent },
      { path: 'members', component: MembersComponent },
      { path: 'publications', component: PublicationsComponent },
      { path: 'events', component: EventsComponent },
      { path: 'programs', component: ProgramsComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
