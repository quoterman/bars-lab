'use strict';

/* Controllers */

var laptopControllers = angular.module('laptopControllers', []);

laptopControllers.controller('PhoneListCtrl', function($scope) {
    $scope.laptops = [
        {
            'name': '15.6" [Home] Ноутбук DNS (0164783) (HD)',
            "img": "src/img/1.jpg",
            "prise": '20 490 руб.'
        },
        {
            'name': '17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            "img": "src/img/2.jpg",
            "prise": '33 990 руб.'
        },
        {
            'name': 'Компьютер DNS Prestige XL [0800795]',
            "img": "src/img/3.jpg",
            "prise": '59 990 руб.'
        },
        {
            'name': '[Work] Ноутбук DNS (076644577)',
            "img": "src/img/4.jpg",
            "prise": '15 600 руб.'
        },
        {
            'name': '15.6" [Home] Ноутбук DNS (0164783) (HD)',
            "img": "src/img/1.jpg",
            "prise": '20 490 руб.'
        },
        {
            'name': '17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            "img": "src/img/2.jpg",
            "prise": '33 990 руб.'
        },
        {
            'name': 'Компьютер DNS Prestige XL [0800795]',
            "img": "src/img/3.jpg",
            "prise": '59 990 руб.'
        },
        {
            'name': '[Work] Ноутбук DNS (076644577)',
            "img": "src/img/4.jpg",
            "prise": '15 600 руб.'
        },
        {
            'name': '15.6" [Home] Ноутбук DNS (0164783) (HD)',
            "img": "src/img/1.jpg",
            "prise": '20 490 руб.'
        },
        {
            'name': '17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            "img": "src/img/2.jpg",
            "prise": '33 990 руб.'
        },
        {
            'name': 'Компьютер DNS Prestige XL [0800795]',
            "img": "src/img/3.jpg",
            "prise": '59 990 руб.'
        },
        {
            'name': '[Work] Ноутбук DNS (076644577)',
            "img": "src/img/4.jpg",
            "prise": '15 600 руб.'
        },
        {
            'name': '15.6" [Home] Ноутбук DNS (0164783) (HD)',
            "img": "src/img/1.jpg",
            "prise": '20 490 руб.'
        },
        {
            'name': '17.3" [Gamer] Ноутбук DNS (0801153) (HD+)',
            "img": "src/img/2.jpg",
            "prise": '33 990 руб.'
        },
        {
            'name': 'Компьютер DNS Prestige XL [0800795]',
            "img": "src/img/3.jpg",
            "prise": '59 990 руб.'
        },
        {
            'name': '[Work] Ноутбук DNS (076644577)',
            "img": "src/img/4.jpg",
            "prise": '15 600 руб.'
        }
    ];


$scope.basket = [];
$scope.sumPrice = 0;

$scope.addInBasket = function(laptop){
    $scope.sumPrice += parseInt(laptop.prise.replace( /\D/g , ''));
    //console.log(parseInt(laptop.prise.replace( /\D/g , '')));
    $scope.basket.push(laptop);
}

$scope.delInBasket = function(buy){
    $scope.sumPrice -= parseInt(buy.prise.replace( /\D/g , ''));
    $scope.basket.splice(buy,1)
}


});