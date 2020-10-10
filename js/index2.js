define(["jquery"],function($){
    function index2(){
      $(function(){
        $("#small").mouseenter(function(){
          $("#mark,#big").show();
        }).mouseleave(function(){
          $("#mark,#big").hide();
        }).mousemove(function(ev){
          var l = ev.clientX - $(this).offset().left - 100;
          var t = ev.clientY - $(this).offset().top - 100 + $(document).scrollTop();
          //限制出界
          l = Math.max(0, l);
          l = Math.min(350, l);
          t = Math.max(0, t);
          t = Math.min(230, t);
  
          $("#mark").css({
            left: l,
            top: t
          })
          $("#big img").css({
            left: -2 * l,
            top: -2 * t
          })
        })
      })
    }
    return{
      index2:index2,
    }
  
  })