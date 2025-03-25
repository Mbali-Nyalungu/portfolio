import { Component } from '@angular/core';
import { NavbarComponent } from "../ui/navbar/navbar.component";
import { ProjectsComponent } from "../pages/projects/projects.component";
import { AboutComponent } from "../pages/about/about.component";
import { FooterComponent } from "../ui/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ProjectsComponent, FooterComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
