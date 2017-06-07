module.exports = {
	crearArea: function(req,res){
		console.log('crearArea');
		return res.view('area/crearArea');
	},
	create:function(req,res){
		var areaObj={
			nombre_area : req.param('nombre_area')

		}
		Area.create(areaObj,function(err,area){
			if(err){
				return res.redirect('area/crearArea');
			}
			res.redirect('area');
		});
	},
	index: function (req, res) {
      Area.find(function foudArea (err, areas) {
        if(err) return res.redirect('/area/crearArea');
        res.view({
          areas: areas
        });
      });
  	}
};