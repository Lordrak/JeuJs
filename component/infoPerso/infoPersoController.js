angular.module("appJeu").controller("infoPersoController", function($scope, infoPersoModel){
	$scope.nom = infoPersoModel.nom;
	$scope.prenom = infoPersoModel.prenom;
	$scope.vie = infoPersoModel.vie;
	
});