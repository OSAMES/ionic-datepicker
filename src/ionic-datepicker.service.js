angular.module('ionic-datepicker.service', [])

  .service('IonicDatepickerService', function () {

    this.monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    this.getYearsList = function (from, to) {
      var yearsList = [];
      var minYear = 1900;
      var maxYear = 2100;

      minYear = from ? new Date(from).getFullYear() : minYear;
      maxYear = to ? new Date(to).getFullYear() : maxYear;

      for (var i = minYear; i <= maxYear; i++) {
        yearsList.push(i);
      }

      return yearsList;
    };

  this.getMonthsList = function (from, to) {
      var monthsList = [];
      var minMonth = 0;
      var maxMonth = 11;

      minMonth = from ? new Date(from).getMonth() : minMonth;
      maxMonth = to ? new Date(to).getMonth() : maxMonth;

      for (var i = minMonth; i <= maxMonth; i++) {
          monthsList.push(i);
      }

      return monthsList;
  };
  });
