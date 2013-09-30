root = document.getElementByTagName('html')[0];
//this grabs the html tag at the begining of the html document

var str = domIterate(root);  //creates the actual text to be rendered
document.getElementByTagId('info').innerHTML = str; //renders the text in the info id'd sections

function domIterate(current, depth) {
    if (!depth) {  //set the depth initially at 0
        depth = 0;
    }
    if (current.nodeType == 1) {
        var text = '';
        for (var i= 0; i < depth; i++) {
            txt += '-';
        }
        txt += current.tagName + "\n";
        for (var n = 0; n < current.childNodes.length; n++) {
            childTxt = domIterate(current.childNodes[n], depth+1);
            
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