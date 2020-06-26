 var container = '<div>เสี่ยวๆๆๆๆ</div>';

chrome.runtime.onMessage.addListener(function(request ,sender, sendRespond){
    if(request.todo == "showPageAction"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            alert("Fuck you");
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.className = 'kkth';
            div.innerHTML = container;
        })
        alert("Fuck you Sean");
       
       
}

});
    
    

