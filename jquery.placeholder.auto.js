/*!
 * HTML5 Placeholder jQuery Plugin v1.3 -> Auto
 * @link http://github.com/mathiasbynens/Placeholder-jQuery-Plugin
 * @author Mathias Bynens <http://mathiasbynens.be/>
 * 
 * @gpupo set the autoload and undefined placeholder bug. Just include the script. 25/09/2010
 */
;(function($) {
 $.fn.placeholder = function() {
  // Quit if there’s support for HTML5 placeholder
  if (this[0] && 'placeholder' in document.createElement('input')) {
   // Allow chaining
   return this;
  }
  function args($elem) {
   // Get attributes string from outerHTML
   var html = $('<div>').append($elem.clone()).html().replace(/<(\w+)\s+(.*)>/, '$2'),
       attr,
       attrs = {};
   while ((attr = html.match(/\s*([\w-]+)=("[^"]*"|'[^']*'|\w+)/))) {
    // Assign attribute to dictionary, but remove quotes first
    attrs[attr[1]] = attr[2].replace(/^(["'])(.*?)\1$/, '$2');
    html = html.replace(attr[0], '');
   }
   return attrs;
  }
  function onFocus() {
   var $input = $(this);
   if ($input.val() === $input.attr('placeholder') && $input.hasClass('placeholder')) {
    if ($input.data('placeholder-password')) {
     $input.next().show().focus().end().remove();
    } else {
     $input.val('').removeClass('placeholder');
    }
   }
  }
  // Made this a function, because we actually need it on two different occasions:
  // 1) Once when the DOM is loaded;
  // 2) Once every time the focusout() is triggered.
  function setPlaceholder($elem) {
   var $replacement;
   if ($elem.val() === '' || $elem.val() === $elem.attr('placeholder')) {
    if ($elem.is(':password')) {
     try {
      $replacement = $elem.clone().attr({ type: 'text' });
     } catch(e) {
      $replacement = $('<input>', $.extend(args($elem), { type: 'text' }));
     }
     $replacement.data('placeholder-password', true).focus(onFocus);
     $elem.hide().before($replacement);
     $elem = $replacement;
    }
    $elem.addClass('placeholder').val($elem.attr('placeholder'));
   } else {
    $elem.removeClass('placeholder');
   }
  }
  // Look for forms with inputs and/or textareas with a placeholder attribute in them
  $('form:has([placeholder])').submit(function() {
   // Clear the placeholder values so they don’t get submitted
   $('.placeholder', this).val('');
  });
  // Clear placeholder values upon page reload
  $(window).unload(function() {
   $('.placeholder').val('');
  });
  // Yes, .each() — in case .placeholder() is called on several elements, which is very likely, e.g. $('input').placeholder();
  return this.each(function() {
   var $input = $(this);
   // Quit if the current element is not an input/textarea at all ** or not set a placeholder
   if (!$input.is(':input') || !$input.attr('placeholder') ) {
    return;
   }

   setPlaceholder($input);
   $input.focus(onFocus).blur(function() {
    setPlaceholder($input);
   });
  });
 };
})(jQuery);


$(document).ready(function() {
  $('input, textarea').placeholder();
});

