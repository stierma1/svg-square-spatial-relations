# svg-square-spatial-relations
Library takes 2 svg data blobs with retangles

```js
var {getRelations} = require("svg-square-spatial-relations");

var svgText1 = "<xml> ..... ";
var svgText2 = "<xml> more svg stuff";

var relationships = getRelations(svgText1,svgText2);
```
