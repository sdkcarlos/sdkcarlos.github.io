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
            indexes: ['hello how are','how are you','hello'],
            action : function(i){
                var forHowareyou = [
                    'Thankfully alive and still somewhat young and healthy, in this economy what more can I ask for?',
                    'Cool as a cucumber',
                    'I am doing so fabulous today! I can hardly control myself from dancing.',
                    'From what I hear, I am very good.',
                    "I can't complain... I've tried, but no one listens.",
                    "As long as I can keep the kitten I found today, I'll be fine!"
                ];
                
                var forHello = [
                    "Ring a ding ding, you're talking to the king.",
                    "Hi, is John there?",
                    'How goes it?'
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
        }
    ];
    
    
    /**
     * Artyom Commands Functions
     * 
     * @returns {artyomCommands_L13.ArtyomCommands.artyCommands}
     */
    function ArtyomCommands(){
        var artyCommands = {}; 
        
        artyCommands.getCommands = function(lang){
            return artyomCommands;
        };
        
        
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
        */
        return artyCommands;
    }
    
    if(typeof(artyCommands) === 'undefined'){
        window.artyCommands = ArtyomCommands();
    }
})(window);