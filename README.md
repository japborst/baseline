Baseline
========

I created a starting point for [Mixture](http://mixture.io) to be run in simple mode with a partner server. This is usually done using XAMPP, or alike. In addition to this, my basic Sass set-up (folders and base layout stuff) is included as well. This will change over time, yet personally it provides a very useful way to start off with a new project.

##CSS
The Sass file `global.scss` combines all the partials and creates one master file, if you like. Globbing is enabled by default in the Mixture's settings (`mixture.json`), however disabling this will cause `global.scss` failing to compile.

##JS
As I use picturefill and smoothscroll alot, I have included this too. However, if it's no need this will deleted after creating the project. It does, though, show the use of Mixture's `.mix` files, which imports multiple JS files, combines and minifies them.