import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremiEdComponent } from './sobremi-ed.component';

describe('SobremiEdComponent', () => {
  let component: SobremiEdComponent;
  let fixture: ComponentFixture<SobremiEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremiEdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobremiEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
