module.exports = {
	registro_evaluador:function(req,res,next){
		return res.view();
	},
	registrar_evaluador:function(req,res,next){
		var objeto_evaluador = {
			ci_evaluador		:req.param('id_evaluador'),
			nombre_evaluador	:req.param('nombre_evaluador'),
			apellido_evaluador	:req.param('apellido_evaluador'),
			email_evaluador 	:req.param('email_evaluador'),
			area_evaluador 		:req.param('area_evaluador')
		}
		Evaluador.create(objeto_evaluador)
		.then(function(evaluador){
			console.log(evaluador);
			return res.redirect('evaluador/index');
		})
		.catch(function(err){
			return res.redirect('evaluador/registro_evaluador');
		});
	},
	index: function (req, res) {
      Evaluador.find(function foundEvaluador (err, evaluadores) {
        if(err) return res.redirect('registrar_evaluador');
        res.view({
          evaluadores: evaluadores
        });
      });
  	}
  };