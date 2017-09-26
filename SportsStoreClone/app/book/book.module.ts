import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { BookComponent } from "./book.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [BookComponent],
    exports: [BookComponent]
})
export class BookModule { }
