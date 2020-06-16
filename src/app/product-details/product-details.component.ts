import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

    productId: string;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id');
  });

}
}
