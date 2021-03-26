import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesNavBarComponent } from './peoples-nav-bar.component';

describe('PeoplesNavBarComponent', () => {
  let component: PeoplesNavBarComponent;
  let fixture: ComponentFixture<PeoplesNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplesNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
