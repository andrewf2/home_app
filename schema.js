var Validator = require('jsonschema').Validator;
var v = new Validator();
 
  // Address, to be embedded on Person 
  var userSchema = {
    "id": {"type": "integer"},
    "type": "object",
    "properties": {
      "customers": {
        "type": "array",
        "customer": {"type": "object"}
      },
      "name": {"type": "string"},
      "emailAddress":{"type":"string"},
      "house":{"type":"object"},
      "password":{"type":"string"}
    },
    "required": ["name","emailAddress","password"]
  };
  
  
  
  var houseSchema = {
    "id":{"type":"integer"},
    "type":"object",
    "properties":{
      "address":{"type":"string"},
      "progress":{"type":"object",
        "foundationDone":false,
        "framed":false,
        "trusses":false,
        "roofSheeted":false,
        "roofShingled":false,
        "brickWork":false,
        "siding":false,
        "electricalWork":false,
        "insulation":false,
        "lighting":false,
        "tileLaid":false,
        "carpet":false,
        "trim":false,
        "cabinets":false,
        "interiorPaint":false,
        "sodLaid":false
  
      }
      
      
      
    }
  }
  
