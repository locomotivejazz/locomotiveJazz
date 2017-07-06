/**
 * Created by francescocorvino on 06/07/17.
 */
function parseDate(input) {
    var parts = input.split('-');
    return new Date(parts[2], parts[1]-1, parts[0]);
}

angular.module('locomotivejazz.common').filter("nextDates", function() {
    return function(items, param, from) {
        var df = parseDate(from);
        var result = [];
        for (var i=0; i<items.length; i++){
            var eventDate = new Date(items[i][param] * 1000);
            if (eventDate > df )  {
                result.push(items[i]);
            }
        }
        return result;
    };
});