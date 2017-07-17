/**
 * Created by francescocorvino on 06/07/17.
 */
angular.module("locomotivejazz.common").component('locojazzLinkLuogo',{
    template: '<div ng-include="$ctrl.templateUrl"></div>',
    bindings:{
        luogo: '=',
        template: '@'
    },
    controller: function(){
        var BASE_PATH = "common/locojazzLinkLuogo/locojazzLinkLuogo";
        this.templateUrl = BASE_PATH + ".html";

        if(this.template){
            this.templateUrl = BASE_PATH + this.template + ".html";
        }

        this.naviga = function(){
            try {
                var split = this.luogo.urlMap.split('@');
                split = split[1].split(',');
                var cord = [split[0],
                     split[1]
                ];
                launchnavigator.navigate(cord);
            } catch(e){
                launchnavigator.navigate(this.luogo.title);
            }

        };

    }


});