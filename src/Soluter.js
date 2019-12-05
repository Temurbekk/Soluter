(function (global, $) {

    var Soluter = function (firstName, lastName, language) {
        return new Soluter.init(firstName, lastName, language);
    }

    var supportedLanguages = ['english', 'russian'];

    var greetings = {
        english: 'Hello',
        russian: 'Здравствуйте'
    };
    var formalGreetings = {
        english: 'Greetings',
        russian: 'Приветствую'
    };

    var logMessages = {
        english: 'Logged in',
        russian: 'Вошли в систему'
    };

    Soluter.prototype = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Language not supported";
            }
        },

        greetins: function () {
            return greetings[this.language] + ' ' + this.fullName() + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ' ' + this.lastName + ',' + this.firstName;
        },

        greet: function (fornal) {
            var message;

            if (formal) { //if the message is formal, user will be greeted formally
                message = this.formalGreeting()
            } else {  //else the user will be greeted casually.
                message = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            //'this' refers to the calling object at execution time
            //Makes it so the method is chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang: function (langToSet) {
            this.language = langToSet;

            this.validate();

            return this;
        }



    };

    Soluter.init = function (firstName, lastName, language) {

        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'english';
    }

    Soluter.init.prototype = Soluter.prototype;

    global.Soluter = global.$ol = Soluter;

}(window, jQuery));