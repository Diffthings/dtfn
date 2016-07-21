# dtfn - diffthings footnotes
Some footnote-speech-bubble thing for your website.

![screenshot](https://github.com/Diffthings/dtfn/blob/master/Pic.png "a screenshot")

_(this is what's called a screenshot...)_




##Preconditions:
- Add the css to the head:
```html
	<link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/443195/dtfn_css.css" />
```


- Add the JS to the end of the body:
```html
	<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/443195/dtfn_js.js" type="text/javascript"></script>
```


- Also needed: Two "dummy-divs" that represent the actual bubble appearing on the page.
```html
	<div class="dtfn_bubble">
		<div class="dtfn_bubblecontent"></div>
	</div>
```

Add the dummy-div somewhere in the body of your page (e.g. at the end...).




##How to add notes:
Add a the following span to your html whereever you want to add a note. Give it a number (must be a positive integer):
```html
	<span class="dtfn_footnote">1</span>
```


To add the content to the bubble (i.e. the actual note) add a div with two classnames somewhere on your page, like so:

```html
	<div class="dtfn_notecontent dtfn_note_1">Put note content here</div>
```
The integer at the end of **dtfn_note_** represents the note-number..

Within that div, you can add all kinds of html, including links, pictures, etc. 



##Live Example
Check out eigther the example file above (dtfn_example.html) or the one on [codepen](http://codepen.io/diffthings/pen/EyodQY).
