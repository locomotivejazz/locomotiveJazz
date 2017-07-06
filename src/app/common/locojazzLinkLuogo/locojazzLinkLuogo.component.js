/**
 * Created by francescocorvino on 06/07/17.
 */
angular.module("locomotivejazz").component('locojazzLinkLuogo',{
    templateUrl: 'locojazzLinkLuogo/locojazzLinkLuogo.html',
    binding:{
        luogo: '='
    },
    controller: function(){

        this.naviga = function(){
            launchnavigator.navigate(luogo);
        };

    }


});