import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmCreateComponent } from './asm-create.component';

describe('AsmCreateComponent', () => {
  let component: AsmCreateComponent;
  let fixture: ComponentFixture<AsmCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
