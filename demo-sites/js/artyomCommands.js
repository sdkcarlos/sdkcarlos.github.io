/**
 * artyom.js can't do anything without commands , this file will set up
 * artyom for it's final use
 * 
 * @dependencies [artyom.js]
 * @copyright 2015, Deutschland.
 * @author Carlos Delgado
 * @param {type} window
 * @Description Artyom JS Core - See Documentation for further information
 * @see http://sdkcarlos.github.io/artyom.html
 * @ignore 27.07.2015 17:17
 * @returns {object}
 */

(function(window){
    'use strict';
    
    if(typeof(artyom) === "undefined"){
        console.error("Artyom is not loaded yet, please charge artyom before load it's commands");
        return;
    }
    
    /**
     * Example Artyom Commands
     * @type Array
     */
    var artyomCommands = [
        //Simple Command Example
        {
            indexes: ['hello'],
            action : function(i){
                artyom.say("How's going !");
            }
        },
        //Smart Command Example
        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i){
                artyom.say("How's going !");
            }
        },
        {
            indexes: ['open google',"go to google"],
            action : function(i){
               window.location.href = "https://google.com";
            }
        },
        {
            indexes: ['what time is it'],
            action : function(i){
               alert(new Date() + " You can create something more awesome than this. This is just a demo !");
            }
        },
        //Continue adding your own commands here
    ];
    
    artyom.addCommands(artyomCommands);
})(window);