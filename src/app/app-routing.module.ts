import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RoomsComponent } from './component/rooms/rooms.component';

const routes: Routes = [
  { path:'',redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'contact', component: ContactUsComponent},
  { path: 'room', component: RoomsComponent},
  { path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
