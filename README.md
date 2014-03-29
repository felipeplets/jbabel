jbabel
======
It is a jQuery extension that allow you to translate web pages using JavaScript in an easy and friendly way.

Hello world
===========
To start using jbabel you shall create a *i18n* folder in your application and create a JSON file named *i18n.en.json* with the following content:
```javascript
{'HELLOWORLD':'Hello world!'}
```
Now creates your .html file that loads jquery and jbabel libraries and add the following content in the body:
```html
<h1 data-i18n="HELLOWORLD"></h1>
```
Done, you are ready with jbabel!

Language Switcher
=================

In order to switch the language you just need to create a file i18n.LANGUAGE_CODE.json (e.g.: i18n.pt.json) and add the tag attribute data-i18n-switcher to the element that will be responsible for switching the language:
```html
<a href="javascript: void(0);" data-i18n-switcher="pt" data-i18n="PT"></a>
```
Not that the language is also translated using the data-i18n attribute.

Cordova friendly
================
It is very easy to translate Cordova apps using jababel. 

Indexable
=========
jbabel pages are indexable, soon I will release a howto to teach how to build it. 


Why/When to translate pages in client side?
===========================================
If you are building an web app using RIA and Ajax you probably don't want to reload the page just because the user changed the language, in this case you can use jBabel.

Sites using jbabel
==================
* [plets.com.br](http://plets.com.br)
* [talks.appstartup.me](http://talks.appstartup.me)
* UbiHealth cordova app (soon the link for the app)
