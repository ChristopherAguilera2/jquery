
//FUNCIONES

function mymain(){
    try {
        $(document).ready(function(){
            $("#text2").hide();
            $("#text1").mouseenter(function(){
                $("#text2").show();
              });
            $("#text1").mouseleave(function(){
                $("#text2").hide();
            });

            $("#img").click(function(){
                $(this).css("width", "100%");
            });
            $("#img").mouseleave(function(){
                $(this).css("width", "");
            });

            $("#caja3").dblclick(function(){
                let $element = $('#caja3');
                let fontSize = $element.css('fontSize');
                if(fontSize=="32px"){
                    $(this).css("fontSize", "16px");
                }
                else{
                    $(this).css("fontSize", "32px");
                }
            });
          });
    } catch (error) {
     console.log(error.name, error.message)
    }
}



mymain()