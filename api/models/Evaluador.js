module.exports = {

  attributes: {
  	id:{
  		type: 'integer',
    primaryKey: true,
    required: true
  	},
  	nombre_evaluador:{
  		type:'string',
  		required:true,
  		columnName:'nombre_evaluador'
  	},
  	email_evaluador:{
  		type:'email',
  		required:true,
  		unique: true,
  		columnName:'email_evaluador'
  	},
area_evaluador:{
	type: 'string',
	required: true
}


  }
};

