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

  it('should render four main timeline entries with nested certificates', () => {
    expect(component.timelineEntries.length).toBe(4);
    expect(component.timelineEntries[0].title).toContain('Diploma');
    expect(component.timelineEntries[1].certificates?.[0].name).toBe('MySQL Database');
    expect(component.timelineEntries[3].certificates?.[0].name).toBe('.NET Core Development');
  });
});
