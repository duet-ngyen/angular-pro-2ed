import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
  selector: "store",
  moduleId: module.id,
  templateUrl: "store.component.html"
})

export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository, private cart: Cart, private router: Router){ }

  get products(): Product[]{
    let start = (this.selectedPage - 1) * this.productsPerPage;
    let end   = start + this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory).slice(start , end);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  get pageCount():number{
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage);
  }

  // get pageNumbers(): number[]{
  //   let totalPage = Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage));
  //   return totalPage.fill(0).map((x, i) => i + 1);
  // }

  addProductToCart(product: Product){
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}
