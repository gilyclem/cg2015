var Feature = require('./Feature.js');

Feature.inherits(Reception, Feature);

function Reception(feature) {
	Feature.call(this, feature);
}

Reception.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Reception.prototype.in_graph = true;

Reception.prototype.in_2D_map = false;

Reception.prototype.get3DModel = function() {
	var station = new THREE.Object3D();
	
	var tavolo_geo = new THREE.TorusGeometry( 3, 0.6, 6, 32, 7/4*Math.PI );
	
	var texture = THREE.ImageUtils.loadTexture("assets/textures/base_legno3.jpg");
    var legno = new THREE.MeshPhongMaterial();
    legno.map = texture;

	var plane_geo = new THREE.PlaneGeometry( 1.5,1.5 );
	var box_geo = new THREE.BoxGeometry( 1.5,1.5,1 );
	var material = new THREE.MeshLambertMaterial( {color: 0xdcdcdc} );
	
	var tavolo = new THREE.Mesh(tavolo_geo, legno);
	var pannello = new THREE.Mesh(plane_geo, legno);
	
	pannello.material.side = THREE.DoubleSide;
	pannello.rotation.x+=Math.PI/2;
	pannello.position.x+=3;
	
	station.add(tavolo);
	station.add(pannello);
	
	station.position.z+=0.5;
	return station;
};

module.exports = Reception;