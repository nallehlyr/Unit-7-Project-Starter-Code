$("button").click(function() {
    let Box1 = $(".Box1").val();
    let Box2 = $(".Box2").val();
    let Box3 = $(".Box3").val();
    
   $(".display").text("They are famous for "+ Box2) ;
     $(".display").append("celebrity is a Girl "+ Box1) ;
     $(".display").append("mid 30s"+ Box3) ;
   $(".display").append( "I guess your celebrity is Beyonce");
    
});