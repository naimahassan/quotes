import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFoformComponent } from './quote-foform.component';

describe('QuoteFoformComponent', () => {
  let component: QuoteFoformComponent;
  let fixture: ComponentFixture<QuoteFoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteFoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
