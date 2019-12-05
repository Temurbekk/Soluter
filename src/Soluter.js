(function (global, $){

    var Soluter = function(firstName, lastName, language){
        return new Soluter.init(firstName, lastName, language);
    }

    Soluter.prototype = {};

    Soluter.init = function(firstName, lastName, language){

        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    Soluter.init.prototype = Soluter.prototype;

}(window,jQuery));