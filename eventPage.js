chrome.runtime.onMessage.addListener(function(request ,sender, sendRespond){
    if(request.todo == "showPageAction"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            alert("Fuck you");
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.className = 'kkth';
            div.innerHTML = '<span class="kkkk">เสี่ยวๆๆๆๆ</span>';
        })
        alert("Fuck you Sean");
       
       
}

});
    
    

