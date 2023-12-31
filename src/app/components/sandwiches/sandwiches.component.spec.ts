import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichesComponent } from './sandwiches.component';

describe('SandwichesComponent', () => {
  let component: SandwichesComponent;
  let fixture: ComponentFixture<SandwichesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SandwichesComponent]
    });
    fixture = TestBed.createComponent(SandwichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
