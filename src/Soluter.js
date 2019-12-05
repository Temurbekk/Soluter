(function (global, $){

    var Soluter = function(firstName, lastName, language){
        return new Soluter.init(firstName, lastName, language);
    }

    var supportedLanguages = ['english', 'spanish']

    Soluter.prototype = {};

    Soluter.init = function(firstName, lastName, language){

        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'english';
    }

    Soluter.init.prototype = Soluter.prototype;

    global.Soluter = global.$ol = Soluter;

}(window,jQuery));