(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[app Error] ',
        appTitle: 'app'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', '$translateProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, $translateProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
        
        $translateProvider.useLoader('
        $translateProvider.translations('en', {
            title: 'Internationalization',
            language: 'Language',
            languages: {
                'english': 'English',
                'spanish': 'Spanish',
                'french': 'French'
            },
            createdBy: 'Created by John Papa',
            First_Name: "First Name!!!",
            Last_Name: "Last Name",
            Age: "Age",
            Location: "Location",
            Messages: "Messages",
            People: "People"
        })
        .translations('es', {
            title: 'Internacionalización',
            language: 'Idioma',
            languages: {
                'english': 'Inglés',
                'spanish': 'Español',
                'french': 'Francés'
            },
            createdBy: 'Creado por Juan Padre',
            First_Name: "Nombre De Pila",
            Last_Name: "Apellido",
            Age: "Edad",
            Location: "Ubicación",
            Messages: "Mensajes",
            People: "Gente"
        })
        .preferredLanguage('es');
    }

})();
