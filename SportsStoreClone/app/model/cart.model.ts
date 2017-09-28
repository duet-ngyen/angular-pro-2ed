import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()

export class Cart {
  public lines: CartLine[] = [];
  public itemCount:number = 0;
  public totalPrice:number = 0;

  addLine(product: Product, quantity:number = 1){
    let line = this.lines.find( line => line.product.id == product.id);
    if (line != undefined){
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity))
    }

    this.recalculate();
  }

  private recalculate(){
    this.itemCount = 0;
    this.totalPrice = 0;

    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.totalPrice += (l.quantity * l.product.price);
    })
  }
}

export class CartLine{
  constructor(public product: Product, public quantity: number){ }
}
