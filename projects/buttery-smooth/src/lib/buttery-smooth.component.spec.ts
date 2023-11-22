import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterySmoothComponent } from './buttery-smooth.component';

describe('ButterySmoothComponent', () => {
  let component: ButterySmoothComponent;
  let fixture: ComponentFixture<ButterySmoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButterySmoothComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButterySmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
