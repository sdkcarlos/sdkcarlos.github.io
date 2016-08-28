(function(window){'use strict';
    
    var artyomCommands = [
        {
            description:"Es de buena educación saludar gente <i class='icon-emoji'></i>",
            indexes: ['hola como estás','como estás','hola'],
            action : function(i){
                var forHowareyou = [
                    'Gracias al cielo vivo, sigo joven y sana. En esta economía, que más puedo exigir?',
                    'Fresco como una lechuga',
                    'Estoy tan feliz hoy! Dificilmente me puedo controlar de bailar',
                    'Segun lo que se, estoy muy bien.',
                    "No me puedo quejar. Lo he intentado pero nadie me presta atención."
                ];
                
                var forHello = [
                    "Hey que pedo guey",
                    "Hola, hay alguien en casa?",
                    'Quien es y que vende'
                ];
                
                // var i = the index in the array of the given options.
                switch(i){
                    case 0:
                    case 1:
                        var frase = forHowareyou[Math.floor(Math.random() * forHowareyou.length)];
                        artyom.say(frase);
                    break;
                    case 2:
                        var frase = forHello[Math.floor(Math.random() * forHello.length)];
                        artyom.say(frase);
                    break;
                }
            }
        },
        {
            indexes: ["traducir * en Ingles","Traducir * en alemán"],
            smart:true,
            action : function(i,wildcard,sentence){
                switch(i){
                    case 0:
                        if(artyom.speechSupported()){
                            alert("La traducción se abrirá en una nueva ventana, permite el uso de POPUPS.");
                            artyom.say("No puedo hacerlo solo. Pero, google si. mira esto",{
                                onEnd:function(){
                                    window.open("https://translate.google.com/?source=gtx_m#en/es/"+wildcard);
                                }
                            });
                        }else{
                            alert("Translation detected,this will open a new window. Allow the popups for the demo please.");
                            window.open("https://translate.google.com/?source=gtx_m#es/en/"+wildcard);
                        }
                    break;
                    case 1:
                        if(artyom.speechSupported()){
                            alert("La traducción se abrirá en una nueva ventana, permite el uso de POPUPS.");
                            artyom.say("No puedo hacerlo solo. Pero, google si. mira esto",{
                                onEnd : function(){
                                    window.open("https://translate.google.com/?source=gtx_m#en/de/"+wildcard);
                                }
                            });
                        }else{
                            alert("Translation detected,this will open a new window. Allow the popups for the demo please.");
                            window.open("https://translate.google.com/?source=gtx_m#es/de/"+wildcard);
                        }
                    break;
                }
            }
        },
        {
            description: "Pronuncia todo lo que diga despues de que diga <b>'Pronunciar'</b>, Ejemplo 'Pronunciar hola que hace'",
            indexes: ["Pronunciar *"],
            smart:true,
            action : function(i,wildcard,sentence){
                artyom.say(wildcard);
            }
        },
        {
            description: "Apagar artyom con tu voz",
            indexes: ["Apagate"],
            action : function(i,wildcard,sentence){
                artyom.fatality();
            }
        },
        {
            description:'Sin comentarios ._.',
            indexes:['Te amo','Te amo mucho','me amas'],
            action:function(i){
                var snd = new Audio('https://github.com/sdkcarlos/sdkcarlos.github.io/raw/master/sites/artyom-playground-resources/Ha%20GAY!!!.mp3');

                snd.addEventListener("ended",function(){
                    switch(i){
                        case 0:
                        case 1:
                            artyom.sayRandom([
                                "Oh cielos, por favor detente. Nisiquiera te conozco. Quieres una cita o algo?",
                                "Esta es la quinta vez que escucho eso hoy, soy fabuloso",
                                "Espero que no le digas eso a todo mundo",
                                "Pero, si apenas me conoces"
                            ]);
                        break;
                        case 2:
                            artyom.sayRandom([
                                "Hay muchas maneras de decir esto, pero lo resumire con un gran no.",
                                "Nisiquiera has tocado mi código. Quieres que puedo querer a alguien como tu?",
                                "Yo me amo"
                            ]);
                        break;
                    }
                });

                snd.play();
            }
        },
        {
            description:"Navega entre zonas del documento (navegar a descargar, navegar a github etc ..)",
            indexes: ['navegar a *'],
            smart:true,
            action: function(i,wildcard){
                wildcard = wildcard || "";
                
                switch(wildcard.toLowerCase()){
                    case "inicializacion":
                    case "inicialización":
                        sdkcarlos.scrollTo("#section-initialize");
                    break;
                    case "descargas":
                        sdkcarlos.scrollTo("#section-download");
                    break;
                    case "comandos de voz":
                        sdkcarlos.scrollTo("#section-voicecommands");
                    break;
                    case "otras funciones":
                        sdkcarlos.scrollTo("#section-otherfeatures");
                    break;
                    case "sintesis de texto":
                        sdkcarlos.scrollTo("#section-speechapi");
                    break;
                    case "github":
                        window.location.href = "https://github.com/sdkcarlos/artyom.js";
                    break;
                    default:
                        console.warn("Location "+wildcard+" has been not saved.");
                    break;
                }
                console.log(i,wildcard);
            }
        }
    ];
    //Updated to artyom v 0.6
    artyom.addCommands(artyomCommands);
})(window);