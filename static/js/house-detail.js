layui.use('laydate', function(){
    var laydate = layui.laydate;
  
  //常规用法
    laydate.render({
      elem: '#time',
      min: 'date',
      range: true,
      theme: '#428bca',
      // done: function(value, date){
      //  min_date = value;
      // }
    });
})


$(function(){
  H = $('#pos').offset().top;
  W = $('#pos').width();

  $(window).scroll(function(){
        var nowTop = ($(document).scrollTop());
        if (nowTop>= (H-40)) {
          $('#pos').css({
            position: 'fixed',
            top: '60px',
            width: W,
          });

          $('subscribe-con-pos').show();
        }
        else{
          $('#pos').css({
            position: 'static',
            width: '100%',
            // marginTop: '78px'
          });

          $('subscribe-con-pos').hide();
        }

    })
})