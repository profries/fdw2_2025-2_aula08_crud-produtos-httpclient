import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardProdutos } from './list-card-produtos';

describe('ListCardProdutos', () => {
  let component: ListCardProdutos;
  let fixture: ComponentFixture<ListCardProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCardProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCardProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
