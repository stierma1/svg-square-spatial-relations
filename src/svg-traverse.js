var extractShape = require("./shape-extractors")

function svgTraverse(svgNode){
  if(!svgNode){
    return [];
  }

  var {tag, attr, children, id} = svgNode;
  var nodes = [];
  var node = extractShape({tag, attr, id});

  if(node){
    nodes.push(node);
  }

  for(var i in children){
    nodes = nodes.concat(svgTraverse(children[i]));
  }

  return nodes;
}

module.exports = svgTraverse;
