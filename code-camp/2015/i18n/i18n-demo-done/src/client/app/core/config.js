(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configure);

    configure.$inject = [
        '$logProvider',
        'routerHelperProvider',
        'exceptionHandlerProvider',
        '$translateProvider'
    ];

    /* @ngInject */
    function configure($logProvider, routerHelperProvider,
                        exceptionHandlerProvider, $translateProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});

        $translateProvider.translations('en', {
            Title: 'Internationalization',
            Language: 'Language',
            Languages: {
                English: 'English',
                Spanish: 'Spanish',
                French: 'French'
            },
            CreatedBy: 'Created by John Papa',
            FirstName: 'First Name',
            LastName: 'Last Name',
            Age: 'Age',
            Location: 'Location',
            Messages: 'Messages',
            People: 'People',
            ConferenceDate: 'May 18 - 19, 2015',
            Dashboard: 'Dashboard'
        })
        .translations('es', {
            Title: 'Internacionalización',
            Language: 'Idioma',
            Languages: {
                English: 'Inglés',
                Spanish: 'Español',
                French: 'Francés'
            },
            CreatedBy: 'Creado por Juan Padre',
            FirstName: 'Nombre De Pila',
            LastName: 'Apellido',
            Age: 'Edad',
            Location: 'Ubicación',
            Messages: 'Mensajes',
            People: 'Gente',
            ConferenceDate: '18 a 19 mayo, 2015',
            Dashboard: 'Salpicadero'
        })
        .preferredLanguage('en');
    }

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
})();
