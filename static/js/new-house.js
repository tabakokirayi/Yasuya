$(document).ready(function(){

    $("#form-house-info").submit(function(e){
        $('#form-house-info').hide();
        $('#form-house-image').show();
        // e.preventDefault();

        // var formData = $(this).serializeArray();
        // for (var i=0; i<formData.length; i++) {
        //     if (!formData[i].value) {
        //         $(".error-msg").show();
        //         return;
        //     }
        // }
        // var data = {};
        // $(this).serializeArray().map(function(x){data[x.name] = x.value;});
        // var facility = []; // 用来保存勾选了的设施编号
        // 通过jquery筛选出勾选了的页面元素
        // 通过each方法遍历元素
        // $("input:checkbox:checked[name=facility]").each(function(i){facility[i] = this.value;});
        // data.facility = facility;
        // var jsonData = JSON.stringify(data);
        // $.ajax({
        //     url:"/api/house/info",
        //     type:"POST",
        //     data: jsonData,
        //     contentType: "application/json",
        //     dataType: "json",
        //     headers:{
        //         "X-XSRFTOKEN":getCookie("_xsrf"),
        //     },
        //     success: function (data) {
        //         if ("4101" == data.errcode) {
        //             location.href = "/login.html";
        //         } else if ("0" == data.errcode) {
        //             $("#house-id").val(data.house_id);
        //             $(".error-msg").hide();
        //             $("#form-house-info").hide();
        //             $("#form-house-image").show();
        //         }
        //     }
        // });
    })
    // $("#form-house-image").submit(function(e){
    //     e.preventDefault();
    //     $('.popup_con').fadeIn('fast');
    //     var options = {
    //         url:"/api/house/image",
    //         type:"POST",
    //         headers:{
    //             "X-XSRFTOKEN":getCookie("_xsrf"),
    //         },
    //         success: function(data){
    //             if ("4101" == data.errcode) {
    //                 location.href = "/login.html";
    //             } else if ("0" == data.errcode) {
    //                 $(".house-image-cons").append('<img src="'+ data.url+'">');
    //                 $('.popup_con').fadeOut('fast');
    //             }
    //         }
    //     };
    //     $(this).ajaxSubmit(options);

    //     $("#area_id").change(function(){
    //     alert("hello")
    //     })
    // });
})