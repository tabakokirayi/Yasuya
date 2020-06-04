// $(function(){
// 	$a = $('.search-show ul li:first a')
// 	alert($a.attr('value'))
// })
// var min_date;

layui.use('laydate', function(){
  	var laydate = layui.laydate;
  
  //常规用法
  	laydate.render({
    	elem: '#sel_date',
    	min: 'date',
    	range: true,
    	theme: '#428bca',
    	// done: function(value, date){
    	// 	min_date = value;
    	// }
  	});
})

layui.use('form', function(){
  var form = layui.form;
  
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});



$(function () {
    pro = $('#pro');
    $.get('/pro/', function (dic) {
        $.each(dic.data, function (index, item) {
            pro.append('<option value="'+item[0]+'">'+item[1]+'</option>')
        })
    })

    // 查询市的信息
    pro.change(function () {
        $.get('/city'+$(this).val()+'/', function (list) {
            city = $('#city');
            city.empty().append('<option value="0">市</option>')
            $('#dis').empty().append('<option value="0">区</option>')
            $.each(list.data, function (index, item) {
                city.append('<option value="'+item.id+'">'+item.title+'</option>')
            });
        });
    })

    // 查询区域信息
    $('#city').change(function () {
        $.get('/city'+$(this).val()+'/', function (list) {
            dis = $('#dis').empty().append('<option value="0">区</option>')
            $.each(list.data, function (index, item) {
                dis.append('<option value="'+item.id+'">'+item.title+'</option>')
            })
        })
    })
});