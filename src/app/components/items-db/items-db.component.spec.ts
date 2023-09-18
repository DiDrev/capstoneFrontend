import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDBComponent } from './items-db.component';

describe('ItemsDBComponent', () => {
  let component: ItemsDBComponent;
  let fixture: ComponentFixture<ItemsDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsDBComponent]
    });
    fixture = TestBed.createComponent(ItemsDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
