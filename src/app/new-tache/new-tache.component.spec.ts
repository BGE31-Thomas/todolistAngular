import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTacheComponent } from './new-tache.component';

describe('NewTacheComponent', () => {
  let component: NewTacheComponent;
  let fixture: ComponentFixture<NewTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
