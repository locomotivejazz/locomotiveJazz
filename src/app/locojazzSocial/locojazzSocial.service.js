/**
 * Created by francescocorvino on 12/07/17.
 */
angular.module('locomotivejazz').service('socialService',function(){
    var service = this;

    service.vaiAlSito = function(){
        window.open("http://www.locomotivejazzfestival.it/", '_system', 'location=yes');
    };

    service.vaiFacebook = function(){
        window.open('https://www.facebook.com/LocomotiveJazzFestival/', '_system', 'location=no');
    };

    service.vaiTwitter = function(){
        console.log("Apro twitter");
        window.open('https://twitter.com/LJF_Locomotive', '_system', 'location=no');
    };

    service.vaiYouTube = function(){
        window.open('https://www.youtube.com/channel/UCaSjo3k5HfVsTy_grHXcMgA', '_system', 'location=no');
    };

    service.vaiInstantgram = function(){
        window.open('https://instagram.com/locomotive_jazz_festival/', '_system', 'location=no');
    };

    return service;
});