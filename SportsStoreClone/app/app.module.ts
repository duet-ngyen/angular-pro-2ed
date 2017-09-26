import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { BookModule } from "./book/book.module";

@NgModule({
  imports: [BrowserModule, StoreModule, BookModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule{ }
