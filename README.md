# HTML5 Placeholder jQuery Plugin

This plugin was based on a code snippet by [Paul Irish](http://paulirish.com/), featured in [jQuery 1.4 Hawtness #1](http://jquery14.com/day-05/jquery-1-4-hawtness-1-with-paul-irish). I added some functionality, did some optimizations here and there, and made a plugin out of it.

## Demo & Examples

[http://mathiasbynens.be/examples/placeholder](http://mathiasbynens.be/examples/placeholder)

## Example Usage

### HTML

    <input type="text" name="foo" placeholder="Enter some text here">
    <input type="email" name="bar" placeholder="Enter your email address">
    <input type="search" name="baz" placeholder="Search this site…">
    <input type="url" name="wtf" placeholder="Enter your URL">
    <input type="tel" name="omg" placeholder="Enter your phone number">

### jQuery

    $('input').placeholder();

## Notes

The plugin automatically checks if the browser supports the HTML5 placeholder attribute for inputs natively. If this is the case, the plugin won’t do anything.
The plugin will ignore password inputs.

## Credits

Kudos to [Paul Irish](http://paulirish.com/) for his snippet and everyone from [#jquery](http://webchat.freenode.net/?channels=jquery) for the tips and ideas.

_– [Mathias](http://mathiasbynens.be/)_