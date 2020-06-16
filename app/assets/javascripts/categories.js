
$(function(){

  $(".category__parent").hide(); 
  $(".category__child").hide(); 
  $(".category__grandchild").hide(); 

  $(".left-box--first").hover(
    function () {
      $(".category__parent").show(); 
    },
    function () {
      $(".category__parent").hide();
    }
  );

  $(".category__parent").hover(
    function () {
      var id = $(this).attr('id');
      var child = $("#"+ id).find('.category__child');
     
      $(child).show(); 
    },
    function () {
      $(".category__child").hide(); 
    }
  );

  $(".category__child").hover(
    function () {
      var id = $(this).attr('id');
      var grandchild = $("#"+ id).find(".category__grandchild");
      console.log(grandchild.length)
      $(grandchild).show(); 
    },
    function () {
      $(".category__grandchild").hide();
    }
  );
 
});