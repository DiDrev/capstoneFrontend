import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupsComponent } from './soups.component';

describe('SoupsComponent', () => {
  let component: SoupsComponent;
  let fixture: ComponentFixture<SoupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoupsComponent]
    });
    fixture = TestBed.createComponent(SoupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
