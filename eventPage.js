var container = 
'<div class="bg" style="background-image=url(WAIT.png), background-repeat:no-repeat,height: 100%,width: 100% "," >เสี่ยวๆๆๆๆ</span>';

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
    
    

