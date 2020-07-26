import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCharComponent } from './detail-char.component';

describe('DetailCharComponent', () => {
  let component: DetailCharComponent;
  let fixture: ComponentFixture<DetailCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
