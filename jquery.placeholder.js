/*!
 * HTML5 Placeholder jQuery Plugin v1.5
 * @link http://github.com/mathiasbynens/Placeholder-jQuery-Plugin
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
;(function($) {

	if ('placeholder' in document.createElement('input')) {
		$.fn.placeholder = function() {
			return this;
		};
		return;
	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {}, rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr){
			if( !rinlinejQuery.test(attr.name) ){
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function onFocus() {
		var $input = $(this);
		if ($input.val() === $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input.hide().next().show().focus();
			} else {
				$input.val('').removeClass('placeholder');
			}
		}
	}

	function setPlaceholder(elem) {
		var $replacement,
		    $input = $(this);
		if ($input.val() === '' || $input.val() === $input.attr('placeholder')) {
			if ($input.is(':password')) {
				if(!$input.data('placeholder-textinput')){
					try {
						$replacement = $input.clone().attr({ type: 'text' });
					} catch(e) {
						$replacement = $('<input>').attr( $.extend(args($input[0]), {type: 'text'}) );
					}
					$replacement
						.removeAttr('name')
						.data('placeholder-password', true)
						.bind('focus.placeholder', onFocus);
					$input
						.data('placeholder-textinput', $replacement)
						.before($replacement);
				}
				$input = $input.hide().prev().show();
			}
			$input.addClass('placeholder').val($input.attr('placeholder'));
		} else {
			$input.removeClass('placeholder');
		}
	}

	$(function() {
		// Look for forms
		$('form').bind('submit.placeholder', function() {
			// Clear the placeholder values so they don’t get submitted
			$('.placeholder', this).val('');
		});
	});

	// Clear placeholder values upon page reload
	$(window).bind('unload.placeholder', function() {
		$('.placeholder').val('');
	});

	$.fn.placeholder = function() {
		return this.filter(':input[placeholder]')
			.bind('focus.placeholder', onFocus)
			.bind('blur.placeholder' , setPlaceholder)
		.trigger('blur.placeholder').end();
	};

})(jQuery);