jbabel
======
It is a jQuery extension that allow you to translate web pages using JavaScript in an easy and friendly way.

Hello world
===========
To start using jbabel you shall create a *i18n* folder in your application and create a JSON file named *i18n.en.json* with the following content:

```javascript
{'HELLOWORLD':'Hello world!'}
```

Now creates your .html file that loads jquery and jbabel libraries and add the following content in he <body>:

```html
<h1 data-i18n="HELLOWORLD"></h1>
```

Done, you are ready with jbabel!

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
