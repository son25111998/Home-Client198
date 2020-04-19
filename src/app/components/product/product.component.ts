import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    $('.cloud-zoom-gallery').click(function () {
      $('#zoom-btn').attr('href', this.href);
    });
    const doSliderMoreview = () => {
      var owl = $("ul.em-moreviews-slider");
      if (owl.length) {
        owl.owlCarousel({
          // Navigation
          navigation: true,
          navigationText: ["Previous", "Next"],
          pagination: false,
          paginationNumbers: false,
          // Responsive
          responsive: true,
          items: 7,
          /*items above 1200px browser width*/
          itemsDesktop: [1200, 4],
          /*//items between 1199px and 981px*/
          itemsDesktopSmall: [992, 7],
          itemsTablet: [768, 3],
          itemsMobile: [480, 2],
          // CSS Styles
          baseClass: "owl-carousel",
          theme: "owl-theme",
          transitionStyle: false,
          addClassActive: true,
        });
      }
    }


    $(window).load(function () {
      // if (!isPhone) {
      //   $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
      // }
      doSliderMoreview();
    });
  }

  changeQty(increase): void {
    var qty = parseInt($('#qty').val());
    if (!isNaN(qty)) {
      console.log(qty)
      qty = increase ? qty + 1 : (qty > 1 ? qty - 1 : 1);
      $('#qty').val(qty);
    }
  }

}
