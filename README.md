# HTML5 Placeholder jQuery Plugin

## Demo & Examples

[http://mathiasbynens.be/demo/placeholder](http://mathiasbynens.be/demo/placeholder)

## Example Usage

### HTML

    <input type="text" name="name" placeholder="e.g. John Doe">
    <input type="email" name="email" placeholder="e.g. address@example.ext">
    <input type="url" name="url" placeholder="e.g. http://mathiasbynens.be/">
    <input type="tel" name="tel" placeholder="e.g. +32 472 77 69 88">
    <input type="password" name="password" placeholder="e.g. h4x0rpr00fz">
    <input type="search" name="search" placeholder="Search this site…">
    <textarea name="message" placeholder="Your message goes here"></textarea>

### jQuery

    $('input, textarea').placeholder();

### CSS

The plugin automatically adds `class="placeholder"` to the elements who are currently showing their placeholder text. You can use this to style placeholder text differently:

    input, textarea { color: #000; }
    .placeholder { color: #aaa; }

## Notes

* Works in all A-grade browsers, including IE6.
* The plugin automatically checks if the browser natively supports the HTML5 `placeholder` attribute for `input` and `textarea` elements. If this is the case, the plugin won’t do anything. If `@placeholder` is only supported for `input` elements, the plugin will only apply to `textarea`s. (This is the case for Safari 4.)

## Credits

Kudos to [Paul Irish](http://paulirish.com/) for his inspiring snippet in [jQuery 1.4 Hawtness #1](http://jquery14.com/day-05/jquery-1-4-hawtness-1-with-paul-irish) and everyone from [#jquery](http://webchat.freenode.net/?channels=jquery) for the tips, ideas and patches.

_– [Mathias](http://mathiasbynens.be/)_