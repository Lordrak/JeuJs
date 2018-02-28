angular.module("appJeu").controller("mapController", function($scope, mapModel, infoPersoModel){
	$scope.inputKey = "default";
	$scope.tileImages = ['images/lave.gif','images/sol.jpg'];
	$scope.tileMap = [];
	$scope.posX = 0;
	$scope.posY = 0;
	

	for(var i = 0 ; i < mapModel.tile().length ; i++){
		for(var y = 0 ; y < mapModel.tile()[0].length ; y++){
			var nbTile = mapModel.tile()[i][y];
			var imgSrc = $scope.tileImages[nbTile];
			$scope.tileMap.push({src : imgSrc, positionX :y * 50, positionY : i * 50});
		}
	}
	
	$scope.checkIfEnterKeyWasPressed = function($event){
		var keyCode = $event.which || $event.keyCode;
		
		if(keyCode == 122){
			$scope.inputKey = "HAUT";
			infoPersoModel.positionY --;
		}
		if(keyCode == 115){	
			$scope.inputKey = "BAS";
			infoPersoModel.positionY ++;

		}
		if(keyCode == 113){
			$scope.inputKey = "GAUCHE";
			infoPersoModel.positionX --;
		}
		if(keyCode == 100){
			$scope.inputKey = "DROITE";
			infoPersoModel.positionX ++;
		}
		$scope.posX = infoPersoModel.positionX *50;
		$scope.posY = infoPersoModel.positionY *50;
		

  };

});