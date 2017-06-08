module.exports = {
    tableName:'evaluador',
    autoPK:false,

  attributes: {
  	ci_evaluador:{
  		type: 'integer',
	    primaryKey: true,
	    required: true,
      unique:true,
      columnName:'ci_evaluador'
  	},
  	nombre_evaluador:{
  		type:'string',
  		required:true,
  		columnName:'nombre_evaluador'
  	},
    apellido_evaluador:{
      type:'string',
      required:true,
      columnName:'apellido_evaluador'
    },
  	email_evaluador:{
  		type:'email',
  		required:true,
  		unique: true,
  		columnName:'email_evaluador'
  	},
    area_evaluador:{
      type:'string'
    }
    /*,


    //llave foranea
  	area_evaluador:{
  		model:'area'
  	}
*/

  }
};

