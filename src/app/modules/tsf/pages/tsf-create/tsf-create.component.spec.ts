import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsfCreateComponent } from './tsf-create.component';

describe('TsfCreateComponent', () => {
  let component: TsfCreateComponent;
  let fixture: ComponentFixture<TsfCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsfCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsfCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
