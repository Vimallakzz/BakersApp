import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmListComponent } from './asm-list.component';

describe('AsmListComponent', () => {
  let component: AsmListComponent;
  let fixture: ComponentFixture<AsmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
