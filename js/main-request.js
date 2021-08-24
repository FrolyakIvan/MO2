$(function() {
    $('#main-form-req').click(function() {
        $('#main-form').validate({
            validClass: "valid",
            rules: {
                M_fio: {
                    required: true
                },
                M_tell: {
                    required: true,
                    number: true
                },
                M_mail: {
                    required: true,
                    email: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#M_fio').val();
                var number = $('input#M_tell').val();
                var mail = $('input#M_mail').val();
                var dataString = 'to=' + to + '&M_fio=' + fullname +'&M_tell='+number+'&M_mail=' + mail+'';
                $.ajax({
                    type: "POST",
                    url: "main-request.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-main').fadeIn('slow');
                        $('#main-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#main-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});