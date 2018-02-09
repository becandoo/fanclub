import $ from "jquery";
import Popper from "popper.js";
import moment from 'moment';
import eonosdandatetimepicker from 'eonasdan-bootstrap-datetimepicker';
import datepicker from 'bootstrap-datepicker';

window.$ = $;
window.jQuery = $;
global.$ = global.jQuery = $;
window.moment = moment;

import Bootstrap from "bootstrap";
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import './lib/magnific-popup.js';
import './lib/engraving.js';
import './lib/custom.js';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;

//set datepicker value for future use when replacing datetimepicker function call
//$('.datepicker').attr('value', today);

$("document").ready(function() {
  $('input[name=option_227]').change(function () {
      var bottleSize = '';
      var productTitle = $('#productTitle').text();
      //console.log(productTitle);
      if (productTitle == 'FIFTY/FIFTY BOTTLE 12oz.') {
        bottleSize = '12oz';
      }else if (productTitle == 'FIFTY/FIFTY BOTTLE 18oz.') {
        bottleSize = '18oz';
      }else if (productTitle == 'FIFTY/FIFTY BOTTLE 25oz.') {
        bottleSize = '25oz';
      }else if (productTitle == 'FIFTY/FIFTY BOTTLE 34oz.') {
        bottleSize = '34oz';
      }else if (productTitle == 'FIFTY/FIFTY BOTTLE 40oz.') {
        bottleSize = '40oz';
      }else if (productTitle == 'FIFTY/FIFTY GROWLER 64oz.') {
        bottleSize = '64oz';
      }else if (productTitle == 'FIFTY/FIFTY WINE GROWLER 25oz.') {
        bottleSize = '25wine';
      }
      bottleSize = '34oz';
      //console.log(bottleSize);
      var bottleSizes = {'12oz': '12oz-flip-', '18oz':'18oz-3_finger-','25oz': '25oz-2_finger-','34oz':'34oz_3_finger-','40oz': '40oz-3finger-','64oz':'64oz-growler-','25wine':'25oz-wine-growler-',};
      var bottleUrl = bottleSizes[bottleSize];
      //console.log(bottleUrl);
      var colorVal = $(this).attr('value');
      //console.log(colorVal);
      var colorOption = swatch[colorVal];
      //console.log(colorVal + ': ' + colorOption);
      var newImgSrc = `http://127.0.0.1:8000/edsa-fanclub/image/catalog/products/${bottleUrl}${colorOption}.png`;
      //console.log(newImgSrc);

      $('#mainImg').attr('src', newImgSrc);
      $('#mainImgLink').attr('href', newImgSrc);
  });
  $('.carousel').carousel({
    interval: false
  });

  function replaceOffsets(offsetColumns) {    
      $(".col-sm-offset-" + offsetColumns).each(function(i, el) {
        $(this).removeClass("col-sm-offset-" + offsetColumns);
        $(this).addClass("offset-sm-" + offsetColumns);
      });
      $(".col-md-offset-" + offsetColumns).each(function(i, el) {
        $(this).removeClass("col-sm-offset-" + offsetColumns);
        $(this).addClass("offset-sm-" + offsetColumns);
      });
      $(".col-lg-offset-" + offsetColumns).each(function(i, el) {
        $(this).removeClass("col-sm-offset-" + offsetColumns);
        $(this).addClass("offset-sm-" + offsetColumns);
      });
    };
    
    $('.datepicker').datepicker({
      //set options  
    });
      for (var i = 1; i < 13; i++) {
        replaceOffsets(i);
      };
    $('.thumbnails').magnificPopup({
        type:'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});
