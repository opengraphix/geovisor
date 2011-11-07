var interna =
{
  incrementado: false,
  
  cambiarTamanioLetra:function(tipo)
  {
    var ligas = $$('.info-contenido a');
    var h2 = $$('.noticias h2 a');
    var h3 = $$('.noticias h3 a');
    
    if(tipo == 'normal')
    {
      if(this.incrementado)
      {
        $('contenido-central').setStyle("font-size","1em");
        
        ligas.each(function(elemento)
        {
          elemento.setStyle("font-size","1em");
        });

        this.incrementado = false;
      }
    }
    else if(tipo == 'grande')
    {
      if(!this.incrementado)
      {
        $('contenido-central').setStyle("font-size","1.3em");

        ligas.each(function(elemento)
        {
          elemento.setStyle("font-size","1.1em");
        });
        
        this.incrementado = true;
      }
    }
  }
}