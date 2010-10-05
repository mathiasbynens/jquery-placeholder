/*!
 * HTML5 Placeholder jQuery Plugin v1.5
 * @link http://github.com/mathiasbynens/Placeholder-jQuery-Plugin
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
;(function($) {

	function args($elem) {
		// Get attributes string from outerHTML
		var html = $('<div>').append($elem.clone()).html().replace(/<(\w+)\s+(.*)>/, '$2'),
		    attr,
		    attrs = {};
		while ((attr = html.match(/\s*([\w\-]+)=("[^"]*"|'[^']*'|\w+)/))) {
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
	function setPlaceholder(elem) {
		var $replacement,
		    $elem = $(this);
		if ($elem.val() === '' || $elem.val() === $elem.attr('placeholder')) {
			if ($elem.is(':password')) {
				try {
					$replacement = $elem.clone().attr({ type: 'text' });
				} catch(e) {
					$replacement = $('<input>', $.extend(args($elem), { type: 'text' }));
				}
				$replacement.data('placeholder-password', true).bind('focus.placeholder', onFocus);
				$elem.hide().before($replacement);
				$elem = $replacement;
			}
			$elem.addClass('placeholder').val($elem.attr('placeholder'));
		} else {
			$elem.removeClass('placeholder');
		}
	}

	// Look for forms
	$('form').bind('submit.placeholder', function() {
		// Clear the placeholder values so they don’t get submitted
		$('.placeholder', this).val('');
	});

	// Clear placeholder values upon page reload
	$(window).bind('unload.placeholder', function() {
		$('.placeholder').val('');
	});

	if ('placeholder' in document.createElement('input')) {
		$.fn.placeholder = function() {
			return this;
		};
	} else {
		$.fn.placeholder = function() {
			return this.filter(':input[placeholder]').bind({
				'focus.placeholder': onFocus,
				'blur.placeholder': setPlaceholder
			}).trigger('blur.placeholder').end();
		};
	}

})(jQuery);