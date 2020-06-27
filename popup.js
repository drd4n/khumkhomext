$(function(){
    $('#urname').keyup(function(){
        $('#greeting').text('Hello ' + $('#urname').val())
    })
    $('#savetime').click(function(){
        var time = $('#sectime').val();
        if(time){
            chrome.storage.sync.set({'time':time},function(){
                close();
            });
        }
    });
})