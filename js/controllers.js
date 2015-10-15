/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var phonecatApp = angular.module("phonecatApp",[]);

phonecatApp.controller("PhoneListCtrl",function ($scope){
    $scope.phones =[
        {name:"Iphone 6",snippet:"Lite telefon till högt pris!"},
        {name:"Samsung Galaxy S6 Edge",snippet:"Mycket telefon till dyrt pris."},
        {name:"Android Budget Phone", snippet:"Billigt skräp."}
    ];
});
