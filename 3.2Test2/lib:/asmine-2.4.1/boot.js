/**
À partir de la version 2.0, ce fichier «démarre» Jasmine, effectuant toutes les initialisations nécessaires avant d'exécuter l'environnement chargé et toutes les spécifications d'un projet. Ce fichier doit être chargé après `jasmine.js` et` jasmine_html.js`, mais avant le chargement des fichiers source du projet ou des fichiers de spécifications. Ainsi, ce fichier peut également être utilisé pour personnaliser Jasmine pour un projet.
Si un projet utilise Jasmine via la distribution autonome, ce fichier peut être personnalisé directement. Si un projet utilise Jasmine via le [Ruby gem] [jasmine-gem], ce fichier peut être copié dans le répertoire de support via `jasmine copy_boot_js`. D'autres environnements (par exemple, Python) auront des mécanismes différents.
 L'emplacement de `boot.js` peut être spécifié et / ou remplacé dans` jasmine.yml`.
 [jasmine-gem]: http://github.com/pivotal/jasmine-gem
 */

( fonction ( )  {

  /**
   * ## Nécessite & amp; Instancier
   *
   * Nécessite les fichiers de base de Jasmine. Plus précisément, cela nécessite et attache tout le code de Jasmine à la référence «jasmine».
   */
  fenêtre . jasmine  =  jasmineRequire . core ( jasmineRequire ) ;

  /**
   * Étant donné que cela est exécuté dans un navigateur et que les résultats doivent s'afficher sur une page HTML, vous devez disposer du code Jasmine spécifique au HTML, en injectant la même référence.
   */
  jasmineRequire . html ( jasmin ) ;

  /**
   * Créez l'environnement Jasmine. Ceci est utilisé pour exécuter toutes les spécifications d'un projet.
   */
  var  env  =  jasmin . getEnv ( ) ;

  /**
   * ## L'interface globale
   *
   * Construisez les fonctions qui seront exposées en tant qu'interface publique Jasmine. Un projet peut personnaliser, renommer ou alias n'importe laquelle de ces fonctions comme il le souhaite, à condition que l'implémentation reste inchangée.
   */
  var  jasmineInterface  =  jasmineRequire . interface ( jasmin ,  env ) ;

  /**
   * Ajoutez toute l'interface publique / globale de Jasmine à la portée globale, afin qu'un projet puisse utiliser l'interface publique directement. Par exemple, appeler `describe` dans les spécifications au lieu de` jasmine.getEnv (). Describe`.
   */
  étendre ( fenêtre ,  jasmineInterface ) ;

  /**
   * ## Paramètres du Runner
   *
   * Code plus spécifique au navigateur - envelopper la chaîne de requête dans un objet et permettre d'obtenir / définir des paramètres à partir de l'interface utilisateur du runner.
   */

  var  queryString  =  nouveau  jasmin . QueryString ( {
    getWindowLocation : function ( )  {  fenêtre de retour  . emplacement ; } 
  } ) ;

  var  catchingExceptions  =  queryString . getParam ( "attraper" ) ;
  env . catchExceptions ( typeof  catchingExceptions  ===  "undefined" ? true : catchingExceptions ) ;

  var  throwingExpectationFailures  =  queryString . getParam ( "throwFailures" ) ;
  env . throwOnExpectationFailure ( throwingExpectationFailures ) ;

  var  random  =  queryString . getParam ( "aléatoire" ) ;
  env . randomizeTests ( aléatoire ) ;

  var seed = queryString.getParam("seed");
  if (seed) {
    env.seed(seed);
  }

  /**
   * ## Reporters
   * The `HtmlReporter` builds all of the HTML UI for the runner page. This reporter paints the dots, stars, and x's for specs, as well as all spec names and all failures (if any).
   */
  var htmlReporter = new jasmine.HtmlReporter({
    env: env,
    onRaiseExceptionsClick: function() { queryString.navigateWithNewParam("catch", !env.catchingExceptions()); },
    onThrowExpectationsClick: function() { queryString.navigateWithNewParam("throwFailures", !env.throwingExpectationFailures()); },
    onRandomClick: function() { queryString.navigateWithNewParam("random", !env.randomTests()); },
    addToExistingQueryString: function(key, value) { return queryString.fullStringWithNewParam(key, value); },
    getContainer: function() { return document.body; },
    createElement: function() { return document.createElement.apply(document, arguments); },
    createTextNode: function() { return document.createTextNode.apply(document, arguments); },
    timer: new jasmine.Timer()
  });

  /**
   * The `jsApiReporter` also receives spec results, and is used by any environment that needs to extract the results  from JavaScript.
   */
  env.addReporter(jasmineInterface.jsApiReporter);
  env.addReporter(htmlReporter);

  /**
   * Filter which specs will be run by matching the start of the full name against the `spec` query param.
   */
  var specFilter = new jasmine.HtmlSpecFilter({
    filterString: function() { return queryString.getParam("spec"); }
  });

  env.specFilter = function(spec) {
    return specFilter.matches(spec.getFullName());
  };

  /**
   * Setting up timing functions to be able to be overridden. Certain browsers (Safari, IE 8, phantomjs) require this hack.
   */
  window.setTimeout = window.setTimeout;
  window.setInterval = window.setInterval;
  window.clearTimeout = window.clearTimeout;
  window.clearInterval = window.clearInterval;

  /**
   * ## Execution
   *
   * Replace the browser window's `onload`, ensure it's called, and then run all of the loaded specs. This includes initializing the `HtmlReporter` instance and then executing the loaded Jasmine environment. All of this will happen after all of the specs are loaded.
   */
  var currentWindowOnload = window.onload;

  window.onload = function() {
    if (currentWindowOnload) {
      currentWindowOnload();
    }
    htmlReporter.initialize();
    env.execute();
  };

  /**
   * Helper function for readability above.
   */
  function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
  }

}());