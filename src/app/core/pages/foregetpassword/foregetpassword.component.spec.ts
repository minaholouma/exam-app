import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForegetpasswordComponent } from './foregetpassword.component';

describe('ForegetpasswordComponent', () => {
  let component: ForegetpasswordComponent;
  let fixture: ComponentFixture<ForegetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForegetpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForegetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
