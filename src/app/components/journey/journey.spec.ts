import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyComponent } from './journey';

describe('JourneyComponent', () => {
  let component: JourneyComponent;
  let fixture: ComponentFixture<JourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JourneyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list AZ-900 first among certificates for the SRF role', () => {
    expect(component.timelineEntries.length).toBe(4);
    expect(component.timelineEntries[0].organization).toBe('SRF Ltd');
    expect(component.timelineEntries[0].certificates?.[0]).toEqual({
      name: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: 'Oct 2026',
      url: '/Az900.pdf',
    });
    expect(component.timelineEntries[0].certificates?.[1].name).toBe('.NET Core Development');
  });
});
