import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerListComponent } from './baker-list.component';

describe('BakerListComponent', () => {
  let component: BakerListComponent;
  let fixture: ComponentFixture<BakerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
