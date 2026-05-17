import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);
  activeSection = signal('hero');

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  setActiveSection(section: string) {
    this.activeSection.set(section);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['hero', 'about', 'skills','projects','experience','education', 'certifications', 'contact'];
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
