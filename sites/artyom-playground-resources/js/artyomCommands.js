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
                    'Cool as a cucumber',"hello, what's new?",'howdy',
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
                            alertify.success("Translation will open a new window. Allow the popups for the demo please.");
                            artyom.say("I'm afraid i can't do that by myself. But, google yes. Try with this",function(){
                                window.open("https://translate.google.com/?source=gtx_m#en/es/"+wildcard);
                            });
                        }else{
                            alertify.success("Translation detected,this will open a new window. Allow the popups for the demo please.");
                            window.open("https://translate.google.com/?source=gtx_m#en/es/"+wildcard);
                        }
                    break;
                    case 1:
                        if(artyom.speechSupported()){
                            alertify.success("Translation will open a new window. Allow the popups for the demo please.");
                            artyom.say("I'm afraid i can't do that by myself. But, google yes. Try with this",function(){
                                window.open("https://translate.google.com/?source=gtx_m#en/de/"+wildcard);
                            });
                        }else{
                            alertify.success("Translation detected,this will open a new window. Allow the popups for the demo please.");
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
            indexes:['what do you think about Siri','is Siri better than you'],
            action:function(i){
                switch(i){
                    case 0:
                        artyom.say('Well, your knowledge can give better results if you want it so.');
                    break;
                    case 1:
                        artyom.say('If you plan to create something better than Siri, go ahead, I can give you the tools to do it if you so desire');
                    break;
                }
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
                            var Answers = [
                                "Oh my god, please stop ! I don't even know you. Do you want a date or something?",
                                "This is the fifth time i listen this today, i'm fabulous. Thanks",
                                "I hope you dont say that to everyone",
                                "But , you hardly know me!"
                            ];

                            var frase = Answers[Math.floor(Math.random() * Answers.length)];
                            artyom.say(frase);
                        break;
                        case 2:
                            var Answers = [
                                "There are many ways to say this, but I will summarize it all, with a large no.",
                                "You haven't touch my code. Do you think i can love someone like you? In english mode i'm a man!"
                            ];

                            var frase = Answers[Math.floor(Math.random() * Answers.length)];
                            artyom.say(frase);
                        break;
                    }
                });

                snd.play();
            }
        },
        {
            indexes:['I need money','I have no money','I have not money'],
            action:function(i){
                var Answers = [
                    "Sorry, but i'm not a bank",
                    "Do you work everyday for it ? Otherwise I have bad news for you",
                    "I will not give a dollar, if that's what you mean",
                    "Tell No One, but I also need"
                ];

                var frase = Answers[Math.floor(Math.random() * Answers.length)];
                artyom.say(frase);
            }
        },
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