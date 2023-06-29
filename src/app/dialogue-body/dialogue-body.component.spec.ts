import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueBodyComponent } from './dialogue-body.component';

describe('DialogueBodyComponent', () => {
  let component: DialogueBodyComponent;
  let fixture: ComponentFixture<DialogueBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogueBodyComponent]
    });
    fixture = TestBed.createComponent(DialogueBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
