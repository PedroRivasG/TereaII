import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnoComponent } from './listar-uno.component';

describe('ListarUnoComponent', () => {
  let component: ListarUnoComponent;
  let fixture: ComponentFixture<ListarUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
