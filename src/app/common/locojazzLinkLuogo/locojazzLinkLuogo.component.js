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
        var BASE_PATH = "common/locojazzLinkLuogo/";
        this.templateUrl = BASE_PATH + "locojazzLinkLuogo.html";

        if(this.template){
            this.templateUrl = BASE_PATH + this.template + ".html";
        }

        this.naviga = function(){
            launchnavigator.navigate(this.luogo);
        };

    }


});