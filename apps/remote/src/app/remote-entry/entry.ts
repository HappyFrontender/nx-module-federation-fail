import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-remote-entry',
  template: `
    <div class="remote-container">
      <h1>Remote Application</h1>
      <p>This is a Module Federation remote application with lazy-loaded libraries</p>
      
      <div class="nav-links">
        <a routerLink="/remote" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-button">Home</a>
        <a routerLink="/remote/feature-a" routerLinkActive="active" class="nav-button">Feature A</a>
        <a routerLink="/remote/feature-b" routerLinkActive="active" class="nav-button">Feature B</a>
      </div>
      
      <router-outlet></router-outlet>
      
      <div class="info-box">
        <h3>Features:</h3>
        <ul>
          <li>✅ Nx 22.3.3</li>
          <li>✅ Angular 21.1.0</li>
          <li>✅ NGRX Signals 21.0.1</li>
          <li>✅ Module Federation with Webpack</li>
          <li>✅ Two lazy-loaded Angular libraries</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .remote-container {
      padding: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    h1 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #7f8c8d;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .nav-button {
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .nav-button.active {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }

    .info-box {
      background: #f8f9fa;
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid #667eea;
      margin-top: 2rem;
    }

    .info-box h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .info-box ul {
      list-style: none;
      padding: 0;
    }

    .info-box li {
      padding: 0.5rem 0;
      color: #34495e;
      font-size: 1.1rem;
    }
  `]
})
export class RemoteEntry {}
