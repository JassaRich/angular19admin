import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [CommonModule, SidebarComponent, NavbarComponent, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstraptoangular19';
  
}
