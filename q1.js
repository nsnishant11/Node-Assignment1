var fs = require('fs');
var parseIntoXml = require('xml-parser');

module.exports= function(path)
{
try{
        var xml = fs.readFileSync(path, 'utf8');
        var inspect = require('util').inspect;
         
        var obj = parseIntoXml(xml);
        console.log(inspect(obj, { colors: true, depth: Infinity })); 
}
  catch(err) {
      console.log(err)
    
  }
}
