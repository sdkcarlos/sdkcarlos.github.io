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
            indexes: ['wie spät ist es'],
            action : function(i){
                var frases = [
                    "Na ja, Selbe Scheiße, Anderer Tag!",
                    "Du hättest mich mal gestern fragen sollen",
                    "Gut, und ich weiss nicht warum",
                    "wie Pamela Anderson nach einer neuen Brustvergrösserung",
                    "Finde ich ne originelle Frage, weiter so!",
                    "Endlich mal einer, der sich für mich interessiert. Schönen Tag noch",
                    "Schau die Nachrichten",
                    "Genauso wie beim letzten mal",
                    "Bevor du gefragt hast, war alles noch in Ordnung"
                ];
                
                var frase = frases[Math.floor(Math.random() * frases.length)];
                artyom.say(frase);
            }
        },
        {
            indexes: ['hello how are','hello'],
            action : function(i){
                var frases = [
                    "Ring a ding ding, you're talking to the king.",
                    "Hi, is John there?",
                ];
                
                var frase = frases[Math.floor(Math.random() * frases.length)];
                artyom.say(frase);
                artyom.say();
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
        
        artyCommands.getCommands = function(lang){switch(lang){
            case 'de-DE':
                return artyomCommandsDeutsch;
            case 'en-GB':
                return artyomCommands;
            case 'es-CO':
                return artyomCommandsSpanish;
            default:
                console.log("The commands has been set to english because there's no valid language given for get commands");
                return artyomCommands;
        }};
        
        
        /**
         * Artyom Default functions are not always required in all views
         * so is necessary put the things in the right place.
         * 
         * Artyom can extend it's commands in differents views for 
         * differents purposes through the .extend function.
         * 
         * @param {type} lang
         * @param {type} extendingFunctions
         * @returns {Boolean}
         */
        artyCommands.extend = function(lang,extendingFunctions){
            switch(lang){
                case 'de-DE':
                    extendingFunctions.forEach(function(comando) {
                        artyomCommandsDeutsch.push(comando);
                    });
                break;
                case 'en-GB':
                    extendingFunctions.forEach(function(comando) {
                        artyomCommands.push(comando);
                    });
                break;
                case 'es-CO':
                    extendingFunctions.forEach(function(comando) {
                        artyomCommandsSpanish.push(comando);
                    });
                break;
                case 'default':
                    console.error("Failed to extend artyom commands, " + lang + " is not a valid language.");
                break;
            }
            
            return true;
        };
        
        return artyCommands;
    }
    
    if(typeof(artyCommands) === 'undefined'){
        window.artyCommands = ArtyomCommands();
    }
})(window);