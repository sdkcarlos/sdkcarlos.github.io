/**
 * SDkCarlos JS
 * 
 * @author Carlos Delgado
 * @param {type} $
 */
if("undefined"==typeof jQuery){
    throw new Error("sdkcarlos.js Requiere jQuery");
}
(function($){
	$.fn.extend({
            /**
             * Verifica el contenido del objeto
             * 
             * @returns {Boolean}
             */
            isEmpty: function(){
                var a = this.val();

                if(a == "" || a == null){
                    return true;
                }

                return false;
            },
            
            /**
             * Permitir solo el ingreso de números en un input
             * 
             * @returns {undefined}
             */
            onlyNumbers: function(){
                this.keydown(function (e)  {
                    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 40)) {
                        return;
                    }
                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                        e.preventDefault();
                    }
                });
            },
            
            /**
             * Confirma la existencia de el objeto en el DOM
             * @returns {Boolean}
             */
            isset: function(){
                if (this.length) {
                    return true;
                }
                return false;
            },
            
            /**
             * 
             * @param string url
             * @returns {undefined}
             */
            redirect : function(url){
                this.css("cursor","pointer");
                this.click(function(){
                   window.location = url;
                });
            },
            
            /**
             * Valida cada input del formulario si tiene el atributo
             * data-required="{{Mensaje}}"
             * 
             * Uso :
             * <html>
             * <form id="formulario">
             *      <input type="text" data-required="Debes completar este campo" class="form-control"/>
             *      <input type="submit"/>
             * </form>
             * 
             * <script>
             * $("#formulario").validate();
             * 
             * @returns {Boolean}
             */
            validate: function(){
                var form = this; if(!form.is( "form" ) ) {console.warn(".validate es valido solo para formularios.");return false;}

                form.submit(function( event ) {
                    $('input', form).each(function(){
                        var msgRequerido = $(this).data('required');
                        if(msgRequerido){
                            if($(this).isEmpty()){
                                alert(msgRequerido);
                                event.preventDefault();
                            }
                        }
                    });
                });
            }
	});
        /**
         * Elimina un item del array (segundo parametro) con valor de (primer parametro)
         * 
         * @param {type} matriz
         * @param {type} value
         * @returns {unresolved}
         */
        $.removeItem = function(value,matriz){
            for(var i in matriz){
                if(matriz[i] == value){
                    matriz.splice(i,1);
                    break;
                }
            }

            return matriz;
        };
})(jQuery);