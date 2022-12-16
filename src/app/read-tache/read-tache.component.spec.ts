import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTacheComponent } from './read-tache.component';

describe('ReadTacheComponent', () => {
  let component: ReadTacheComponent;
  let fixture: ComponentFixture<ReadTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
