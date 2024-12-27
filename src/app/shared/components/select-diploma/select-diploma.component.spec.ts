import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDiplomaComponent } from './select-diploma.component';

describe('SelectDiplomaComponent', () => {
  let component: SelectDiplomaComponent;
  let fixture: ComponentFixture<SelectDiplomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDiplomaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectDiplomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
