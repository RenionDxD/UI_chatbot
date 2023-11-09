import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesSaveComponent } from './files-save.component';

describe('FilesSaveComponent', () => {
  let component: FilesSaveComponent;
  let fixture: ComponentFixture<FilesSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesSaveComponent]
    });
    fixture = TestBed.createComponent(FilesSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
