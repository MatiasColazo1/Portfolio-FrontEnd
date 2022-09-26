import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesFComponent } from './habilidades-f.component';

describe('HabilidadesFComponent', () => {
  let component: HabilidadesFComponent;
  let fixture: ComponentFixture<HabilidadesFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
