
var root = document.getElementsByTagName('html')[0];

var str = domIterate(root);
document.getElementById('info').innerHTML = str;

function domIterate(current, depth) {
    if (!depth) {  //set the depth initially at 0
        depth = 0;
        
    }
    if (current.nodeType == 1) {
        var txt = '';
        
        for (var i= 0; i < depth; i++) {
            txt += '-';
            
        }
        txt += current.tagName + "\n";

        //part 2
        current.onclick = function(e) {
          alert(this.tagName);
        };
       
        
        for (var n = 0; n < current.childNodes.length; n++) {
            var childTxt = domIterate(current.childNodes[n], depth+1);
            if (childTxt != null && childTxt != '') {
                txt += childTxt;
            }
        }
        return txt;
    }
    else {
        return null;
    }
}