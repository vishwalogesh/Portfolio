import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  certificateUrl: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: '.NET Core Development',
      issuer: 'Udemy',
      date: 'Aug 2025',
      certificateUrl: '/.Net Core@udemy.pdf'
    },
    {
      title: 'MySQL Database',
      issuer: 'Udemy',
      date: 'Jul 2022',
      certificateUrl: '/SQL@udemy.pdf'
    }
  ];

  onCardHover(element: HTMLElement, isEnter: boolean) {
    if (isEnter) {
      element.style.background = 'rgba(255,193,7,0.15)';
      element.style.transform = 'translateY(-5px)';
    } else {
      element.style.background = 'rgba(255,255,255,0.12)';
      element.style.transform = 'translateY(0)';
    }
  }
}
