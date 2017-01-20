(function($) {

	QUnit.module('jQuery#placeholder');

	var test = QUnit.test;

	test('caches results of feature tests', function(assert) {
		assert.strictEqual(typeof $.fn.placeholder.input, 'boolean', '$.fn.placeholder.input');
		assert.strictEqual(typeof $.fn.placeholder.textarea, 'boolean', '$.fn.placeholder.textarea');
	});

	if ($.fn.placeholder.input && $.fn.placeholder.textarea) {
		return;
	}

	var testElement = function($el, assert) {

		var el = $el[0];
		var placeholder = el.getAttribute('placeholder');

		deepEqual($el.placeholder(), $el, 'should be chainable');

		assert.strictEqual(el.value, placeholder, 'should set `placeholder` text as `value`');
		assert.strictEqual($el.prop('value'), '', 'propHooks works properly');
		assert.strictEqual($el.val(), '', 'valHooks works properly');
		ok($el.hasClass('placeholder'), 'should have `placeholder` class');

		// test on focus
		$el.focus();
		assert.strictEqual(el.value, '', '`value` should be the empty string on focus');
		assert.strictEqual($el.prop('value'), '', 'propHooks works properly');
		assert.strictEqual($el.val(), '', 'valHooks works properly');
		ok(!$el.hasClass('placeholder'), 'should not have `placeholder` class on focus');

		// and unfocus (blur) again
		$el.blur();

		assert.strictEqual(el.value, placeholder, 'should set `placeholder` text as `value`');
		assert.strictEqual($el.prop('value'), '', 'propHooks works properly');
		assert.strictEqual($el.val(), '', 'valHooks works properly');
		ok($el.hasClass('placeholder'), 'should have `placeholder` class');

		// change the value
		$el.val('lorem ipsum');
		assert.strictEqual($el.prop('value'), 'lorem ipsum', '`$el.val(string)` should change the `value` property');
		assert.strictEqual(el.value, 'lorem ipsum', '`$el.val(string)` should change the `value` attribute');
		ok(!$el.hasClass('placeholder'), '`$el.val(string)` should remove `placeholder` class');

		// and clear it again
		$el.val('');
		assert.strictEqual($el.prop('value'), '', '`$el.val("")` should change the `value` property');
		assert.strictEqual(el.value, placeholder, '`$el.val("")` should change the `value` attribute');
		ok($el.hasClass('placeholder'), '`$el.val("")` should re-enable `placeholder` class');

		// make sure the placeholder property works as expected.
		assert.strictEqual($el.prop('placeholder'), placeholder, '$el.prop(`placeholder`) should return the placeholder value');
		$el.prop('placeholder', 'new placeholder');
		assert.strictEqual($el.prop('placeholder'), 'new placeholder', '$el.prop(`placeholder`, <string>) should set the placeholder value');
		assert.strictEqual($el.value, 'new placeholder', '$el.prop(`placeholder`, <string>) should update the displayed placeholder value');
		$el.prop('placeholder', placeholder);
	};

	test('emulates placeholder for <input type=text>', function(assert) {
		testElement( assert, $('#input-type-text') );
	});

	test('emulates placeholder for <input type=search>', function(assert) {
		testElement( assert, $('#input-type-search') );
	});

	test('emulates placeholder for <input type=email>', function(assert) {
		testElement( assert, $('#input-type-email') );
	});

	test('emulates placeholder for <input type=url>', function(assert) {
		testElement( assert, $('#input-type-url') );
	});

	test('emulates placeholder for <input type=tel>', function(assert) {
		testElement( assert, $('#input-type-tel') );
	});

	test('emulates placeholder for <input type=tel>', function(assert) {
		testElement( assert, $('#input-type-tel') );
	});

	test('emulates placeholder for <input type=password>', function(assert) {
		var selector = '#input-type-password';

		var $el = $(selector);
		var el = $el[0];

		var placeholder = el.getAttribute('placeholder');

		assert.strictEqual($el.placeholder(), $el, 'should be chainable');

		// Re-select the element, as it gets replaced by another one in some browsers
		$el = $(selector);
		el = $el[0];

		assert.strictEqual(el.value, placeholder, 'should set `placeholder` text as `value`');
		assert.strictEqual($el.prop('value'), '', 'propHooks works properly');
		assert.strictEqual($el.val(), '', 'valHooks works properly');
		ok($el.hasClass('placeholder'), 'should have `placeholder` class');

		// test on focus
		$el.focus();

		// Re-select the element, as it gets replaced by another one in some browsers
		$el = $(selector);
		el = $el[0];

		assert.strictEqual(el.value, '', '`value` should be the empty string on focus');
		assert.strictEqual($el.prop('value'), '', 'propHooks works properly');
		assert.strictEqual($el.val(), '', 'valHooks works properly');
		ok(!$el.hasClass('placeholder'), 'should not have `placeholder` class on focus');

		// and unfocus (blur) again
		$el.blur();

		// Re-select the element, as it gets replaced by another one in some browsers
		$el = $(selector);
		el = $el[0];

		assert.strictEqual(el.value, placeholder, 'should set `placeholder` text as `value`');
		assert.strictEqual($el.prop('value'), '', 'propHooks works properly');
		assert.strictEqual($el.val(), '', 'valHooks works properly');
		ok($el.hasClass('placeholder'), 'should have `placeholder` class');

	});

	test('emulates placeholder for <textarea></textarea>', function(assert) {
		testElement( assert, $('#textarea') );
	});

}(jQuery));
