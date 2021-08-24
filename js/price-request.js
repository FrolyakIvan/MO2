$(function() {
    $('#price-form-req').click(function() {
        $('#price-form').validate({
            validClass: "valid",
            rules: {
                P_fio: {
                    required: true
                },
                P_tell: {
                    required: true,
                    number: true
                },
                P_mail: {
                    required: true,
                    email: true
                }
            },
           
            submitHandler: (function(form) {
                var to = $('input#to').val();
                var fullname = $('input#P_fio').val();
                var number = $('input#P_tell').val();
                var mail = $('input#P_mail').val();
                var dataString = 'to=' + to + '&P_fio=' + fullname +'&P_tell='+number+'&P_mail=' + mail + '';
                $.ajax({
                    type: "POST",
                    url: "price-request.php",
                    data: dataString,
                    success: (function(data) {
                        $('#thanks-price').fadeIn('slow');
                        $('#price-form').trigger("reset");
                        $('.modal-backdrop.in').css("display", "none");
                        $(':input', '#price-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
                        return false;
                    }),
                    error: (function() {})
                });
                return false;
            })
        });
    });
});