import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Basic Validation
    if (this.email === 'admin@example.com' && this.password === 'password') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
