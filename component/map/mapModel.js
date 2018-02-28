angular.module("appJeu").service("mapModel", function(){
	return{
		tile : function(){
			colonne = [];
			colonne.push([1,1,0,0,0,0,0,0,0,0]);
			colonne.push([0,1,0,0,0,0,0,0,0,0]);
			colonne.push([0,1,0,1,1,1,0,0,0,0]);
			colonne.push([0,1,0,1,0,1,0,1,1,1]);
			colonne.push([0,1,1,1,0,1,0,1,0,1]);
			colonne.push([0,0,0,0,0,1,0,1,0,1]);
			colonne.push([0,0,0,0,0,1,0,1,0,1]);
			colonne.push([0,0,1,1,1,1,0,1,0,1]);
			colonne.push([0,0,1,0,0,0,0,1,0,1]);
			colonne.push([0,0,1,1,1,1,1,1,0,1]);
			
			return colonne;
		}
	};
});