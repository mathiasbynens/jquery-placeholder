/*!
 * HTML5 Placeholder jQuery Plugin v1.1
 * @link http://github.com/mathiasbynens/Placeholder-jQuery-Plugin
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
;(function($) {
 $.fn.placeholder = function() {
  // Quit if there’s support for HTML5 placeholder
  if (this[0] && 'placeholder' in document.createElement('input')) {
   // Allow chaining
   return this;
  };
  // Made this a function, because we actually need it on two different occasions:
  // 1) Once when the DOM is loaded;
  // 2) Once every time the focusout() is triggered.
  function setPlaceholder($elem) {
   if ($elem.val() === '' || $elem.val() === $elem.attr('placeholder')) {
    $elem.addClass('placeholder').val($elem.attr('placeholder'));
   } else {
    $elem.removeClass('placeholder');
   };
  };
  // This selector could be shortened to form:has([placeholder]) but that would be less efficient
  $('form:has(input[placeholder])').submit(function() {
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
   // Quit if the current element is a password input, or not an input at all
   if ($input.is(':password') || !$input.is(':input')) {
    return;
   };
   setPlaceholder($input);
   $input.focus(function() {
    if ($input.val() === $input.attr('placeholder')) {
     $input.val('').removeClass('placeholder');
    };
   }).blur(function() {
    setPlaceholder($input);
   });
  });
 };
})(jQuery);