# HTML5 Placeholder jQuery Plugin

This plugin was based on a code snippet by [Paul Irish](http://paulirish.com/), featured in [jQuery 1.4 Hawtness #1](http://jquery14.com/day-05/jquery-1-4-hawtness-1-with-paul-irish). I added some functionality, did some optimizations here and there, and made a plugin out of it.

## Demo & Examples

[http://mathiasbynens.be/demo/placeholder](http://mathiasbynens.be/demo/placeholder)

## Example Usage

### HTML

    <input type="text" name="name" placeholder="e.g. John Doe">
    <input type="email" name="email" placeholder="e.g. address@example.ext">
    <input type="url" name="url" placeholder="e.g. http://mathiasbynens.be/">
    <input type="tel" name="tel" placeholder="e.g. +32 472 77 69 88">
    <input type="search" name="search" placeholder="Search this site…">
    <textarea name="message" placeholder="Your message goes here"></textarea>

### jQuery

    $('input, textarea').placeholder();

### CSS

The plugin automatically adds `class="placeholder"` to the elements who are currently showing their placeholder text. You can use this to style placeholder text differently:

    input, textarea { color: #000; }
    .placeholder { color: #aaa; }

## Notes

* The plugin automatically checks if the browser supports the HTML5 placeholder attribute for inputs natively. If this is the case, the plugin won’t do anything.
* The plugin will ignore password inputs.

## Credits

Kudos to [Paul Irish](http://paulirish.com/) for his snippet and everyone from [#jquery](http://webchat.freenode.net/?channels=jquery) for the tips and ideas.

_– [Mathias](http://mathiasbynens.be/)_