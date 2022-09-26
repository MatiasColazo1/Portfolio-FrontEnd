import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiEComponent } from './sobremi-e.component';

describe('SobremiEComponent', () => {
  let component: SobremiEComponent;
  let fixture: ComponentFixture<SobremiEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremiEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremiEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
