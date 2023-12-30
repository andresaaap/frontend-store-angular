import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCartComponent } from './product-list-cart.component';

describe('ProductListCartComponent', () => {
  let component: ProductListCartComponent;
  let fixture: ComponentFixture<ProductListCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
