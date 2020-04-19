import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let EM = {} as any;
    if (typeof EM == 'undefined') EM = {};
    if (typeof EM.SETTING == 'undefined') EM.SETTING = {};

    const setColumnCountGridMode = () => {
      var wWin = $(window).width();
      if (EM.SETTING.DISABLE_RESPONSIVE == 1) {
        var sDesktop = 'emcatalog-desktop-';
        var sDesktopSmall = 'emcatalog-desktop-small-';
        var sTablet = 'emcatalog-tablet-';
        var sMobile = 'emcatalog-mobile-';
        var sGrid = $('#em-grid-mode');
        if (wWin > 1200) {
          sGrid.removeClass().addClass(sDesktop + '4');
        } else {
          if (wWin <= 1200 && wWin > 768) {
            sGrid.removeClass().addClass(sDesktopSmall + '3');
          } else {
            if (wWin <= 768 && wWin > 480) {
              sGrid.removeClass().addClass(sTablet + '3');
            } else {
              sGrid.removeClass().addClass(sMobile + '2');
            }
          }
        }
      } else {
        var sDesktop = 'emcatalog-desktop-';
        var sGrid = $('#em-grid-mode');
        sGrid.removeClass().addClass(sDesktop + '4');
      }
    };


    //Ready Function
    $(document).ready(function () {

      /* Price slider Activation */
      var currencies = "$";
      var toolbar_status = "1";
      var rate = "1";
      var min = "88" as any;
      min = Number(min);
      var max = "721" as any;
      max = Number(max);
      var currentMinPrice = "88" as any;
      currentMinPrice = Number(currentMinPrice);
      var currentMaxPrice = "721" as any;
      //alert('min: '+min+'--max: '+ max+ 'currentMin: '+currentMinPrice);
      currentMaxPrice = Number(currentMaxPrice);
      var params = "";
      var tax_min = "0";
      var tax_max = "0";
      params = $.trim(params);
      //slider
      $("#slider-range").slider({
        range: true,
        min: min,
        max: max,
        values: [currentMinPrice, currentMaxPrice],
        slide: function (event, ui) {
          console.log(ui.values[0])
          $('#from-val > span').text('$' + ui.values[0].toFixed(2));
          $('#to-val > span').text('$' + ui.values[1].toFixed(2));
        },
        stop: function (event, ui) {

        }
      });

      $('#from-val > span').text('$' + $("#slider-range").slider("values", 0).toFixed(2));
      $('#to-val > span').text('$' + $("#slider-range").slider("values", 1).toFixed(2));

      $('#slider-range a:first').addClass('first_item');
      $('#slider-range a:last').addClass('last_item');

      setColumnCountGridMode();
    });
    $(window).resize($.throttle(300, function () {
      setColumnCountGridMode();
    }));
  }

}
