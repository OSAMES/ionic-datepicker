angular.module('starter.controllers', [])

// Controleur general de l'application
  .controller('mainController', ['$scope', 'ionicDatePicker',
    function ($scope, ionicDatePicker) {

    /* Sunday first, day selection, popup */
    $scope.openDatePickerStandard = function() {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          $scope.datepicker1 = new Date(val);
        },
        mondayFirst: false,          //Optional
        closeOnSelect: false,       //Optional
        templateType: 'popup'       //Optional
      };

      ionicDatePicker.openDatePicker(ipObj1);
    };
      /* Monday first, day selection, popup */
      $scope.openDatePickerStandardMonday = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker1 = new Date(val);
          },
          mondayFirst: true,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'popup'       //Optional
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Sunday first, day selection, modal */
      $scope.openDatePickerStandardModal = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker1 = new Date(val);
          },
          mondayFirst: false,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'modal'       //Optional
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Monday first, day selection, modal */
      $scope.openDatePickerStandardModalMonday = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker1 = new Date(val);
          },
          mondayFirst: true,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'modal'       //Optional
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Sunday first, week selection, popup */
      $scope.openDatePickerWeek = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker2 = new Date(val);
          },
          mondayFirst: false,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'popup',       //Optional
          selectMode: 'week'
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Monday first, week selection, popup */
      $scope.openDatePickerWeekMonday = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker2 = new Date(val);
          },
          mondayFirst: true,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'popup',       //Optional
          selectMode: 'week'
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Sunday first, week selection, modal */
      $scope.openDatePickerWeekModal = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker2 = new Date(val);
          },
          mondayFirst: false,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'modal',       //Optional
          selectMode: 'week'
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Sunday first, week selection, modal */
      $scope.openDatePickerWeekModal = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker2 = new Date(val);
          },
          mondayFirst: false,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'modal',       //Optional
          selectMode: 'week'
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Sunday first, week selection, modal */
      $scope.openDatePickerWeekModal = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker2 = new Date(val);
          },
          mondayFirst: false,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'modal',       //Optional
          selectMode: 'week'
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Sunday first, week selection, modal */
      $scope.openDatePickerWeekModal = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker2 = new Date(val);
          },
          mondayFirst: false,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'modal',       //Optional
          selectMode: 'week'
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
      /* Monday first, week selection, modal */
      $scope.openDatePickerWeekModalMonday = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker2 = new Date(val);
          },
          mondayFirst: true,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'modal',       //Optional
          selectMode: 'week'
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };
    }]);
