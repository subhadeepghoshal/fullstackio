import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    ProductListComponent,
    ProductRowComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
