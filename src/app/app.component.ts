import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, CommonModule],
  template: ` 
    <!-- <router-outlet /> -->
    <app-new-component />
    
    `,
})
export class AppComponent {
  title = 'tela-login-talvez';
}

// <router-outlet />