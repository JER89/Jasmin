/*
Copyright (c) 2008-2015 Pivotal Labs
L'autorisation est par la présente accordée, gratuitement, à toute personne obtenant
une copie de ce logiciel et des fichiers de documentation associés (le
«Logiciel»), pour traiter le Logiciel sans restriction, y compris
sans limitation les droits d'utilisation, de copie, de modification, de fusion, de publication,
distribuer, concéder une sous-licence et / ou vendre des copies du Logiciel, et
permettre aux personnes à qui le Logiciel est fourni de le faire, sous réserve de
les conditions suivantes:
L'avis de droit d'auteur ci-dessus et cet avis d'autorisation doivent être
inclus dans toutes les copies ou parties substantielles du Logiciel.
LE LOGICIEL EST FOURNI "EN L'ÉTAT", SANS GARANTIE D'AUCUNE SORTE,
EXPRESSE OU IMPLICITE, Y COMPRIS MAIS SANS S'Y LIMITER LES GARANTIES DE
QUALITÉ MARCHANDE, ADAPTATION À UN USAGE PARTICULIER ET
NON-CONTREFAÇON. EN AUCUN CAS, LES AUTEURS OU TITULAIRES DES DROITS D'AUTEUR NE SERONT
RESPONSABLE DE TOUTE RÉCLAMATION, DOMMAGES OU AUTRE RESPONSABILITÉ, QUE CE SOIT DANS UNE ACTION
DE CONTRAT, DE TORT OU AUTRE, RÉSULTANT DE, HORS OU EN LIEN AVEC
AVEC LE LOGICIEL OU L'UTILISATION OU D'AUTRES ACTIONS DANS LE LOGICIEL.
*/
fonction  getJasmineRequireObj(){
  if  ( typeof  module !== 'undefined'  &&  module . exports){
     exportations de retour ;
    }  autre {
    la fenêtre.jasmineRequire  =  fenêtre . jasmineRequire  ||  { } ;
     fenêtre de retour . jasmin ;
  }
}

getJasmineRequireObj ( ) . console  =  fonction ( jRequire ,  j $ )  {
  j $ . ConsoleReporter = jRequire . ConsoleReporter ( )   ;
} ;

getJasmineRequireObj ( ) . ConsoleReporter  =  function ( )  {

  var  noopTimer  =  {
    début : function ( ) { } ,
    écoulé : function ( ) {  return  0 ;  }
  } ;

  function  ConsoleReporter ( options )  {
    var  print  =  options . imprimer ,
      showColors  =  options . showColors  ||  faux ,
      onComplete  =  options . onComplete  ||  function ( )  { } ,
      timer  =  options . minuterie  ||  noopTimer ,
      specCount ,
      failureCount ,
      failedSpecs  =  [ ] ,
      pendingCount ,
      ansi  =  {
        vert : '\ x1B [32m' ,
        rouge : '\ x1B [31m' ,
        jaune : '\ x1B [33m' ,
        aucun : '\ x1B [0m'
      },
      failedSuites  =  [ ] ;

    print ( 'ConsoleReporter est obsolète et sera supprimé dans une version ultérieure.' ) ;

    ceci . jasmineStarted  =  fonction ( ) {
      specCount  =  0 ;
      failureCount  =  0 ;
      pendingCount  =  0 ;
      print ( 'Démarré' ) ;
      printNewline ( ) ;
      minuterie . start ( ) ;
    } ;

    ceci . jasmineDone  =  fonction ( )  {
      printNewline ( );
      for  ( var  i  =  0 ;  i  <  failedSpecs . length ;  i ++ )  {
        specFailureDetails ( failedSpecs [ i ] ) ;
      }

      si ( specCount  >  0 )  {
        printNewline ( ) ;

        var  specCounts  =  specCount  +  ''  +  pluriel ( 'spec' ,  specCount )  +  ',' +
          failureCount + ' ' + plural('failure', failureCount);

        if (pendingCount) {
          specCounts += ', ' + pendingCount + ' pending ' + plural('spec', pendingCount);
        }

        print(specCounts);
      } else {
        print('No specs found');
      }

      printNewline();
      var seconds = timer.elapsed() / 1000;
      print('Finished in ' + seconds + ' ' + plural('second', seconds));
      printNewline();

      for(i = 0; i < failedSuites.length; i++) {
        suiteFailureDetails(failedSuites[i]);
      }

      onComplete(failureCount === 0);
    };

    this.specDone = function(result) {
      specCount++;

      if (result.status == 'pending') {
        pendingCount++;
        print(colored('yellow', '*'));
        return;
      }

      if (result.status == 'passed') {
        print(colored('green', '.'));
        return;
      }

      if (result.status == 'failed') {
        failureCount++;
        failedSpecs.push(result);
        print(colored('red', 'F'));
      }
    };

    this.suiteDone = function(result) {
      if (result.failedExpectations && result.failedExpectations.length > 0) {
        failureCount++;
        failedSuites.push(result);
      }
    };

    return this;

    function printNewline() {
      print('\n');
    }

    function colored(color, str) {
      return showColors ? (ansi[color] + str + ansi.none) : str;
    }

    function plural(str, count) {
      return count == 1 ? str : str + 's';
    }

    function repeat(thing, times) {
      var arr = [];
      for (var i = 0; i < times; i++) {
        arr.push(thing);
      }
      return arr;
    }

    function indent(str, spaces) {
      var lines = (str || '').split('\n');
      var newArr = [];
      for (var i = 0; i < lines.length; i++) {
        newArr.push(repeat(' ', spaces).join('') + lines[i]);
      }
      return newArr.join('\n');
    }

    function specFailureDetails(result) {
      printNewline();
      print(result.fullName);

      for (var i = 0; i < result.failedExpectations.length; i++) {
        var failedExpectation = result.failedExpectations[i];
        printNewline();
        print(indent(failedExpectation.message, 2));
        print(indent(failedExpectation.stack, 2));
      }

      printNewline();
    }

    function suiteFailureDetails(result) {
      for (var i = 0; i < result.failedExpectations.length; i++) {
        printNewline();
        print(colored('red', 'An error was thrown in an afterAll'));
        printNewline();
        print(colored('red', 'AfterAll ' + result.failedExpectations[i].message));

      }
      printNewline();
    }
  }

  return ConsoleReporter;
};