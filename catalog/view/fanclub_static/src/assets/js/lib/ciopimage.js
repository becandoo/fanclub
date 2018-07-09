import $ from "jquery";

window.$ = $;
window.jQuery = $;
global.$ = global.jQuery = $;

function ciopImage(ciopimage, ciopimagepopup) {
  var index = 0;
  if(!ciopimage ||  !ciopimagepopup) {
    // ciopimage = $('.ciopimage-thumb').find('img').attr('data-ciopsrc');
    // ciopimagepopup = $('.ciopimage-thumb').attr('data-ciophref');

    ciopimage = $('a[data-ciophref]').first().find('img').attr('data-ciopsrc');
    ciopimagepopup = $('a[data-ciophref]').attr('data-ciophref');
  }

  $('a[data-ciophref]').attr('href',ciopimagepopup);
  $('a[data-ciophref]').find('img').attr('src',ciopimage);

  if ($.fn.elevateZoom) {
    $('a[data-ciophref]').find('img').data('zoom-image',ciopimagepopup);
    $('a[data-ciophref]').find('img').attr('data-zoom-image',ciopimagepopup);
    $('a[data-ciophref]').find('img').elevateZoom('swaptheimage');
  }

  if(typeof Journal != 'undefined' && typeof Journal.changeProductImage != 'undefined') {
    Journal.changeProductImage(ciopimage, ciopimagepopup, index);
  }

  // reinitialize magnificpop so popup pic new image
  $('.thumbnails').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery: {
    enabled:true
    }
  });
}

$(document).ready(function() {

  if ($.fn.elevateZoom) {
    $('#image-additional-carousel a').on('click', function() {
      var zoom_image = $(this).attr('data-zoom-image');
      $('#image').data('zoom-image',zoom_image);
      $('#image').attr('data-zoom-image',zoom_image);
      $('#image').elevateZoom('swaptheimage');
    });
  }
  
  $('#product').delegate('select, input[type=\'radio\'], input[type=\'checkbox\']', 'change', function() 
  {

    var $this = $(this);
    var el = '';
    var eltype = '';
    var action = '';

    if(($this.attr("type")=="radio" || $this.attr("type")=="checkbox") && $this.is("input") && $this.prop("checked")) {
      
       el = $this;
       eltype = $this.attr("type");
       action = 'click';
    } else if($this.is("select") && $this.val()) {
      el = $this.find("option:selected");
      eltype = 'select';
      action = 'click';
    } else {
      // check if there is any other radio/checkbox or select is selected
      
      $.each($('#product').find('select, input[type=\'radio\'], input[type=\'checkbox\']'), function() {

        var $thiss = $(this);
        if(($thiss.attr("type")=="radio" || $thiss.attr("type")=="checkbox")  && $thiss.is("input") && $thiss.prop("checked") ) {
          var ciopimage = $thiss.attr('data-ciopimage');
          if(ciopimage) {
            el = $thiss;
            eltype = $thiss.attr("type");
            action = 'refresh';
          }
        }

        if($thiss.is("select") && $thiss.val()) {
            var el1 = $thiss.find("option:selected");
            var ciopimage = el1.attr('data-ciopimage');
            if(ciopimage) {
              el = el1;
              eltype = 'select';
              action = 'refresh';
          }
        }

      });

    }

    var ciopimage = '', ciopimagepopup = '';
    if(el) {
      ciopimage = el.attr('data-ciopimage');
      ciopimagepopup = el.attr('data-ciopimagepopup');

      if(ciopimage) {
        ciopImage(ciopimage, ciopimagepopup);
      } else if(eltype != 'checkbox' && action == 'click') {
        ciopImage(ciopimage, ciopimagepopup);   
      }
    } else {
      ciopImage(ciopimage, ciopimagepopup);  
    }

  });
});