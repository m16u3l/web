module.exports = {
  attributes: {
  	id_pregunta:{
  		type:'integer',
  		primaryKey:true,
  		required:true
  	},
  	pregunta:{
  		type:'string',
  		required:true
  	},
  	respuesta:{
  		type:'string',
  		required:true
  	},
    nivel_pregunta:{
      type:'integer',
      required:true,

    },  
  	area:{
  		model:"Area"
  	}
  }
};

