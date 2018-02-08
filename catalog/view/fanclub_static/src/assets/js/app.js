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
      var colorVal = $(this).attr('value');
      //console.log(colorVal);
      var swatch = {17:'black',32:'red',96:'ornage'};
      console.log(swatch[colorVal]);
      //console.log(colorVal);
      // var imgId = '#i' + inputVal;
      // //console.log(imgId);
      // var newImg = $(imgId).prop('outerHTML');
      // //console.log(newImg);
      // $('.thumbnails').children('li').children('a').html(newImg);
      // $(imgId).remove();
      // $(imgId).slideDown();
      //console.log(vintageImg);
      //$(vintageImg).replaceWith(newImg);
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
