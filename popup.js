$(function(){
    $('#urname').keyup(function(){
        $('#greeting').text('Hello ' + $('#urname').val())
    })
})