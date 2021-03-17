$.fn.meuPlugin = function(options) {
    //Plug-in espera por parametrização da cor a ser
    //pintada. Caso não seja definida, pinta de amarelo
    //VERSÃO MELHORADA, trata outros parâmetros também.
    var defaults = {
      'corDeFundo' : 'yellow'
    };
    var settings = $.extend( {}, defaults, options );
    this.css({ backgroundColor: settings.corDeFundo });
};

$(document).ready(function() {
    //Chamada do plug-in passando parâmetro
    $("input").meuPlugin({corDeFundo: "red"});
});

/* 
$.fn.meuPlugin = function(options) {
    //Tratamento de parâmetros
    var defaults = {  'corDeFundo' : 'yellow'  };
    var settings = $.extend( {}, defaults, options );
    this.css({ backgroundColor: settings.corDeFundo });
    //Resolve a questão do cascateamento de chamadas de método.
    return this;
};

$(document).ready(function() {
    //Chamada do plug-in passando parâmetro
    //com métodos em cascata
    $("input").meuPlugin({corDeFundo: "red"}).hide();
});
*/
