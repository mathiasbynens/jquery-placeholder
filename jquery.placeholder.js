/*!
 * HTML5 Placeholder jQuery Plugin
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
  // Submit handler on all forms containing input[placeholder]
  // Needs to be via .click()
  $('form:has([placeholder]) input[type=submit]').click(function() {
  // if ($(this).has('.placeholder') never returns false here — WTF?
   if ($(this.form).find('.placeholder').length) {
    $(this.form).find('.placeholder:first').val('').focus().removeClass('placeholder');
    return false;
   };
  });
  // Yes, .each() — in case .placeholder() is called on several elements, which is very likely, e.g. $('input').placeholder();
  return $(this).each(function() {
   var $input = $(this);
   // Quit if the current element is a password input, or not an input at all
   if ($input.is(':password') || !$input.is(':input')) {
    return;
   };
   setPlaceholder($input);
   $input.focusin(function() {
    if ($input.val() === $input.attr('placeholder')) {
     $input.val('').removeClass('placeholder');
    };
   }).focusout(function() {
    setPlaceholder($input);
   });
  });
 };
})(jQuery);