/**
 * Created by francescocorvino on 04/07/17.
 */
angular.module("locomotivejazz").component('locojazzSocial',{
    templateUrl: 'locojazzSocial/locojazzSocial.html',
    controller: function(socialService){
        this.social = socialService;
    }


});