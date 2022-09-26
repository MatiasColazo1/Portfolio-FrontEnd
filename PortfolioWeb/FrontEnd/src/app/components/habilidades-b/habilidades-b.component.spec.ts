import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesBComponent } from './habilidades-b.component';

describe('HabilidadesBComponent', () => {
  let component: HabilidadesBComponent;
  let fixture: ComponentFixture<HabilidadesBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
