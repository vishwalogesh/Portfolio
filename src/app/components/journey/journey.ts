import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface TimelineEntry {
  type: 'education' | 'work';
  title: string;
  organization: string;
  dateRange: string;
  description?: string;
  bullets?: string[];
  achievements?: string[];
  certificates?: Certificate[];
  isCurrent?: boolean;
}

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey.html',
  styleUrl: './journey.scss',
})
export class JourneyComponent implements AfterViewInit {
  @ViewChildren('timelineItem') timelineItems?: QueryList<ElementRef<HTMLElement>>;

  readonly legend = [
    { type: 'education', label: 'Education' },
    { type: 'work', label: 'Work' },
  ] as const;

  readonly timelineEntries: TimelineEntry[] = [
    {
      type: 'work',
      title: 'Junior Software Engineer',
      organization: 'SRF Ltd',
      dateRange: 'Feb 2025 – Present',
      description: 'Building secure, scalable enterprise applications with modern .NET and Angular technologies.',
      bullets: [
        'Built a Visitor Management System using .NET Core, Angular, and SQL Server.',
        'Implemented RBAC-based authentication and authorization for secure access control.',
        'Developed responsive UI components and dynamic forms for complex workflows.',
      ],
      achievements: [
        'Awarded Best Debutant for outstanding performance during the initial phase of the role.',
        'Cash Award for outstanding contribution to project delivery and production support.',
      ],
      certificates: [
        {
          name: '.NET Core Development',
          issuer: 'Udemy',
          date: 'Aug 2025',
          url: '/DotNet Core@udemy.pdf',
        },
      ],
      isCurrent: true,
    },
    {
      type: 'work',
      title: 'Junior Software Programmer',
      organization: 'Vcidex Solutions',
      dateRange: 'Aug 2023 – Jan 2025',
      description: 'Delivered CRM and business workflow solutions using .NET, Angular, and MySQL.',
      bullets: [
        'Developed CRM applications using .NET Web API, Angular, and MySQL.',
        'Integrated SparkPost email services and Shopify sync workflows.',
        'Designed data-driven dashboards and marketing engagement processes.',
      ],
    },
    {
      type: 'education',
      title: 'B.E. Mechanical Engineering',
      organization: 'Government College of Engineering, Dharmapuri',
      dateRange: '2019 – 2022',
      description: 'Built a strong foundation in mechanical systems, design thinking, and applied engineering.',
      certificates: [
        {
          name: 'MySQL Database',
          issuer: 'Udemy',
          date: 'Jul 2022',
          url: '/SQL@udemy.pdf',
        },
        {
          name: 'Python Programming',
          issuer: 'LiveWire',
          date: 'Dec 2022',
          url: '/Python@livewire.pdf',
        },
      ],
    },
    {
      type: 'education',
      title: 'Diploma in Production Engineering',
      organization: 'Thiagarajar Polytechnic College, Salem',
      dateRange: '2016 – 2019',
      description: 'Completed diploma studies focused on manufacturing and production processes.',
    },
  ];

  ngAfterViewInit(): void {
    if (!this.timelineItems) {
      return;
    }

    this.timelineItems.forEach((item) => {
      item.nativeElement.classList.add('is-visible');
    });

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.timelineItems.forEach((item) => observer.observe(item.nativeElement));
  }
}
