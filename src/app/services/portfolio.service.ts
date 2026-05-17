import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getExperiences(): Experience[] {
    return [
      {
        company: 'SRF Ltd',
        position: 'Junior Software Engineer',
        duration: 'Feb 2025 – Present',
        description: [
          'Developed Visitor Management System (VMS) using .NET Core and Angular',
          'Implemented Role-Based Access Control (RBAC) for secure user management',
          'Built responsive Angular UI components with modern design principles',
          'Created Ionic-based dashboard for mobile access'
        ]
      },
      {
        company: 'Vcidex Solutions',
        position: 'Junior Software Programmer',
        duration: 'Aug 2023 – Jan 2025',
        description: [
          'Developed CRM system using .NET Web API and Angular',
          'Integrated SparkPost for email campaigns, improving effectiveness by +40%',
          'Implemented Shopify integration for e-commerce functionality',
          'Managed multi-channel campaigns (WhatsApp, SMS, Gmail, Outlook)'
        ]
      }
    ];
  }

  getDeveloperInfo() {
    return {
      name: 'Vishwa Logesh S',
      role: 'Full Stack .NET Developer',
      location: 'Tamil Nadu',
      email: 'svishwalogesh8888@gmail.com',
      phone: '9025881853',
      summary: 'Full Stack .NET Developer with 2.5+ years of experience in .NET(Core & Framework), Angular, and SQL. Awarded Best Debutant for outstanding performance in initial projects.',
      tagline: 'Building robust web applications with modern technologies'
    };
  }
}