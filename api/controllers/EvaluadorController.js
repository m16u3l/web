module.exports = {
	registrarEvaluador:function(req,res){
		console.log('registrar evaluador');
		return res.view('evaluador/registroEvaluador');
	},
	create:function(req,res){
		var objeto_evaluador = {
			id : req.param('id_evaluador'),
			nombre_evaluador:req.param('nombre_evaluador'),
			email_evaluador :req.param('email_evaluador'),
			area_evaluador :req.param('area_evaluador')
		}
		Evaluador.create(objeto_evaluador,function(err,Evaluador){
			if(err){
				return res.redirect('evaluador/registroEvaluador');
			}
			res.redirect('evaluador');
		});
	},
	index: function (req, res) {
      Evaluador.find(function foudEvaluador (err, evaluadores) {
        if(err) return res.redirect('/evaluadores/registroEvaluador');
        res.view({
          evaluadores: evaluadores
        });
      });
  	}
  }