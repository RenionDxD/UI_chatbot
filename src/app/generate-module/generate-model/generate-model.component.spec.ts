import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateModelComponent } from './generate-model.component';

describe('GenerateModelComponent', () => {
  let component: GenerateModelComponent;
  let fixture: ComponentFixture<GenerateModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateModelComponent]
    });
    fixture = TestBed.createComponent(GenerateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
