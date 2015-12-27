$(function(){
    $('#example-talking-text-trigger').click(function(){
        var val = $('#example-talking-text').val();
        var btn = $(this);
        btn.attr('disabled','disabled');
        
        if(val){
            artyom.say(val,{
                onStart:function(){
                    console.log("The text is being readed");
                },
                onEnd:function(){
                    console.log("Well, that was all. Try with a longer text !");
                    btn.removeAttr('disabled');
                }
            });
        }
    });
});
 
function listArtyomVoices(){
    var select = $("#tag-availablevoices");
    var voices = artyom.getVoices();
    select.empty();

    for(var i = 0;i < voices.length;i++){
        var voice = voices[i];
        select.append('<option>'+voice.name+'</option>');
    }
    
    $('select').material_select();
}

function listArtyomCommandsHere(){
    var comanddos = artyom.getAvailableCommands();
    var html = '';

    for(var i = 0;i < comanddos.length;i++){
        var command = comanddos[i];
        var isSmart = false;
        var row;

        if(command.smart){
            isSmart = true;
        }

        if(command.description){
            row =   '<tr>\n\
                        <td>'+command.indexes+'</td>\n\
                        <td>'+command.description+'</td>\n\
                        <td class="text-right">'+isSmart+'</td>\n\
                    </tr>';
        }else{
            row =   '<tr>\n\
                        <td colspan="2">'+command.indexes+'</td>\n\
                        <td class="text-right">'+isSmart+'</td>\n\
                    </tr>';
        }

        html += row;
    }
    
    $("#table-available-commands-here tbody").append(html);
}