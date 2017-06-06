angular.module('ionic-datepicker.service', [])

  .service('IonicDatepickerService', function () {

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

    // 12 items, not available months are null
    // item has "value" and "text" json keys
    this.getMonthsList = function (monthNames, from, to) {
      var monthsList = [];
      var minMonth = 0;
      var maxMonth = 11;

      minMonth = from ? new Date(from).getMonth() : minMonth;
      maxMonth = to ? new Date(to).getMonth() : maxMonth;

      for (var i = 0; i <= 11; i++) {
          if (i >= minMonth && i <= maxMonth) {
              monthsList.push({value: i, text: monthNames[i]});
          }
      }
      return monthsList;
    };

      this.getMonthsNames = function (configNames) {
          if (configNames && configNames.length === 12) {
              return configNames;
          }
          return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      };
  });
