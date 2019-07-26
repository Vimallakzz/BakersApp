import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsfListComponent } from './tsf-list.component';

describe('TsfListComponent', () => {
  let component: TsfListComponent;
  let fixture: ComponentFixture<TsfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
