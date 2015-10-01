var Validator = require('jsonschema').Validator;
var v = new Validator();
 
  // Address, to be embedded on Person 
  var builderSchema = {
    "id": {"type": "integer"},
    "type": "object",
    "properties": {
      "customers": {
        "type": "array",
        "customer": {"type": "object"}
      },
      "name": {"type": "string"},
    },
    "required": ["name"]
  };
  
  var customerSchema = {
    "id":{"type": "integer"},
    "type":"object",
    "properties":{
      "name":{"type":"string"},
      "email_address":{"type":"string"},
      "house":{"type":"object"}
    },
    
    "required":["name","email_address","house"]
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
        "brick_work":false,
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
        
         
      },
      
    }
  }
  