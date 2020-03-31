// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript/jQuery
// prendo lo zip che dopo vi allego e senza toccare l’HTML faccio funzionare l’hamburger menù;
// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

// non so dove mettere il click per far apparire l'hamburger nav, metto su header right direttamente

$(".header-right").click( function (){
  $(".hamburger-menu").show()
}
)
$(".close").click( function (){
  $(".hamburger-menu").hide()
}
)
