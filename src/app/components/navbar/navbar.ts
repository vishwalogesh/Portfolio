import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);
  activeSection = signal('hero');

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((value) => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  setActiveSection(section: string) {
    this.activeSection.set(section);
  }

  onWindowScroll() {
    const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }
}
