/**
 * Created by francescocorvino on 06/07/17.
 */
angular.module("locomotivejazz.common").component('locojazzLinkLuogo',{
    templateUrl: 'common/locojazzLinkLuogo/locojazzLinkLuogo.html',
    bindings:{
        luogo: '='
    },
    controller: function(){

        this.naviga = function(){
            launchnavigator.navigate(this.luogo);
        };

    }


});