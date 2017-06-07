module.exports.routes = {


  '/': {
    view: 'static/index'
  },
  '/area/crearArea':{
    controller: "AreaController",action:"crearArea"
  },
  '/evaluador/registroEvaluador':{
    controller: "EvaluadorController",action:"registrarEvaluador"
  },
  'evaluador': {
    controller:"EvaluadorController",action:"index"
  },
  'area':{
    controller:"AreaController", action:"index"
  },
  '/examen/verExamen':{
    view:"examen/verExamen"
  },
  '/estudiante/registroEstudiante':{
    view:"estudiante/registroEstudiante"
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ******************************************  *********************************/

};
