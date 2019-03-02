# BlackSheep

A website with HTML, SASS (with BEM Name Selector and 7:1 Pattern) and Angular.

## Packages and Libraries

I used this npm package:

[Express](https://www.npmjs.com/package/express) for Heroku
[NGX Page Scroll](https://www.npmjs.com/package/ngx-page-scroll)
[Normalize CSS](http://necolas.github.io/normalize.css/) uninstall it if I'll use Bootstrap!

I used this libraries in index.html:

[Passive Events](https://unpkg.com/default-passive-events)

## Fonts

Se fai il test lighthouse e hai il problema @font-face ma tu usi Google Fonts: [Articolo](https://css-tricks.com/google-fonts-and-font-display/)

## Responsive Images

According to Google, anything above 2 seconds of download time will put off your users and discourage the crawlers from indexing your website.
[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
[Tool Images Generator](https://www.responsivebreakpoints.com/) e [Aggiungi testo immagine](https://addtext.com/)
[Compress Image](https://tinyjpg.com/)

Utilizzeremo sempre il tag image, ma abbiamo differenti immagini per differenti risoluzioni grazie all'attributo `srcset`. Se ho già scaricato la versione "Large" non scaricherò la versione "Small". Per fare le verifiche del corretto caricamento caricare la pagina in incognito o pulire la cache.
Abbiamo 3 immagini: small, medium e large. [Risorsa](https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433)
