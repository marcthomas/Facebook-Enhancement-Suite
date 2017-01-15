var _docHeight = 0;

setInterval(function(){

    var curHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    if(curHeight!=_docHeight){
        _docHeightP=curHeight;
  var 
    anchors = [],
    curr;

    for (var i= document.links.length; i-->0;)
    if (document.links[i].className=="_3e_2 _m8c"||document.links[i].className=="uiStreamSponsoredLink")
        anchors.push(document.links[i]);

while(curr=anchors.pop()){
    while(curr.getAttribute("role")!="article")
        curr=curr.parentNode;
    var temp=curr;
    for(var i = 0; i<6; i++){
        temp=temp.parentNode;
        if(temp.getAttribute("role")=="article"){
            curr=temp;    
            break;
        }
    }
    for(var i = 0; i<2; i++)
        curr=curr.parentNode;
    var str=document.location.href+"";
    if(str.indexOf("/groups/")==-1)
        curr.parentNode.parentNode.removeChild(curr.parentNode);
    else
        curr.parentNode.removeChild(curr);
    }
}  
}, 2000);