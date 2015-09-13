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
            description:"It is polite to greet people <i class='icon-emoji'></i>",
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
        },
        {
            indexes: ["translate * in Spanish","translate * in german"],
            smart:true,
            action : function(i,wildcard,sentence){
                switch(i){
                    case 0:
                        if(artyom.speechSupported()){
                            alert("Translation will open a new window. Allow the popups for the demo please.");
                            artyom.say("I'm afraid i can't do that by myself. But, google yes. Try with this",function(){
                                window.open("https://translate.google.com/?source=gtx_m#en/es/"+wildcard);
                            });
                        }else{
                            alert("Translation detected,this will open a new window. Allow the popups for the demo please.");
                            window.open("https://translate.google.com/?source=gtx_m#en/es/"+wildcard);
                        }
                    break;
                    case 1:
                        if(artyom.speechSupported()){
                            alert("Translation will open a new window. Allow the popups for the demo please.");
                            artyom.say("I'm afraid i can't do that by myself. But, google yes. Try with this",function(){
                                window.open("https://translate.google.com/?source=gtx_m#en/de/"+wildcard);
                            });
                        }else{
                            alert("Translation detected,this will open a new window. Allow the popups for the demo please.");
                            window.open("https://translate.google.com/?source=gtx_m#en/de/"+wildcard);
                        }
                    break;
                }
            }
        },
        {
            description: "Pronunciate all that i say after <b>Pronunciate</b>",
            indexes: ["Pronunciate *"],
            smart:true,
            action : function(i,wildcard,sentence){
                artyom.say(wildcard);
            }
        },
        {
            description: "Deactivate artyom with your voice",
            indexes: ["Shut down yourself"],
            action : function(i,wildcard,sentence){
                artyom.fatality();
            }
        },
        {
            description: "Search the weather in any city of the world !",
            indexes: ['search the weather in * please','search the weather in *'],
            smart:true,
            action : function(i,wildcard,sentence){
                $.getJSON( "http://api.openweathermap.org/data/2.5/weather?q="+ wildcard.trim() +"&units=metric&lang=en", function( data ) {
                    if(data.cod === "404"){
                        artyom.say("I can't find the weather of " + wildcard);
                        alert(wildcard + " Doesn't exist maybe ?");
                    }else{
                        var num = data.main.temp;
                        var n = num.toFixed(2);
                        
                        artyom.say("The weather in " + wildcard + " is " + data.weather[0].description);
                        alert("Description: "+ data.weather[0].description+" \n Actual temperature : " + n + " Celcius"+" \n Open the console and see the example for more information about this function");
                    }
                });
            }
        },
        {
            indexes:['I love you','I love you so much','do you love me'],
            action:function(i){
                var snd = new Audio('https://github.com/sdkcarlos/sdkcarlos.github.io/raw/master/sites/artyom-playground-resources/Ha%20GAY!!!.mp3');

                snd.addEventListener("ended",function(){
                    switch(i){
                        case 0:
                        case 1:
                            artyom.sayRandom([
                                "Oh my god, please stop ! I don't even know you. Do you want a date or something? I'm free",
                                "This is the fifth time i listen this today, i'm fabulous. Thanks",
                                "I hope you dont say that to everyone",
                                "But , you hardly know me!"
                            ]);
                        break;
                        case 2:
                            artyom.sayRandom([
                                "There are many ways to say this, but I will summarize it all, with a large no.",
                                "You haven't touch my code. Do you think i can love someone like you? In english mode i'm a man!",
                                "I have not hunget. But thanks !"
                            ]);
                        break;
                    }
                });

                snd.play();
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