# dtfn - diffthings footnotes
Some footnote-speech-bubble thing for your website.

![Demo Image](https://github.com/Diffthings/dtfn/blob/master/Pic.png?raw=true)




##Example
Check out eigther the example file above (dtfn_example.html) or the one on [codepen](http://codepen.io/diffthings/pen/EyodQY).



##Instructions

###Preconditions:
-Add the css to the head:
```html
	<link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/443195/dtfn_css.css" />
```

-Add the JS to the end of the body:
```html
	<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/443195/dtfn_js.js" type="text/javascript"></script>
```

-Also needed: a kind of "dummy-div" that represents the actual bubble appearing on the page. 
Whithin the bubble the actual content is represented by another dummy-div:
```html
	<div class="dtfn_bubble">
		<div class="dtfn_bubblecontent"></div>
	</div>
```

Add the dummy-div somewhere in the body of your page (e.g. the end...).



###Adding notes:
Add a <span> to your html whereever you want to add a note. Give it a number (must be a positive integer):
```html
	<span class="dtfn_footnote">1</span>
```


To add the content to the bubble (i.e. the actual note) add a div with two classnames, like so:
(whereas the integer at the end of **dtfn_note_** represents the note-number)
```html
	<div class="dtfn_notecontent dtfn_note_1">Note content</div>
```
Within that div, you can add all kinds of html, including links, pictures, etc. 

