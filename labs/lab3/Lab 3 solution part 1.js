    /**
     * Part 1
     */

    // Target the html element. There's only one, but getElementsByTagName()
    // will always return an array, so we want the first element.
    root = document.getElementsByTagName('html')[0];
  
    // Build up our text-based tree, and put it inside our #info element.
    var str = domIterate(root); 
    document.getElementById('info').innerHTML = str;

    // Recursively iterate through the DOM, starting with a given root element.
    // This function only iterates through Element nodes, so the base case is
    // the one in which no Element children exist (non-Element nodes will
    // return null instead of their tagName).

    function domIterate(current, depth) {
      // Set the depth if it wasn't set already.
      if (!depth) {
        depth = 0;  // No need for var; it's an argument.
      }
    
      // If this is an Element node (the constant is 1)...
      if (current.nodeType == 1) {
        // Start building the text of this node, pre-traversal.
        var txt = '';

        // One dash for each point of depth
        for (var i = 0; i < depth; i++) {
          txt += '-';
        }

        // Add the element's tag name to the end, after indicating depth
        txt += current.tagName + "\n";


        // For each child node
        for (var n = 0; n < current.childNodes.length; n++) {
          // Get the text of the child node
          childTxt = domIterate(current.childNodes[n], depth+1);

          // If the child node can be represented by text, add it to this one.
          if (childTxt != null && childTxt != '') {
            txt += childTxt;
          }
        }
        // Return the text of this node and all children.
        return txt;
      }
      // Otherwise, do nothing.
      else {
        return null;
      }
    }

