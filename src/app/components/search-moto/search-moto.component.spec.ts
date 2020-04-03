import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMotoComponent } from './search-moto.component';

describe('SearchMotoComponent', () => {
  let component: SearchMotoComponent;
  let fixture: ComponentFixture<SearchMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
