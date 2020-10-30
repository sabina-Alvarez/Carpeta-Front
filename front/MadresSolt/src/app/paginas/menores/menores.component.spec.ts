import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenoresComponent } from './menores.component';

describe('MenoresComponent', () => {
  let component: MenoresComponent;
  let fixture: ComponentFixture<MenoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
