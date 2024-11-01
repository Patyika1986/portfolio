import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InworkComponent } from './inwork.component';

describe('InworkComponent', () => {
  let component: InworkComponent;
  let fixture: ComponentFixture<InworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InworkComponent]
    });
    fixture = TestBed.createComponent(InworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
