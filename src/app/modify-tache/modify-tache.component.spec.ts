import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTacheComponent } from './modify-tache.component';

describe('ModifyTacheComponent', () => {
  let component: ModifyTacheComponent;
  let fixture: ComponentFixture<ModifyTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
