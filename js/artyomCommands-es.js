/**
 * artyom.js can't do anything without commands , this file will set up
 * artyom for it's final use
 * 
 * with artyom.hey() say "show commands"
 *                       "mostrar comandos"
 * to see all available commands in a view [default and .extend commands]
 * 
 * 
 * @Artyom AI.
 * @dependencies [artyom.js]
 * @copyright 2015, Colombia.
 * @author Carlos Delgado
 * @param {type} window
 * @Description Part Of Artyom JS Core
 * @returns {[
 * 
 * ]}
 */

(function(window){
    'use strict';
    
    var artyomCommands = [
        {
            indexes: ['hola','que tal','hola como estas','como esta','Cómo estás'],
            action : function(i){
                var forHowareyou = [
                    'Muy bien y no gracias a ti',
                    'No es de tu incumbencia'
                ];
                
                var forHello = [
                    "Holita",
                    "Hola que hace",
                    'Que honda, todo bien?'
                ];
                
                // var i = the index in the array of the given options.
                switch(i){
                    case 0:
                    case 1:
                        var frase = forHello[Math.floor(Math.random() * forHello.length)];
                        artyom.say(frase);
                    break;
                    case 2:
                    case 3:
                    case 4:
                        var frase = forHowareyou[Math.floor(Math.random() * forHowareyou.length)];
                        artyom.say(frase);
                    break;
                }
            }
        },
        {
            indexes: ["traducir * en inglés","traducir * en alemán"],
            smart:true,
            action : function(i,wildcard,sentence){
                switch(i){
                    case 0:
                        if(artyom.speechSupported()){
                            alertify.success("La traduccion se hará en una nueva ventama. Permita los PopUps para esta demostracion.");
                            artyom.say("Ciertamente no puedo hacer esto, pero Google si, prueba con esto",function(){
                                window.open("https://translate.google.com/?source=gtx_m#es/en/"+wildcard);
                            });
                        }else{
                            alertify.success("La traduccion se hará en una nueva ventama. Permita los PopUps para esta demostracion.");
                            window.open("https://translate.google.com/?source=gtx_m#en/es/"+wildcard);
                        }
                    break;
                    case 1:
                        if(artyom.speechSupported()){
                            alertify.success("La traduccion se hará en una nueva ventama. Permita los PopUps para esta demostracion.");
                            artyom.say("Ciertamente no puedo hacer esto, pero Google si, prueba con esto",function(){
                                window.open("https://translate.google.com/?source=gtx_m#es/de/"+wildcard);
                            });
                        }else{
                            alertify.success("La traduccion se hará en una nueva ventama. Permita los PopUps para esta demostracion.");
                            window.open("https://translate.google.com/?source=gtx_m#en/de/"+wildcard);
                        }
                    break;
                }
            }
        },
        {
            indexes: ["Pronunciate *"],
            smart:true,
            action : function(i,wildcard,sentence){
                artyom.say(wildcard);
            }
        },
        {
            indexes: ["Shut down yourself"],
            action : function(i,wildcard,sentence){
                artyom.fatality();
                alertify.success("Artyom is not active now. Because you turned off with your voice.");
            }
        },
        {
            indexes: ['search the weather in * please','search the weather in *'],
            smart:true,
            action : function(i,wildcard,sentence){
                $.getJSON( "http://api.openweathermap.org/data/2.5/weather?q="+ wildcard.trim() +"&units=metric&lang=en", function( data ) {
                    if(data.cod === "404"){
                        artyom.say("I can't find the weather of " + wildcard);
                        alertify.error(wildcard + " Doesn't exist maybe ?");
                    }else{
                        var num = data.main.temp;
                        var n = num.toFixed(2);
                        artyom.say("The weather in " + wildcard + " is " + data.weather[0].description);
                        alertify.success("Description: "+ data.weather[0].description+"<br>Actual temperature : " + n + " Celcius"+"<br> Open the console and see the example for more information about this function");
                    }
                });
            }
        }
    ];
    
    
    /**
     * Artyom Commands Functions
     * 
     * @returns {artyomCommands_L13.ArtyomCommands.artyCommands}
     */
    function ArtyomCommands(){
        var artyCommands = {}; 
        
        /**
         * 
         * @param {type} lang
         * @returns {Array}
         */
        artyCommands.getCommands = function(lang){
            return artyomCommands;
        };
        
        
        /**
         * Create explicits commands in other views where this commands is not
         * needed all the time
         * 
         * @param {type} commands
         * @returns {Array}
         */
        artyCommands.extend = function(commands){
            commands.forEach(function(comando) {
                artyomCommands.push(comando);
            });
            
            return artyomCommands;
        };
        
        return artyCommands;
    }
    
    if(typeof(artyCommands) === 'undefined'){
        window.artyCommands = ArtyomCommands();
    }
})(window);