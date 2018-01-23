//old way
function addClass(elements, myClass) {
    
      // if there are no elements, we're done
      if (!elements) { return; }
    
      // if we have a selector, get the chosen elements
      if (typeof(elements) === 'string') {
        elements = document.querySelectorAll('.'+elements);
        
      }
    
      // if we have a single DOM element, make it an array to simplify behavior
      else if (elements.tagName) { elements=[elements]; }

      // add class to all chosen elements
      for (var i=0; i<elements.length; i++) {
        
        // if class is not already found
        if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {
    
          // add class
          elements[i].className += ' ' + myClass;
        }
      }
    };

    //modern way (ie10+, chrome, edge, firefox, safari)
    function addClass(elements, myClass) {
        
        // get all elements that match our selector
        elements = document.querySelectorAll('.'+elements);
    
        // add class to all chosen elements
        for (var i=0; i<elements.length; i++) {
        elements[i].classList.add(myClass);
        }
    }

    function removeClass(elements, myClass) {
        
        // get all elements that match our selector
        elements = document.querySelectorAll('.'+selector);
    
        // remove class from all chosen elements
        for (var i=0; i<elements.length; i++) {
        elements[i].classList.remove(myClass);
        }
    }
    
    addClass('pull-right', 'float-right');
    addClass('pull-left', 'float-left');
    addClass('panel', 'card');
    addClass('panel-heading', 'card-header');
    addClass('panel-title', 'card-title');
    addClass('panel-body', 'card-body');
    addClass('panel-footer', 'card-footer');