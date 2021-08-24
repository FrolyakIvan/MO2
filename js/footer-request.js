$(function() {
    $('#footer-form-req').click(function() {
        $('#footer-form').validate({
            validClass: "valid",
            rules: {
                F_fio: {
                    required: true
                },
                F_tell: {
                    required: true,
                    number: true
                },
                F_mail: {
                    required: true,
                    email: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#F_fio').val();
                var number = $('input#F_tell').val();
                var mail = $('input#F_mail').val();
                var dataString = 'to=' + to + '&F_fio=' + fullname +'&F_tell='+number+'&F_mail=' + mail+'';
                $.ajax({
                    type: "POST",
                    url: "footer-request.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-footer').fadeIn('slow');
                        $('#footer-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#footer-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});