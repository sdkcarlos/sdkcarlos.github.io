

/**
 * Initialize artyom first.
 * @param {type} param
 */
artyom.initialize({
  lang : "en-GB",
  continuous : true,
  listen:true,
  debug:true
});

/**
 * When start listen and end listen do that !
 * @param {type} param1
 * @param {type} param2
 */
artyom.when("Recognition",function(e){
    $("#artyom-status-label").css({
      color:"#06DC07"
    });
});
artyom.when("FinishRecognition",function(e){
    $("#artyom-status-label").css({
        color:"red"
    });
});
