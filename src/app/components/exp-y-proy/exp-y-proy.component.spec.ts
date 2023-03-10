import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpYProyComponent } from './exp-y-proy.component';

describe('ExpYProyComponent', () => {
  let component: ExpYProyComponent;
  let fixture: ComponentFixture<ExpYProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpYProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpYProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
