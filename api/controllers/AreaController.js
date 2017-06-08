//controlador de area
module.exports = {
	nueva_area: function(req,res,next){
		return res.view();
	},
	crear_area:function(req,res,next){
		var objeto_area={
			nombre_area : req.param('nombre_area')
		}
		Area.create(objeto_area)
		.then(function(area){
			console.log(area);
			//falta aca....
			return res.redirect('area/ver_area',area.id_area);
		})
		.catch(function(err){
			return res.redirect('area/nueva_area');
		});
	},
	index: function (req, res,next) {
      Area.find(function foundArea (err, areas) {
        if(err) return res.redirect('crear_area');
        res.view({
          areas: areas
        });
      });
  	},
  	//falta aca...
  	ver_area: function(req,res,next){
  		Area.findOne(req.param('id_area'),function foundArea(err,area){
  			if(err){
  				return next(err);
  			}
  			res.view({
  				area:area
  			});
  		});
  	},
  	//falta aca...
  	editar_area:function (req,res,next){
  		Area.findOne(req.param('id_area'),function foundArea(err,area){
  			if(err){
  				return next(err);
  			}
  			if(!area){
  				return next(err);
  			}
  			res.view({
  				area:area
  			});
  		});

  	},
  	//falta aca...
  	actualizar_area:function(req,res,next){
  		var objeto_area={
			nombre_area : req.param('nombre_area')
		}
		Area.update(req.param('id_area'),objeto_area,function areaUpdate(err,area){
			if(err){
				req.session.flash={
					err:err
				}
				return res.redirect('area/editar_area/'+req.param('id_area'));
			}
			res.redirect('/area/ver_area/'+req.param('id_area'));
		});
  	}


};