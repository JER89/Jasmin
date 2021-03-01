/ *
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
* /
var  getJasmineRequireObj  =  ( fonction  ( jasmineGlobal )  {
  var  jasmineRequire ;

  if  ( typeof  module ! == 'undefined'  &&  module . exports )  {
    if  ( typeof  global ! == 'undefined' )  {
      jasmineGlobal  =  global ;
    }  else  {
      jasmineGlobal  =  { } ;
    }
    jasmineRequire  =  exportations ;
  }  else  {
    if  ( typeof  window ! == 'undefined'  &&  typeof  window . toString  ===  'function'  &&  window . toString ( )  ===  '[object GjsGlobal]' )  {
      jasmineGlobal  =  fenêtre ;
    }
    jasmineRequire  =  jasmineGlobal . jasmineRequire  =  jasmineGlobal . jasmineRequire  ||  { } ;
  }

  function  getJasmineRequire ( )  {
    return  jasmineRequire ;
  }

  getJasmineRequire ( ) . core  =  fonction ( jRequire )  {
    var  j $  =  { } ;

    jRequire . base ( j $ ,  jasmineGlobal ) ;
    j $ . util  =  jRequire . util ( ) ;
    j $ . erreurs  =  jRequire . erreurs ( ) ;
    j $ . Tout  =  jRequire . Tout ( j $ ) ;
    j $ . N'importe quoi  =  jRequire . Tout ( j $ ) ;
    j $ . CallTracker  =  jRequire . CallTracker ( ) ;
    j $ . MockDate  =  jRequire . MockDate ( ) ;
    j $ . Horloge  =  jRequire . Horloge ( ) ;
    j $ . DelayedFunctionScheduler  =  jRequire . DelayedFunctionScheduler ( ) ;
    j $ . Env  =  jRequire . Env ( j $ ) ;
    j $ . ExceptionFormatter  =  jRequire . ExceptionFormatter ( ) ;
    j $ . Attente  =  jRequire . Attente ( ) ;
    j $ . buildExpectationResult  =  jRequire . buildExpectationResult ( ) ;
    j $ . JsApiReporter  =  jRequire . JsApiReporter ( ) ;
    j $ . matchersUtil  =  jRequire . matchersUtil ( j $ ) ;
    j $ . ObjectContaining  =  jRequire . ObjectContaining ( j $ ) ;
    j $ . ArrayContaining  =  jRequire . ArrayContaining ( j $ ) ;
    j $ . pp  =  jRequire . pp ( j $ ) ;
    j $ . QueueRunner  =  jRequire . QueueRunner ( j $ ) ;
    j $ . ReportDispatcher  =  jRequire . ReportDispatcher ( ) ;
    j $ . Spec  =  jRequire . Spec ( j $ ) ;
    j $ . SpyRegistry  =  jRequire . SpyRegistry ( j $ ) ;
    j $ . SpyStrategy  =  jRequire . SpyStrategy ( ) ;
    j $ . StringMatching  =  jRequire . StringMatching ( j $ ) ;
    j $ . Suite  =  jRequire . Suite ( j $ ) ;
    j $ . Minuterie  =  jRequire . Minuterie ( ) ;
    j $ . TreeProcessor  =  jRequire . TreeProcessor ( ) ;
    j $ . version  =  jRequire . version ( ) ;
    j $ . Order  =  jRequire . Commande ( ) ;

    j $ . matchers  =  jRequire . requireMatchers ( jRequire ,  j $ ) ;

    return  j $ ;
  } ;

  return  getJasmineRequire ;
} ) ( ceci ) ;

getJasmineRequireObj ( ) . requireMatchers  =  fonction ( jRequire ,  j $ )  {
  var  availableMatchers  =  [
      'toBe' ,
      'toBeCloseTo' ,
      'toBeDefined' ,
      'toBeFalsy' ,
      'toBeGreaterThan' ,
      'toBeLessThan' ,
      «toBeNaN» ,
      'toBeNull' ,
      'toBeTruthy' ,
      'toBeUndefined' ,
      'toContain' ,
      'toEqual' ,
      'toHaveBeenCalled' ,
      'toHaveBeenCalledWith' ,
      'toHaveBeenCalledTimes' ,
      'toMatch' ,
      'toThrow' ,
      'toThrowError'
    ] ,
    matchers  =  { } ;

  for  ( var  i  =  0 ;  i  <  availableMatchers . length ;  i ++ )  {
    var  name  =  availableMatchers [ i ] ;
    matchers [ nom ]  =  jRequire [ nom ] ( j $ ) ;
  }

  retour des  matchers ;
} ;

getJasmineRequireObj ( ) . base  =  fonction ( j $ ,  jasmineGlobal )  {
  j $ . unimplementedMethod_  =  function ( )  {
    throw  new  Error ( 'méthode non implémentée' ) ;
  } ;

  j $ . MAX_PRETTY_PRINT_DEPTH  =  40 ;
  j $ . MAX_PRETTY_PRINT_ARRAY_LENGTH  =  100 ;
  j $ . DEFAULT_TIMEOUT_INTERVAL  =  5000 ;

  j $ . getGlobal  =  function ( )  {
    return  jasmineGlobal ;
  } ;

  j $ . getEnv  =  fonction ( options )  {
    var  env  =  j $ . currentEnv_  =  j $ . currentEnv_  ||  nouveau  j $ . Env ( options ) ;
    //jasmin. singletons ici (setTimeout bla bla).
    return  env ;
  } ;

  j $ . isArray_  =  function ( valeur )  {
    retourne  j $ . isA_ ( 'Array' ,  valeur ) ;
  } ;

  j $ . isString_  =  function ( valeur )  {
    retourne  j $ . isA_ ( 'String' ,  valeur ) ;
  } ;

  j $ . isNumber_  =  function ( valeur )  {
    retourne  j $ . isA_ ( 'Nombre' ,  valeur ) ;
  } ;

  j $ . isA_  =  function ( typeName ,  valeur )  {
    renvoyer un  objet . prototype . toString . apply ( valeur )  ===  '[objet'  +  typeName  +  ']' ;
  } ;

  j $ . isDomNode  =  fonction ( obj )  {
    return  obj . nodeType  >  0 ;
  } ;

  j $ . fnNameFor  =  function ( func )  {
    return  func . nom  ||  func . toString ( ) . match ( / ^ \ s * fonction \ s * ( \ w * ) \ s * \ ( / ) [ 1 ] ;
  } ;

  j $ . any  =  function ( clazz )  {
    retourne  nouveau  j $ . Tout ( clazz ) ;
  } ;

  j $ . n'importe quoi  =  fonction ( )  {
    retourne  nouveau  j $ . N'importe quoi ( ) ;
  } ;

  j $ . objectContaining  =  function ( exemple )  {
    retourne  nouveau  j $ . ObjectContaining ( exemple ) ;
  } ;

  j $ . stringMatching  =  function ( attendu )  {
    retourne  nouveau  j $ . StringMatching ( attendu ) ;
  } ;

  j $ . arrayContaining  =  function ( exemple )  {
    retourne  nouveau  j $ . ArrayContaining ( exemple ) ;
  } ;

  j $ . createSpy  =  function ( nom ,  originalFn )  {

    var  spyStrategy  =  nouveau  j $ . SpyStrategy ( {
        nom : nom ,
        fn : originalFn ,
        getSpy : function ( )  {  retour d'  espion ;  }
      } ) ,
      callTracker  =  nouveau  j $ . CallTracker ( ) ,
      espion  =  fonction ( )  {
        var  callData  =  {
          objet : ceci ,
          args : Array . prototype . tranche . appliquer ( arguments )
        } ;

        callTracker . track ( callData ) ;
        var  returnValue  =  stratégie d'espionnage . exec . appliquer ( ceci ,  arguments ) ;
        callData . returnValue  =  returnValue ;

        return  returnValue ;
      } ;

    for  ( var  prop  dans  originalFn )  {
      if  ( prop  ===  'et'  ||  prop  ===  'appelle' )  {
        throw  new  Error ( 'Les espions Jasmine écraseraient les propriétés \' et \ 'et \' calls \ 'sur l'objet espionné' ) ;
      }

      espion [ prop ]  =  originalFn [ prop ] ;
    }

    espion . et  =  spyStrategy ;
    espion . appels  =  callTracker ;

    retour  espion ;
  } ;

  j $ . isSpy  =  fonction ( putativeSpy )  {
    if  ( ! putativeSpy )  {
      retourne  faux ;
    }
    retourner  putativeSpy . et  instance de  j $ . SpyStrategy  &&
      putativeSpy . appelle  instanceof  j $ . CallTracker ;
  } ;

  j $ . createSpyObj  =  function ( baseName ,  methodNames )  {
    if  ( j $ . isArray_ ( baseName )  &&  j $ . util . isUndefined ( methodNames ) )  {
      methodNames  =  baseName ;
      baseName  =  'inconnu' ;
    }

    if  ( ! j $ . isArray_ ( methodNames )  ||  methodNames . length  ===  0 )  {
      throw  'createSpyObj nécessite un tableau non vide de noms de méthodes pour créer des espions' ;
    }
    var  obj  =  { } ;
    for  ( var  i  =  0 ;  i  <  methodNames . length ;  i ++ )  {
      obj [ methodNames [ i ] ]  =  j $ . createSpy ( baseName  +  '.'  +  methodNames [ i ] ) ;
    }
    return  obj ;
  } ;
} ;

getJasmineRequireObj ( ) . util  =  fonction ( )  {

  var  util  =  { } ;

  util . Hériter  =  fonction ( ChildClass ,  parentClass )  {
    var  Sous-classe  =  function ( )  {
    } ;
    Sous-classe . prototype  =  parentClass . prototype ;
    childClass . prototype  =  nouvelle  sous-classe ( ) ;
  } ;

  util . htmlEscape  =  fonction ( str )  {
    if  ( ! str )  {
      return  str ;
    }
    retour  str . remplacer ( / & / g ,  '& amp;' )
      . remplacer ( / </ g ,  '& lt;' )
      . remplacer ( /> / g ,  '& gt;' ) ;
  } ;

  util . argsToArray  =  fonction ( args )  {
    var  arrayOfArgs  =  [ ] ;
    for  ( var  i  =  0 ;  i  <  args . length ;  i ++ )  {
      arrayOfArgs . push ( args [ i ] ) ;
    }
    return  arrayOfArgs ;
  } ;

  util . isUndefined  =  fonction ( obj )  {
    return  obj  ===  void  0 ;
  } ;

  util . arrayContains  =  function ( tableau ,  recherche )  {
    var  i  =  tableau . longueur ;
    tandis que  ( i - )  {
      if  ( tableau [ i ]  ===  recherche )  {
        retourne  vrai ;
      }
    }
    retourne  faux ;
  } ;

  util . clone  =  fonction ( obj )  {
    if  ( Object . prototype . toString . apply ( obj )  ===  '[object Array]' )  {
      return  obj . tranche ( ) ;
    }

    var  cloné  =  { } ;
    for  ( var  prop  dans  obj )  {
      if  ( obj . hasOwnProperty ( prop ) )  {
        cloné [ prop ]  =  obj [ prop ] ;
      }
    }

    retour  cloné ;
  } ;

  return  util ;
} ;

getJasmineRequireObj ( ) . Spec  =  fonction ( j $ )  {
  fonction  Spec ( attrs )  {
    ceci . expectationFactory  =  attrs . expectationFactory ;
    ceci . resultCallback  =  attrs . resultCallback  ||  function ( )  { } ;
    ceci . id  =  attrs . id ;
    ceci . description  =  attrs . description  ||  '' ;
    ceci . queueableFn  =  attrs . queueableFn ;
    ceci . beforeAndAfterFns  =  attrs . beforeAndAfterFns  ||  function ( )  {  return  { avant : [ ] ,  après : [ ] } ;  } ;
    ceci . userContext  =  attrs . userContext  ||  function ( )  {  return  { } ;  } ;
    ceci . onStart  =  attrs . onStart  ||  function ( )  { } ;
    ceci . getSpecName  =  attrs . getSpecName  ||  function ( )  {  retour  '' ;  } ;
    ceci . expectationResultFactory  =  attrs . expectationResultFactory  ||  function ( )  {  } ;
    ceci . queueRunnerFactory  =  attrs . queueRunnerFactory  ||  function ( )  { } ;
    ceci . catchingExceptions  =  attrs . catchingExceptions  ||  function ( )  {  return  true ;  } ;
    ceci . throwOnExpectationFailure  = !! attrs . throwOnExpectationFailure ;

    if  ( ! this . queueableFn . fn )  {
      ceci . pend ( ) ;
    }

    ceci . résultat  =  {
      id : ceci . id ,
      description : ceci . description ,
      fullName : ceci . getFullName ( ) ,
      failedExpectations : [ ] ,
      PasséExpectations : [ ] ,
      pendingReason : ''
    } ;
  }

  Spec . prototype . addExpectationResult  =  function ( passé ,  données ,  isError )  {
    var  expectationResult  =  this . expectationResultFactory ( données ) ;
    if  ( réussi )  {
      ceci . résultat . Passé les attentes . push ( expectationResult ) ;
    }  else  {
      ceci . résultat . échouéAttentes . push ( expectationResult ) ;

      if  ( this . throwOnExpectationFailure  && ! isError )  {
        lancer un  nouveau  j $ . des erreurs . ExpectationFailed ( ) ;
      }
    }
  } ;

  Spec . prototype . expect  =  fonction ( réelle )  {
    renvoyer  ceci . expectationFactory ( réel ,  ceci ) ;
  } ;

  Spec . prototype . execute  =  function ( onComplete ,  activé )  {
    var  self  =  ceci ;

    ceci . onStart ( ceci ) ;

    if  ( ! this . isExecutable ( )  ||  this . marksPending  ||  enabled  ===  false )  {
      complet ( activé ) ;
      retour ;
    }

    var  fns  =  ceci . beforeAndAfterFns ( ) ;
    var  allFns  =  fns . avant . concat ( this . queueableFn ) . concat ( fns . après ) ;

    ceci . queueRunnerFactory ( {
      queueableFns : allFns ,
      onException : function ( )  {  self . onException . appliquer ( soi ,  arguments ) ;  } ,
      onComplete : terminé ,
      userContext : this . userContext ( )
    } ) ;

    fonction  terminée ( enabledAgain )  {
      soi . résultat . statut  =  soi . état ( enabledAgain ) ;
      soi . resultCallback ( auto . résultat ) ;

      if  ( onComplete )  {
        onComplete ( ) ;
      }
    }
  } ;

  Spec . prototype . onException  =  fonction  onException ( e )  {
    if  ( Spec . isPendingSpecException ( e ) )  {
      ceci . Pend ( extractCustomPendingMessage ( e ) ) ;
      retour ;
    }

    if  ( e  instanceof  j $ . errors . ExpectationFailed )  {
      retour ;
    }

    ceci . addExpectationResult ( false ,  {
      matcherName : '' ,
      passé : faux ,
      attendu : '' ,
      réel : '' ,
      erreur : e
    } ,  vrai ) ;
  } ;

  Spec . prototype . désactiver  =  fonction ( )  {
    ceci . désactivé  =  vrai ;
  } ;

  Spec . prototype . pend  =  fonction ( message )  {
    ceci . marquéPendant  =  vrai ;
    if  ( message )  {
      ceci . résultat . pendingReason  =  message ;
    }
  } ;

  Spec . prototype . getResult  =  function ( )  {
    ceci . résultat . statut  =  ceci . statut ( ) ;
    renvoyer  ceci . résultat ;
  } ;

  Spec . prototype . status  =  fonction ( activée )  {
    if  ( this . disabled  ||  enabled  ===  false )  {
      retourne  «désactivé» ;
    }

    if  ( this . marquéPending )  {
      retourne  «en attente» ;
    }

    if  ( this . result . failedExpectations . length  >  0 )  {
      retourne  «échoué» ;
    }  else  {
      retourne  «réussi» ;
    }
  } ;

  Spec . prototype . isExecutable  =  function ( )  {
    retour ! ceci . handicapé ;
  } ;

  Spec . prototype . getFullName  =  function ( )  {
    renvoyer  ceci . getSpecName ( this ) ;
  } ;

  var  extractCustomPendingMessage  =  function ( e )  {
    var  fullMessage  =  e . toString ( ) ,
        boilerplateStart  =  fullMessage . indexOf ( Spec . pendingSpecExceptionMessage ) ,
        warmplateEnd  = passe-  partout  +  Spec . pendingSpecExceptionMessage . longueur ;

    retourne  fullMessage . substr ( boilerplateEnd ) ;
  } ;

  Spec . pendingSpecExceptionMessage  =  '=> marqué En attente' ;

  Spec . isPendingSpecException  =  fonction ( e )  {
    retour !! ( e  &&  e . toString  &&  e . toString ( ) . indexOf ( Spec . pendingSpecExceptionMessage ) ! == - 1 ) ;
  } ;

  return  Spec ;
} ;

if  ( typeof  window  ==  void  0  &&  typeof  exports  ==  'object' )  {
  les exportations . Spec  =  jasmineRequire . Spec ;
}

/ * jshint au niveau du bit: false * /

getJasmineRequireObj ( ) . Order  =  function ( )  {
   Ordre des fonctions ( options )  {
    ceci . random  =  'random'  dans les  options ? options . aléatoire : vrai ;
    var  seed  =  ceci . semences  =  options . semences  ||  generateSeed ( ) ;
    ceci . sort  =  ceci . aléatoire ? randomOrder : naturalOrder ;

    function  naturalOrder ( éléments )  {
      retourner les  articles ;
    }

    function  randomOrder ( éléments )  {
      var  copie  =  éléments . tranche ( ) ;
      copie . sort ( fonction ( a ,  b )  {
        return  jenkinsHash ( graine  +  a . id )  -  jenkinsHash ( graine  +  b . id ) ;
      } ) ;
      renvoyer une  copie ;
    }

    function  generateSeed ( )  {
      return  String ( Math . random ( ) ) . tranche ( - 5 ) ;
    }

    // L'algorithme de hachage un par un de Bob Jenkins est une fonction de hachage non cryptographique
    // utilisé pour obtenir une sortie différente lorsque la clé change légèrement.
    // Nous utilisons votre retour pour trier les enfants de manière aléatoire de manière cohérente lorsque
    // utilisé en conjonction avec une graine

    function  jenkinsHash ( clé )  {
      var  hash ,  i ;
      for ( hash  =  i  =  0 ;  i  <  key . length ;  ++ i )  {
        hash  + =  clé . charCodeAt ( i ) ;
        hash  + =  ( hash  <<  10 ) ;
        hachage ^ = ( hachage  >>  6 ) ;
      }
      hash  + =  ( hash  <<  3 ) ;
      hachage ^ = ( hachage  >>  11 ) ;
      hachage  + =  ( hachage  <<  15 ) ;
      retourner le  hachage ;
    }

  }

   ordre de retour ;
} ;

getJasmineRequireObj ( ) . Env  =  fonction ( j $ )  {
  function  Env ( options )  {
    options  =  options  ||  { } ;

    var  self  =  ceci ;
    var  global  =  options . global  ||  j $ . getGlobal ( ) ;

    var  totalSpecsDefined  =  0 ;

    var  catchExceptions  =  true ;

    var  realSetTimeout  =  j $ . getGlobal ( ) . setTimeout ;
    var  realClearTimeout  =  j $ . getGlobal ( ) . clearTimeout ;
    ceci . horloge  =  nouveau  j $ . Clock ( global ,  function  ( )  {  return  new  j $ . DelayedFunctionScheduler ( ) ;  } ,  new  j $ . MockDate ( global ) ) ;

    var  runnableLookupTable  =  { } ;
    var  runnableResources  =  { } ;

    var  currentSpec  =  null ;
    var  currentExecutingSuites  =  [ ] ;
    var  currentDeclarationSuite  =  null ;
    var  throwOnExpectationFailure  =  false ;
    var  aléatoire  =  faux ;
    var  seed  =  null ;

    var  currentSuite  =  function ( )  {
      return  currentExecutingSuites [ currentExecutingSuites . longueur  -  1 ] ;
    } ;

    var  currentRunnable  =  function ( )  {
      retourne  currentSpec  ||  currentSuite ( ) ;
    } ;

    var  reporter  =  nouveau  j $ . ReportDispatcher ( [
      'jasmineStarted' ,
      «jasmineDone» ,
      'suiteStarted' ,
      'suiteDone' ,
      'specStarted' ,
      «specDone»
    ] ) ;

    ceci . specFilter  =  fonction ( )  {
      retourne  vrai ;
    } ;

    ceci . addCustomEqualityTester  =  fonction ( testeur )  {
      if ( ! currentRunnable ( ) )  {
        throw  new  Error ( 'Les égalités personnalisées doivent être ajoutées dans une fonction avant ou une spécification' ) ;
      }
      runnableResources [ currentRunnable ( ) . id ] . customEqualityTesters . pousser ( testeur ) ;
    } ;

    ceci . addMatchers  =  function ( matchersToAdd )  {
      if ( ! currentRunnable ( ) )  {
        throw  new  Error ( 'Les correspondants doivent être ajoutés dans une fonction avant ou une spécification' ) ;
      }
      var  customMatchers  =  runnableResources [ currentRunnable ( ) . id ] . customMatchers ;
      for  ( var  matcherName  dans  matchersToAdd )  {
        customMatchers [ nom_matcher ]  =  matchersToAdd [ nom_matcher ] ;
      }
    } ;

    j $ . Attente . addCoreMatchers ( j $ . matchers ) ;

    var  nextSpecId  =  0 ;
    var  getNextSpecId  =  function ( )  {
      retourne  'spec'  +  nextSpecId ++ ;
    } ;

    var  nextSuiteId  =  0 ;
    var  getNextSuiteId  =  function ( )  {
      retourne  'suite'  +  nextSuiteId ++ ;
    } ;

    var  expectationFactory  =  function ( réelle ,  spec )  {
      retourne  j $ . Attente . Usine ( {
        util : j $ . matchersUtil ,
        customEqualityTesters : runnableResources [ spec . id ] . customEqualityTesters ,
        customMatchers : runnableResources [ spec . id ] . customMatchers ,
        réel : réel ,
        addExpectationResult : addExpectationResult
      } ) ;

      function  addExpectationResult ( passé ,  résultat )  {
        retourner les  spécifications . addExpectationResult ( réussi ,  résultat ) ;
      }
    } ;

    var  defaultResourcesForRunnable  =  function ( id ,  parentRunnableId )  {
      var  resources  =  { espions : [ ] ,  customEqualityTesters : [ ] ,  customMatchers : { } } ;

      si ( runnableResources [ parentRunnableId ] ) {
        des ressources . customEqualityTesters  =  j $ . util . clone ( runnableResources [ parentRunnableId ] . customEqualityTesters ) ;
        des ressources . customMatchers  =  j $ . util . clone ( runnableResources [ parentRunnableId ] . customMatchers ) ;
      }

      runnableResources [ id ]  =  ressources ;
    } ;

    var  clearResourcesForRunnable  =  fonction ( id )  {
        spyRegistry . clearSpies ( ) ;
        supprimer  runnableResources [ id ] ;
    } ;

    var  beforeAndAfterFns  =  fonction ( suite )  {
       fonction de retour ( )  {
        var  befores  =  [ ] ,
          après  =  [ ] ;

        while ( suite )  {
          avant  =  avant . concat ( suite . beforeFns ) ;
          après  =  après . concat ( suite . afterFns ) ;

          suite  =  suite . parentSuite ;
        }

        retour  {
          avant : avant . inverse ( ) ,
          après : après
        } ;
      } ;
    } ;

    var  getSpecName  =  function ( spec ,  suite )  {
      retour  suite . getFullName ( )  +  ''  +  spéc . description ;
    } ;

    // TODO: nous pourrons peut-être simplement passer dans le fn au lieu de envelopper ici
    var  buildExpectationResult  =  j $ . buildExpectationResult ,
        exceptionFormatter  =  nouveau  j $ . ExceptionFormatter ( ) ,
        expectationResultFactory  =  fonction ( attrs )  {
          attrs . messageFormatter  =  exceptionFormatter . message ;
          attrs . stackFormatter  =  exceptionFormatter . pile ;

          return  buildExpectationResult ( attrs ) ;
        } ;

    // TODO: corrigez ce nom, et voici où la valeur entre en jeu
    ceci . catchExceptions  =  function ( valeur )  {
      catchExceptions  = !! valeur ;
      return  catchExceptions ;
    } ;

    ceci . catchingExceptions  =  function ( )  {
      return  catchExceptions ;
    } ;

    var  maximumSpecCallbackDepth  =  20 ;
    var  currentSpecCallbackDepth  =  0 ;

    function  clearStack ( fn )  {
      currentSpecCallbackDepth ++ ;
      if  ( currentSpecCallbackDepth > = maximumSpecCallbackDepth )  {
        currentSpecCallbackDepth  =  0 ;
        realSetTimeout ( fn ,  0 ) ;
      }  else  {
        fn ( ) ;
      }
    }

    var  catchException  =  fonction ( e )  {
      retourne  j $ . Spec . isPendingSpecException ( e )  ||  catchExceptions ;
    } ;

    ceci . throwOnExpectationFailure  =  function ( valeur )  {
      throwOnExpectationFailure  = !! valeur ;
    } ;

    ceci . throwingExpectationFailures  =  function ( )  {
      return  throwOnExpectationFailure ;
    } ;

    ceci . randomizeTests  =  function ( valeur )  {
      aléatoire  = !! valeur ;
    } ;

    ceci . randomTests  =  function ( )  {
      retourner au  hasard ;
    } ;

    ceci . seed  =  fonction ( valeur )  {
      if  ( valeur )  {
        graine  =  valeur ;
      }
      retourner la  graine ;
    } ;

    var  queueRunnerFactory  =  fonction ( options )  {
      options . catchException  =  catchException ;
      options . clearStack  =  options . clearStack  ||  clearStack ;
      options . timeout  =  { setTimeout : realSetTimeout ,  clearTimeout : realClearTimeout } ;
      options . échouer  =  soi . échouer ;

      nouveau  j $ . QueueRunner ( options ) . exécuter ( ) ;
    } ;

    var  topSuite  =  nouveau  j $ . Suite ( {
      env : ceci ,
      id : getNextSuiteId ( ) ,
      description : 'Jasmine__TopLevel__Suite' ,
      queueRunner : queueRunnerFactory
    } ) ;
    runnableLookupTable [ topSuite . id ]  =  topSuite ;
    defaultResourcesForRunnable ( topSuite . id ) ;
    currentDeclarationSuite  =  topSuite ;

    ceci . topSuite  =  fonction ( )  {
      return  topSuite ;
    } ;

    ceci . execute  =  function ( runnablesToRun )  {
      if ( ! runnablesToRun )  {
        if  ( focusRunnables . longueur )  {
          runnablesToRun  =  focusedRunnables ;
        }  else  {
          runnablesToRun  =  [ topSuite . id ] ;
        }
      }

       ordre  var =  nouveau  j $ . Commande ( {
        aléatoire : aléatoire ,
        graine : graine
      } ) ;

       processeur  var =  nouveau  j $ . TreeProcessor ( {
        arbre : topSuite ,
        runnableIds : runnablesToRun ,
        queueRunnerFactory : queueRunnerFactory ,
        nodeStart : fonction ( suite )  {
          currentExecutingSuites . pousser ( suite ) ;
          defaultResourcesForRunnable ( suite . id ,  suite . parentSuite . id ) ;
          journaliste . suiteStarted ( suite . résultat ) ;
        } ,
        nodeComplete : fonction ( suite ,  résultat )  {
          if  ( ! suite . disabled )  {
            clearResourcesForRunnable ( suite . id ) ;
          }
          currentExecutingSuites . pop ( ) ;
          journaliste . suiteDone ( résultat ) ;
        } ,
        orderChildren : function ( nœud )  {
           ordre de retour . sort ( noeud . enfants ) ;
        }
      } ) ;

      if ( ! processor . processTree ( ) . valid )  {
        throw  new  Error ( 'Ordre invalide: provoquerait l'exécution d'un beforeAll ou afterAll plusieurs fois' ) ;
      }

      journaliste . jasmineStarted ( {
        totalSpecsDefined : totalSpecsDefined
      } ) ;

      processeur . exécuter ( fonction ( )  {
        journaliste . jasmineDone ( {
          ordre : ordre
        } ) ;
      } ) ;
    } ;

    ceci . addReporter  =  function ( reporterToAdd )  {
      journaliste . addReporter ( reporterToAdd ) ;
    } ;

    var  spyRegistry  =  nouveau  j $ . SpyRegistry ( { currentSpies : function ( )  {
      if ( ! currentRunnable ( ) )  {
        throw  new  Error ( 'Les espions doivent être créés dans une fonction avant ou une spécification' ) ;
      }
      retour  runnableResources [ currentRunnable ( ) . id ] . les espions ;
    } } ) ;

    ceci . spyOn  =  fonction ( )  {
      retourne  spyRegistry . spyOn . appliquer ( spyRegistry ,  arguments ) ;
    } ;

    var  suiteFactory  =  fonction ( description )  {
      var  suite  =  nouveau  j $ . Suite ( {
        env : soi ,
        id : getNextSuiteId ( ) ,
        description : description ,
        parentSuite : currentDeclarationSuite ,
        expectationFactory : expectationFactory ,
        expectationResultFactory : expectationResultFactory ,
        throwOnExpectationFailure : throwOnExpectationFailure
      } ) ;

      runnableLookupTable [ suite . id ]  =  suite ;
      retour  suite ;
    } ;

    ceci . describe  =  function ( description ,  specDefinitions )  {
      var  suite  =  suiteFactory ( description ) ;
      if  ( specDefinitions . longueur  >  0 )  {
        throw  new  Error ( 'describe ne s'attend pas à un paramètre terminé' ) ;
      }
      if  ( currentDeclarationSuite . markPending )  {
        suite . pend ( ) ;
      }
      addSpecsToSuite ( suite ,  specDefinitions ) ;
      retour  suite ;
    } ;

    ceci . xdescribe  =  function ( description ,  specDefinitions )  {
      var  suite  =  suiteFactory ( description ) ;
      suite . pend ( ) ;
      addSpecsToSuite ( suite ,  specDefinitions ) ;
      retour  suite ;
    } ;

    var  focusRunnables  =  [ ] ;

    ceci . fdescribe  =  function ( description ,  specDefinitions )  {
      var  suite  =  suiteFactory ( description ) ;
      suite . isFocused  =  vrai ;

      FocusRunnables . push ( suite . id ) ;
      unfocusAncestor ( ) ;
      addSpecsToSuite ( suite ,  specDefinitions ) ;

      retour  suite ;
    } ;

    function  addSpecsToSuite ( suite ,  specDefinitions )  {
      var  parentSuite  =  currentDeclarationSuite ;
      parentSuite . addChild ( suite ) ;
      currentDeclarationSuite  =  suite ;

      var  declarationError  =  null ;
      essayez  {
        specDefinitions . appel ( suite ) ;
      }  catch  ( e )  {
        declarationError  =  e ;
      }

      if  ( declarationError )  {
        soi . it ( 'a rencontré une exception de déclaration' ,  function ( )  {
          throw  declarationError ;
        } ) ;
      }

      currentDeclarationSuite  =  parentSuite ;
    }

    function  findFocusedAncestor ( suite )  {
      while  ( suite )  {
        if  ( suite . isFocused )  {
          retour  suite . id ;
        }
        suite  =  suite . parentSuite ;
      }

      return  null ;
    }

    function  unfocusAncestor ( )  {
      var  focalAncestor  =  findFocusedAncestor ( currentDeclarationSuite ) ;
      if  ( focalAncestor )  {
        for  ( var  i  =  0 ;  i  <  focaliséRunnables . longueur ;  i ++ )  {
          if  ( focusRunnables [ i ]  ===  focalAncestor )  {
            FocusRunnables . épissure ( i ,  1 ) ;
            pause ;
          }
        }
      }
    }

    var  specFactory  =  function ( description ,  fn ,  suite ,  timeout )  {
      totalSpecsDefined ++ ;
      var  spec  =  nouveau  j $ . Spéc. ( {
        id : getNextSpecId ( ) ,
        beforeAndAfterFns : beforeAndAfterFns ( suite ) ,
        expectationFactory : expectationFactory ,
        resultCallback : specResultCallback ,
        getSpecName : fonction ( spécification )  {
          return  getSpecName ( spec ,  suite ) ;
        } ,
        onStart : specStarted ,
        description : description ,
        expectationResultFactory : expectationResultFactory ,
        queueRunnerFactory : queueRunnerFactory ,
        userContext : function ( )  {  suite de retour  . clonedSharedUserContext ( ) ; } , 
        queueableFn : {
          fn : fn ,
          timeout : function ( )  {  délai de retour  || j $ . DEFAULT_TIMEOUT_INTERVAL ; }   
        } ,
        throwOnExpectationFailure : throwOnExpectationFailure
      } ) ;

      runnableLookupTable [ spéc . id ]  =  spécification ;

      if  ( ! self . specFilter ( spec ) )  {
        spec . désactiver ( ) ;
      }

      return  spec ;

      function  specResultCallback ( résultat )  {
        clearResourcesForRunnable ( spéc . id ) ;
        currentSpec  =  null ;
        journaliste . specDone ( résultat ) ;
      }

      function  specStarted ( spec )  {
        currentSpec  =  spec ;
        defaultResourcesForRunnable ( spéc . id ,  suite . id ) ;
        journaliste . specStarted ( spec . result ) ;
      }
    } ;

    ceci . it  =  function ( description ,  fn ,  timeout )  {
      var  spec  =  specFactory ( description ,  fn ,  currentDeclarationSuite ,  timeout ) ;
      if  ( currentDeclarationSuite . markPending )  {
        spec . pend ( ) ;
      }
      currentDeclarationSuite . addChild ( spécification ) ;
      return  spec ;
    } ;

    ceci . xit  =  fonction ( )  {
      var  spec  =  ceci . il . appliquer ( ceci ,  arguments ) ;
      spec . pend ( 'Temporairement désactivé avec xit' ) ;
      return  spec ;
    } ;

    ceci . fit  =  function ( description ,  fn ,  timeout ) {
      var  spec  =  specFactory ( description ,  fn ,  currentDeclarationSuite ,  timeout ) ;
      currentDeclarationSuite . addChild ( spécification ) ;
      FocusRunnables . push ( spéc . id ) ;
      unfocusAncestor ( ) ;
      return  spec ;
    } ;

    ceci . expect  =  fonction ( réelle )  {
      if  ( ! currentRunnable ( ) )  {
        throw  new  Error ( '\' expect \ 'a été utilisé quand il n'y avait pas de spécification actuelle, cela pourrait être parce qu'un test asynchrone a expiré' ) ;
      }

      retourne  currentRunnable ( ) . attendre ( réel ) ;
    } ;

    ceci . beforeEach  =  function ( beforeEachFunction ,  timeout )  {
      currentDeclarationSuite . beforeEach ( {
        fn : beforeEachFunction ,
        timeout : function ( )  {  délai de retour  || j $ . DEFAULT_TIMEOUT_INTERVAL ; }   
      } ) ;
    } ;

    ceci . beforeAll  =  function ( beforeAllFunction ,  timeout )  {
      currentDeclarationSuite . beforeAll ( {
        fn : beforeAllFunction ,
        timeout : function ( )  {  délai de retour  || j $ . DEFAULT_TIMEOUT_INTERVAL ; }   
      } ) ;
    } ;

    ceci . afterEach  =  function ( afterEachFunction ,  timeout )  {
      currentDeclarationSuite . afterEach ( {
        fn : afterEachFunction ,
        timeout : function ( )  {  délai de retour  || j $ . DEFAULT_TIMEOUT_INTERVAL ; }   
      } ) ;
    } ;

    ceci . afterAll  =  function ( afterAllFunction ,  timeout )  {
      currentDeclarationSuite . afterAll ( {
        fn : afterAllFunction ,
        timeout : function ( )  {  délai de retour  || j $ . DEFAULT_TIMEOUT_INTERVAL ; }   
      } ) ;
    } ;

    ceci . en attente  =  fonction ( message )  {
      var  fullMessage  =  j $ . Spec . pendingSpecExceptionMessage ;
      if ( message )  {
        fullMessage  + =  message ;
      }
      throw  fullMessage ;
    } ;

    ceci . fail  =  fonction ( erreur )  {
      var  message  =  'Échec' ;
      if  ( erreur )  {
        message  + =  ':' ;
        message  + =  erreur . message  ||  erreur ;
      }

      currentRunnable ( ) . addExpectationResult ( false ,  {
        matcherName : '' ,
        passé : faux ,
        attendu : '' ,
        réel : '' ,
        message : message ,
        erreur : erreur  &&  erreur . message ? erreur : null
      } ) ;
    } ;
  }

  return  Env ;
} ;

getJasmineRequireObj ( ) . JsApiReporter  =  fonction ( )  {

  var  noopTimer  =  {
    début : function ( ) { } ,
    écoulé : function ( ) {  return  0 ;  }
  } ;

  function  JsApiReporter ( options )  {
    var  timer  =  options . minuterie  ||  noopTimer ,
        status  =  'chargé' ;

    ceci . commencé  =  faux ;
    ceci . fini  =  faux ;
    ceci . runDetails  =  { } ;

    ceci . jasmineStarted  =  function ( )  {
      ceci . commencé  =  vrai ;
      status  =  'commencé' ;
      minuterie . start ( ) ;
    } ;

    var  executionTime ;

    ceci . jasmineDone  =  fonction ( runDetails )  {
      ceci . fini  =  vrai ;
      ceci . runDetails  =  runDetails ;
      executionTime  =  minuterie . écoulé ( ) ;
      status  =  'done' ;
    } ;

    ceci . état  =  fonction ( )  {
       statut de retour ;
    } ;

    var  suites  =  [ ] ,
      suites_hash  =  { } ;

    ceci . suiteStarted  =  fonction ( résultat )  {
      suites_hash [ résultat . id ]  =  résultat ;
    } ;

    ceci . suiteDone  =  fonction ( résultat )  {
      storeSuite ( résultat ) ;
    } ;

    ceci . suiteResults  =  function ( index ,  longueur )  {
      retour  suites . tranche ( index ,  index  +  longueur ) ;
    } ;

    function  storeSuite ( résultat )  {
      suites . push ( résultat ) ;
      suites_hash [ résultat . id ]  =  résultat ;
    }

    ceci . suites  =  fonction ( )  {
      return  suites_hash ;
    } ;

    var  specs  =  [ ] ;

    ceci . specDone  =  fonction ( résultat )  {
      spécifications . push ( résultat ) ;
    } ;

    ceci . specResults  =  fonction ( index ,  longueur )  {
      retour des  spécifications . tranche ( index ,  index  +  longueur ) ;
    } ;

    ceci . specs  =  fonction ( )  {
      retour des  spécifications ;
    } ;

    ceci . executionTime  =  function ( )  {
      return  executionTime ;
    } ;

  }

  return  JsApiReporter ;
} ;

getJasmineRequireObj ( ) . CallTracker  =  fonction ( )  {

  function  CallTracker ( )  {
    var  appelle  =  [ ] ;

    ceci . track  =  fonction ( contexte )  {
      appels . pousser ( contexte ) ;
    } ;

    ceci . any  =  function ( )  {
      retour !! appels . longueur ;
    } ;

    ceci . count  =  fonction ( )  {
      retour des  appels . longueur ;
    } ;

    ceci . argsFor  =  function ( index )  {
      var  call  =  appelle [ index ] ;
      retourner l'  appel ? appeler . args : [ ] ;
    } ;

    ceci . tout  =  fonction ( )  {
      retour des  appels ;
    } ;

    ceci . allArgs  =  fonction ( )  {
      var  callArgs  =  [ ] ;
      for ( var  i  =  0 ;  i  <  calls . length ;  i ++ ) {
        callArgs . push ( appelle [ i ] . args ) ;
      }

      return  callArgs ;
    } ;

    ceci . premier  =  fonction ( )  {
      retour des  appels [ 0 ] ;
    } ;

    ceci . mostRecent  =  function ( )  {
      retour des  appels [ appels . longueur  -  1 ] ;
    } ;

    ceci . reset  =  fonction ( )  {
      appels  =  [ ] ;
    } ;
  }

  return  CallTracker ;
} ;

getJasmineRequireObj ( ) . Horloge  =  fonction ( )  {
  function  Clock ( global ,  delayFunctionSchedulerFactory ,  mockDate )  {
    var  self  =  ceci ,
      realTimingFunctions  =  {
        setTimeout : global . setTimeout ,
        clearTimeout : global . clearTimeout ,
        setInterval : global . setInterval ,
        clearInterval : global . clearInterval
      } ,
      fakeTimingFunctions  =  {
        setTimeout : setTimeout ,
        clearTimeout : clearTimeout ,
        setInterval : setInterval ,
        clearInterval : clearInterval
      } ,
      installé  =  faux ,
      delayFunctionScheduler ,
      minuterie ;


    soi . install  =  fonction ( )  {
      if ( ! originalTimingFunctionsIntact ( ) )  {
        throw  new  Error ( 'Jasmine Clock n'a pas pu être installé sur les fonctions de minuterie globale personnalisées. L'horloge est-elle déjà installée?' ) ;
      }
      replace ( global ,  fakeTimingFunctions ) ;
      timer  =  fakeTimingFunctions ;
      delayFunctionScheduler  =  delayFunctionSchedulerFactory ( ) ;
      installé  =  vrai ;

      revenir  soi-même ;
    } ;

    soi . désinstaller  =  function ( )  {
      delayFunctionScheduler  =  null ;
      mockDate . désinstaller ( ) ;
      replace ( global ,  realTimingFunctions ) ;

      timer  =  realTimingFunctions ;
      installé  =  faux ;
    } ;

    soi . withMock  =  function ( fermeture )  {
      ceci . installer ( ) ;
      essayez  {
        fermeture ( ) ;
      }  enfin  {
        ceci . désinstaller ( ) ;
      }
    } ;

    soi . mockDate  =  fonction ( initialDate )  {
      mockDate . install ( initialDate ) ;
    } ;

    soi . setTimeout  =  function ( fn ,  delay ,  params )  {
      if  ( legacyIE ( ) )  {
        if  ( arguments . longueur  >  2 )  {
          throw  new  Error ( 'IE <9 ne peut pas prendre en charge les paramètres supplémentaires pour setTimeout sans polyfill' ) ;
        }
        retour de la  minuterie . setTimeout ( fn ,  délai ) ;
      }
       fonction de retour . prototype . appliquer . apply ( timer . setTimeout ,  [ global ,  arguments ] ) ;
    } ;

    soi . setInterval  =  function ( fn ,  delay ,  params )  {
      if  ( legacyIE ( ) )  {
        if  ( arguments . longueur  >  2 )  {
          throw  new  Error ( 'IE <9 ne peut pas prendre en charge les paramètres supplémentaires de setInterval sans polyfill' ) ;
        }
        retour de la  minuterie . setInterval ( fn ,  délai ) ;
      }
       fonction de retour . prototype . appliquer . apply ( timer . setInterval ,  [ global ,  arguments ] ) ;
    } ;

    soi . clearTimeout  =  fonction ( id )  {
       fonction de retour . prototype . appeler . apply ( timer . clearTimeout ,  [ global ,  id ] ) ;
    } ;

    soi . clearInterval  =  fonction ( id )  {
       fonction de retour . prototype . appeler . apply ( timer . clearInterval ,  [ global ,  id ] ) ;
    } ;

    soi . tick  =  fonction ( millis )  {
      if  ( installé )  {
        mockDate . tick ( millis ) ;
        delayFunctionScheduler . tick ( millis ) ;
      }  else  {
        throw  new  Error ( 'L'horloge fictive n'est pas installée, utilisez jasmine.clock (). install ()' ) ;
      }
    } ;

    revenir  soi-même ;

    function  originalTimingFunctionsIntact ( )  {
      retour  global . setTimeout  ===  realTimingFunctions . setTimeout  &&
        global . clearTimeout  ===  realTimingFunctions . clearTimeout  &&
        global . setInterval  ===  realTimingFunctions . setInterval  &&
        global . clearInterval  ===  realTimingFunctions . clearInterval ;
    }

    function  legacyIE ( )  {
      // si ces méthodes sont polyfilled, apply sera présent
      retour ! ( realTimingFunctions . setTimeout  ||  realTimingFunctions . setInterval ) . appliquer ;
    }

    function  replace ( dest ,  source )  {
      for  ( var  prop  dans la  source )  {
        dest [ prop ]  =  source [ prop ] ;
      }
    }

    function  setTimeout ( fn ,  délai )  {
      return  delayFunctionScheduler . scheduleFunction ( fn ,  delay ,  argSlice ( arguments ,  2 ) ) ;
    }

    function  clearTimeout ( id )  {
      return  delayFunctionScheduler . removeFunctionWithId ( id ) ;
    }

    function  setInterval ( fn ,  intervalle )  {
      return  delayFunctionScheduler . scheduleFunction ( fn ,  interval ,  argSlice ( arguments ,  2 ) ,  true ) ;
    }

    function  clearInterval ( id )  {
      return  delayFunctionScheduler . removeFunctionWithId ( id ) ;
    }

    function  argSlice ( argsObj ,  n )  {
      retourne  Array . prototype . tranche . appel ( argsObj ,  n ) ;
    }
  }

  retour  horloge ;
} ;

getJasmineRequireObj ( ) . DelayedFunctionScheduler  =  function ( )  {
  function  DelayedFunctionScheduler ( )  {
    var  self  =  ceci ;
    var  planifiéLookup  =  [ ] ;
    var  SchedulerFunctions  =  { } ;
    var  currentTime  =  0 ;
    var  retardéFnCount  =  0 ;

    soi . tick  =  fonction ( millis )  {
      millis  =  millis  ||  0 ;
      var  endTime  =  currentTime  +  millis ;

      runScheduledFunctions ( endTime ) ;
      currentTime  =  endTime ;
    } ;

    soi . scheduleFunction  =  function ( funcToCall ,  millis ,  paramètres ,  récurrent ,  timeoutKey ,  runAtMillis )  {
      var  f ;
      if  ( typeof ( funcToCall )  ===  'chaîne' )  {
        / * jshint evil: vrai * /
        f  =  function ( )  {  return  eval ( funcToCall ) ;  } ;
        / * jshint evil: false * /
      }  else  {
        f  =  funcToCall ;
      }

      millis  =  millis  ||  0 ;
      timeoutKey  =  timeoutKey  ||  ++ retardéFnCount ;
      runAtMillis  =  runAtMillis  ||  ( currentTime  +  millis ) ;

      var  funcToSchedule  =  {
        runAtMillis : runAtMillis ,
        funcToCall : f ,
        récurrent : récurrent ,
        paramètres : paramètres ,
        timeoutKey : timeoutKey ,
        millis : millis
      } ;

      if  ( runAtMillis  dans  planifiéFunctions )  {
        scheduledFunctions [ runAtMillis ] . push ( funcToSchedule ) ;
      }  else  {
        scheduledFunctions [ runAtMillis ]  =  [ funcToSchedule ] ;
        SchedLookup . push ( runAtMillis ) ;
        SchedLookup . sort ( fonction  ( a ,  b )  {
          retourne  a  -  b ;
        } ) ;
      }

      return  timeoutKey ;
    } ;

    soi . removeFunctionWithId  =  function ( timeoutKey )  {
      for  ( var  runAtMillis  dans  planifiéFunctions )  {
        var  funcs  =  planifiéFunctions [ runAtMillis ] ;
        var  i  =  indexOfFirstToPass ( funcs ,  function  ( func )  {
          return  func . timeoutKey  ===  timeoutKey ;
        } ) ;

        si  ( i  >  - 1 )  {
          if  ( funcs . length  ===  1 )  {
            supprimer les fonctions de  planification [ runAtMillis ] ;
            deleteFromLookup ( runAtMillis ) ;
          }  else  {
            funcs . épissure ( i ,  1 ) ;
          }

          // les intervalles sont replanifiés lorsqu'ils sont exécutés, donc il n'y a jamais plus
          // qu'une seule fonction planifiée avec un timeoutKey donné
          pause ;
        }
      }
    } ;

    revenir  soi-même ;

    function  indexOfFirstToPass ( tableau ,  testFn )  {
       indice  var =  - 1 ;

      for  ( var  i  =  0 ;  i  <  array . length ;  ++ i )  {
        if  ( testFn ( tableau [ i ] ) )  {
          index  =  i ;
          pause ;
        }
      }

       indice de retour ;
    }

    function  deleteFromLookup ( clé )  {
      var  value  =  Number ( clé ) ;
      var  i  =  indexOfFirstToPass ( planifiéLookup ,  fonction  ( millis )  {
        retour  Millis  de  la valeur ;
      } ) ;

      si  ( i  >  - 1 )  {
        SchedLookup . épissure ( i ,  1 ) ;
      }
    }

    fonction  replanifier ( planifiéFn )  {
      soi . scheduleFunction ( scheduledFn . funcToCall ,
        planifiéFn . millis ,
        planifiéFn . paramètres ,
        vrai ,
        planifiéFn . timeoutKey ,
        planifiéFn . runAtMillis  +  planifiéFn . millis ) ;
    }

    function  forEachFunction ( funcsToRun ,  rappel )  {
      for  ( var  i  =  0 ;  i  <  funcsToRun . length ;  ++ i )  {
        rappel ( funcsToRun [ i ] ) ;
      }
    }

    function  runScheduledFunctions ( endTime )  {
      si  ( scheduledLookup . longueur  ===  0  ||  scheduledLookup [ 0 ]  >  endTime )  {
        retour ;
      }

      faire  {
        currentTime  =  planifiéLookup . shift ( ) ;

        var  funcsToRun  =  scheduledFunctions [ currentTime ] ;
        supprimer les fonctions de  planification [ currentTime ] ;

        forEachFunction ( funcsToRun ,  function ( funcToRun )  {
          if  ( funcToRun . récurrent )  {
            replanifier ( funcToRun ) ;
          }
        } ) ;

        forEachFunction ( funcsToRun ,  function ( funcToRun )  {
          funcToRun . funcToCall . apply ( null ,  funcToRun . params  ||  [ ] ) ;
        } ) ;
      }  Tandis que  ( scheduledLookup . Longueur  >  0  &&
              // vérifier d'abord si nous sommes hors de temps empêche setTimeout (0)
              // programmé dans un funcToRun pour forcer une itération supplémentaire
                 currentTime ! == endTime   &&
                 scheduledLookup [ 0 ] <= endTime ) ;
    }
  }

  return  DelayedFunctionScheduler ;
} ;

getJasmineRequireObj ( ) . ExceptionFormatter  =  function ( )  {
  function  ExceptionFormatter ( )  {
    ceci . message  =  fonction ( erreur )  {
      var  message  =  '' ;

      if  ( error . name  &&  error . message )  {
        message  + =  erreur . nom  +  ':'  +  erreur . message ;
      }  else  {
        message  + =  erreur . toString ( )  +  'jeté' ;
      }

      if  ( error . fileName  ||  error . sourceURL )  {
        message  + =  'in'  +  ( error . fileName  ||  error . sourceURL ) ;
      }

      if  ( error . line  ||  error . lineNumber )  {
        message  + =  '(ligne'  +  ( erreur . ligne  ||  erreur . lineNumber )  +  ')' ;
      }

       message de retour ;
    } ;

    ceci . pile  =  fonction ( erreur )  {
       erreur de retour ? erreur . pile : nul ;
    } ;
  }

  return  ExceptionFormatter ;
} ;

getJasmineRequireObj ( ) . Attente  =  fonction ( )  {

  fonction  Attente ( options )  {
    ceci . util  =  options . util  ||  {  buildFailureMessage : function ( )  { }  } ;
    ceci . customEqualityTesters  =  options . customEqualityTesters  ||  [ ] ;
    ceci . réel  =  options . réel ;
    ceci . addExpectationResult  =  options . addExpectationResult  ||  function ( ) { } ;
    ceci . isNot  =  options . isNot ;

    var  customMatchers  =  options . customMatchers  ||  { } ;
    for  ( var  matcherName  dans  customMatchers )  {
      this [ matcherName ]  =  Attente . prototype . wrapCompare ( matcherName ,  customMatchers [ matcherName ] ) ;
    }
  }

  Attente . prototype . wrapCompare  =  function ( nom ,  matcherFactory )  {
     fonction de retour ( )  {
      var  args  =  tableau . prototype . tranche . appel ( arguments ,  0 ) ,
        attendu  =  args . tranche ( 0 ) ,
        message  =  '' ;

      args . unshift ( ce . réel ) ;

      var  matcher  =  matcherFactory ( this . util ,  this . customEqualityTesters ) ,
          matcherCompare  =  matcher . comparer ;

      function  defaultNegativeCompare ( )  {
        var  result  =  matcher . comparer . apply ( null ,  args ) ;
        résultat . passer  = ! résultat . passer ;
         résultat de retour ;
      }

      if  ( this . isNot )  {
        matcherCompare  =  matcher . negativeCompare  ||  defaultNegativeCompare ;
      }

      var  result  =  matcherCompare . apply ( null ,  args ) ;

      if  ( ! result . pass )  {
        if  ( ! result . message )  {
          args . unshift ( ce . n'est pas ) ;
          args . unshift ( nom ) ;
          message  =  ceci . util . buildFailureMessage . apply ( null ,  args ) ;
        }  else  {
          if  ( Object . prototype . toString . apply ( result . message )  ===  '[object Function]' )  {
            message  =  résultat . message ( ) ;
          }  else  {
            message  =  résultat . message ;
          }
        }
      }

      if  ( attendu . longueur  ==  1 )  {
        attendu  =  attendu [ 0 ] ;
      }

      // TODO: combien de ces paramètres sont nécessaires?
      ceci . addExpectationResult (
        résultat . passer ,
        {
          matcherName : nom ,
          passé : résultat . passer ,
          message : message ,
          réel : ce . réel ,
          attendu : attendu  // TODO: cela peut avoir besoin d'être mis en tableau / tranché
        }
      ) ;
    } ;
  } ;

  Attente . addCoreMatchers  =  function ( correspondants )  {
    var  prototype  =  Attente . prototype ;
    for  ( var  matcherName  dans les  matchers )  {
      var  matcher  =  matchers [ nom_matcher ] ;
      prototype [ matcherName ]  =  prototype . wrapCompare ( matcherName ,  matcher ) ;
    }
  } ;

  Attente . Usine  =  fonction ( options )  {
    options  =  options  ||  { } ;

    var  expect  =  nouvelle  attente ( options ) ;

    // TODO: ce serait bien comme son propre objet - NegativeExpectation
    // TODO: copier au lieu des options de mutation
    options . isNot  =  vrai ;
    attendez . not  =  nouvelle  attente ( options ) ;

    retour  attendez ;
  } ;

   attente de retour ;
} ;

// TODO: le résultat de l'attente peut avoir plus de sens comme présentation d'une attente.
getJasmineRequireObj ( ) . buildExpectationResult  =  function ( )  {
  function  buildExpectationResult ( options )  {
    var  messageFormatter  =  options . messageFormatter  ||  function ( )  { } ,
      stackFormatter  =  options . stackFormatter  ||  function ( )  { } ;

    var  result  =  {
      matcherName : options . matcherName ,
      message : message ( ) ,
      pile : pile ( ) ,
      passé : options . passé
    } ;

    if ( ! result . passé )  {
      résultat . attendu  =  options . attendu ;
      résultat . réel  =  options . réel ;
    }

     résultat de retour ;

     message de fonction ( )  {
      if  ( options . passées )  {
        retourne  «Passé». ;
      }  else  if  ( options . message )  {
         options de retour . message ;
      }  else  if  ( options . erreur )  {
        return  messageFormatter ( options . erreur ) ;
      }
      retour  '' ;
    }

     pile de fonctions ( )  {
      if  ( options . passées )  {
        retour  '' ;
      }

      var  error  =  options . erreur ;
      if  ( ! erreur )  {
        essayez  {
          lancer une  nouvelle  erreur ( message ( ) ) ;
        }  catch  ( e )  {
          erreur  =  e ;
        }
      }
      return  stackFormatter ( erreur ) ;
    }
  }

  return  buildExpectationResult ;
} ;

getJasmineRequireObj ( ) . MockDate  =  fonction ( )  {
  function  MockDate ( global )  {
    var  self  =  ceci ;
    var  currentTime  =  0 ;

    if  ( ! global  || ! global . Date )  {
      soi . install  =  fonction ( )  { } ;
      soi . tick  =  fonction ( )  { } ;
      soi . désinstaller  =  function ( )  { } ;
      revenir  soi-même ;
    }

    var  GlobalDate  =  global . Date ;

    soi . install  =  fonction ( mockDate )  {
      if  ( instance mockDate de  GlobalDate ) {  
        currentTime  =  mockDate . getTime ( ) ;
      }  else  {
        currentTime  =  new  GlobalDate ( ) . getTime ( ) ;
      }

      global . Date  =  FakeDate ;
    } ;

    soi . tick  =  fonction ( millis )  {
      millis  =  millis  ||  0 ;
      currentTime  =  heure actuelle  +  millis ;
    } ;

    soi . désinstaller  =  function ( )  {
      currentTime  =  0 ;
      global . Date  =  GlobalDate ;
    } ;

    createDateProperties ( ) ;

    revenir  soi-même ;

    function  FakeDate ( )  {
      switch ( arguments . longueur )  {
        cas  0 :
          return  new  GlobalDate ( currentTime ) ;
        cas  1 :
          retourne le  nouveau  GlobalDate ( arguments [ 0 ] ) ;
        cas  2 :
          retourne le  nouveau  GlobalDate ( arguments [ 0 ] ,  arguments [ 1 ] ) ;
        cas  3 :
          retourne le  nouveau  GlobalDate ( arguments [ 0 ] ,  arguments [ 1 ] ,  arguments [ 2 ] ) ;
        cas  4 :
          retourne le  nouveau  GlobalDate ( arguments [ 0 ] ,  arguments [ 1 ] ,  arguments [ 2 ] ,  arguments [ 3 ] ) ;
        cas  5 :
          renvoie le  nouveau  GlobalDate ( arguments [ 0 ] ,  arguments [ 1 ] ,  arguments [ 2 ] ,  arguments [ 3 ] ,
                                arguments [ 4 ] ) ;
        cas  6 :
          renvoie le  nouveau  GlobalDate ( arguments [ 0 ] ,  arguments [ 1 ] ,  arguments [ 2 ] ,  arguments [ 3 ] ,
                                arguments [ 4 ] ,  arguments [ 5 ] ) ;
        par défaut :
          renvoie le  nouveau  GlobalDate ( arguments [ 0 ] ,  arguments [ 1 ] ,  arguments [ 2 ] ,  arguments [ 3 ] ,
                                arguments [ 4 ] ,  arguments [ 5 ] ,  arguments [ 6 ] ) ;
      }
    }

    function  createDateProperties ( )  {
      FakeDate . prototype  =  GlobalDate . prototype ;

      FakeDate . maintenant  =  fonction ( )  {
        if  ( GlobalDate . now )  {
          return  currentTime ;
        }  else  {
          throw  new  Error ( 'Le navigateur ne prend pas en charge Date.now ()' ) ;
        }
      } ;

      FakeDate . toSource  =  GlobalDate . toSource ;
      FakeDate . toString  =  GlobalDate . toString ;
      FakeDate . parse  =  GlobalDate . analyser ;
      FakeDate . UTC  =  GlobalDate . UTC ;
    }
	}

  return  MockDate ;
} ;

getJasmineRequireObj ( ) . pp  =  fonction ( j $ )  {

  function  PrettyPrinter ( )  {
    ceci . ppNestLevel_  =  0 ;
    ceci . vu  =  [ ] ;
  }

  PrettyPrinter . prototype . format  =  fonction ( valeur )  {
    ceci . ppNestLevel_ ++ ;
    essayez  {
      if  ( j $ . util . isUndefined ( valeur ) )  {
        ceci . emitScalar ( 'indéfini' ) ;
      }  else  if  ( valeur  ===  null )  {
        ceci . emitScalar ( 'null' ) ;
      }  else  if  ( valeur  ===  0  &&  1 / valeur  ===  - Infini )  {
        ceci . emitScalar ( '-0' ) ;
      }  else  if  ( valeur  ===  j $ . getGlobal ( ) )  {
        ceci . emitScalar ( '<global>' ) ;
      }  else  if  ( valeur . jasmineToString )  {
        ceci . emitScalar ( valeur . jasmineToString ( ) ) ;
      }  else  if  ( typeof  value  ===  'string' )  {
        ceci . emitString ( valeur ) ;
      }  else  if  ( j $ . isSpy ( valeur ) )  {
        ceci . emitScalar ( 'espionner'  +  valeur . et . identité ( ) ) ;
      }  else  if  ( valeur  instanceof  RegExp )  {
        ceci . emitScalar ( valeur . toString ( ) ) ;
      }  else  if  ( typeof  value  ===  'function' )  {
        ceci . emitScalar ( 'Fonction' ) ;
      }  else  if  ( typeof  valeur . nodeType  ===  'nombre' )  {
        ceci . emitScalar ( 'HTMLNode' ) ;
      }  else  if  ( valeur  instanceof  Date )  {
        ceci . emitScalar ( 'Date ('  +  valeur  +  ')' ) ;
      }  else  if  ( value . toString  &&  typeof  value  ===  'object'  && ! ( value  instanceof  Array )  &&  value . toString ! == Object . prototype . toString )  {
        ceci . emitScalar ( valeur . toString ( ) ) ;
      }  else  if  ( j $ . util . arrayContains ( this . vu ,  valeur ) )  {
        ceci . emitScalar ( '<référence circulaire:'  +  ( j $ . isArray_ ( value ) ? 'Array' : 'Object' )  +  '>' ) ;
      }  else  if  ( j $ . isArray_ ( value )  ||  j $ . isA_ ( 'Object' ,  value ) )  {
        ceci . vu . push ( valeur ) ;
        if  ( j $ . isArray_ ( valeur ) )  {
          ceci . emitArray ( valeur ) ;
        }  else  {
          ceci . emitObject ( valeur ) ;
        }
        ceci . vu . pop ( ) ;
      }  else  {
        ceci . emitScalar ( valeur . toString ( ) ) ;
      }
    }  enfin  {
      ceci . ppNestLevel_ - ;
    }
  } ;

  PrettyPrinter . prototype . iterateObject  =  fonction ( obj ,  fn )  {
    for  ( propriété var  dans obj ) {   
      if  ( ! Object . prototype . hasOwnProperty . call ( obj ,  property ) )  {  continue ;  }
      fn ( propriété ,  obj . __lookupGetter__ ? ( ! j $ . util . isUndefined ( obj . __lookupGetter__ ( propriété ) )  &&
          obj . __lookupGetter__ ( propriété ) ! == null ) : false ) ;
    }
  } ;

  PrettyPrinter . prototype . emitArray  =  j $ . unimplementedMethod_ ;
  PrettyPrinter . prototype . emitObject  =  j $ . unimplementedMethod_ ;
  PrettyPrinter . prototype . emitScalar  =  j $ . unimplementedMethod_ ;
  PrettyPrinter . prototype . emitString  =  j $ . unimplementedMethod_ ;

  function  StringPrettyPrinter ( )  {
    PrettyPrinter . appeler ( ceci ) ;

    ceci . chaîne  =  '' ;
  }

  j $ . util . hériter ( StringPrettyPrinter ,  PrettyPrinter ) ;

  StringPrettyPrinter . prototype . emitScalar  =  function ( valeur )  {
    ceci . append ( valeur ) ;
  } ;

  StringPrettyPrinter . prototype . emitString  =  function ( valeur )  {
    ceci . append ( '\' '  +  valeur  +  ' \ '' ) ;
  } ;

  StringPrettyPrinter . prototype . emitArray  =  fonction ( tableau )  {
    if  ( this . ppNestLevel_  >  j $ . MAX_PRETTY_PRINT_DEPTH )  {
      ceci . append ( 'Array' ) ;
      retour ;
    }
    var  longueur  =  Math . min ( tableau . longueur ,  j $ . MAX_PRETTY_PRINT_ARRAY_LENGTH ) ;
    ceci . append ( '[' ) ;
    for  ( var  i  =  0 ;  i  <  length ;  i ++ )  {
      si  ( i  >  0 )  {
        ceci . append ( ',' ) ;
      }
      ceci . format ( tableau [ i ] ) ;
    }
    if ( tableau . longueur  >  longueur ) {
      ceci . append ( ', ...' ) ;
    }

    var  self  =  ceci ;
    var d'  abord  =  tableau . longueur  ===  0 ;
    ceci . iterateObject ( tableau ,  fonction ( propriété ,  isGetter )  {
      if  ( propriété . match ( / ^ \ d + $ / ) )  {
        retour ;
      }

      if  ( first )  {
        premier  =  faux ;
      }  else  {
        soi . append ( ',' ) ;
      }

      soi . formatProperty ( tableau ,  propriété ,  isGetter ) ;
    } ) ;

    ceci . append ( ']' ) ;
  } ;

  StringPrettyPrinter . prototype . emitObject  =  fonction ( obj )  {
    var  constructorName  =  obj . constructeur ? j $ . fnNameFor ( obj . constructeur ) : 'null' ;
    ceci . append ( constructorName ) ;

    if  ( this . ppNestLevel_  >  j $ . MAX_PRETTY_PRINT_DEPTH )  {
      retour ;
    }

    var  self  =  ceci ;
    ceci . append ( '({' ) ;
    var d'  abord  =  vrai ;

    ceci . iterateObject ( obj ,  function ( propriété ,  isGetter )  {
      if  ( first )  {
        premier  =  faux ;
      }  else  {
        soi . append ( ',' ) ;
      }

      soi . formatProperty ( obj ,  propriété ,  isGetter ) ;
    } ) ;

    ceci . append ( '})' ) ;
  } ;

  StringPrettyPrinter . prototype . formatProperty  =  function ( obj ,  propriété ,  isGetter )  {
      ceci . append ( propriété ) ;
      ceci . append ( ':' ) ;
      if  ( isGetter )  {
        ceci . append ( '<getter>' ) ;
      }  else  {
        ceci . format ( obj [ propriété ] ) ;
      }
  } ;

  StringPrettyPrinter . prototype . append  =  function ( valeur )  {
    ceci . chaîne  + =  valeur ;
  } ;

   fonction de retour ( valeur )  {
    var  stringPrettyPrinter  =  new  StringPrettyPrinter ( ) ;
    stringPrettyPrinter . format ( valeur ) ;
    return  stringPrettyPrinter . chaîne ;
  } ;
} ;

getJasmineRequireObj ( ) . QueueRunner  =  fonction ( j $ )  {

  fonction  une fois ( fn )  {
    var  appelé  =  faux ;
     fonction de retour ( )  {
      if  ( ! appelé )  {
        appelé  =  vrai ;
        fn ( ) ;
      }
    } ;
  }

  function  QueueRunner ( attrs )  {
    ceci . queueableFns  =  attrs . queueableFns  ||  [ ] ;
    ceci . onComplete  =  attrs . onComplete  ||  function ( )  { } ;
    ceci . clearStack  =  attrs . clearStack  ||  fonction ( fn )  { fn ( ) ; } ;
    ceci . onException  =  attrs . onException  ||  function ( )  { } ;
    ceci . catchException  =  attrs . catchException  ||  function ( )  {  return  true ;  } ;
    ceci . userContext  =  attrs . userContext  ||  { } ;
    ceci . timeout  =  attrs . timeout  ||  { setTimeout : setTimeout ,  clearTimeout : clearTimeout } ;
    ceci . échec  =  attrs . échouer  ||  function ( )  { } ;
  }

  QueueRunner . prototype . exécuter  =  fonction ( )  {
    ceci . run ( this . queueableFns ,  0 ) ;
  } ;

  QueueRunner . prototype . run  =  function ( queueableFns ,  recursiveIndex )  {
    var  length  =  queueableFns . longueur ,
      soi  =  ceci ,
      iterativeIndex ;


    for ( iterativeIndex  =  recursiveIndex ;  iterativeIndex  <  length ;  iterativeIndex ++ )  {
      var  queueableFn  =  queueableFns [ iterativeIndex ] ;
      if  ( queueeableFn . fn . longueur  >  0 )  {
        tryAsync ( queueableFn ) ;
        retour ;
      }  else  {
        trySync ( queueableFn ) ;
      }
    }

    var  runnerDone  =  iterativeIndex > = longueur ;

    if  ( runnerDone )  {
      ceci . clearStack ( this . onComplete ) ;
    }

    function  trySync ( queueableFn )  {
      essayez  {
        queueableFn . fn . appel ( self . userContext ) ;
      }  catch  ( e )  {
        handleException ( e ,  queueableFn ) ;
      }
    }

    function  tryAsync ( queueableFn )  {
      var  clearTimeout  =  function  ( )  {
          Fonction . prototype . appliquer . apply ( self . timeout . clearTimeout ,  [ j $ . getGlobal ( ) ,  [ timeoutId ] ] ) ;
        } ,
        suivant  =  une fois ( fonction  ( )  {
          clearTimeout ( timeoutId ) ;
          soi . exécuter ( queueableFns ,  iterativeIndex  +  1 ) ;
        } ) ,
        timeoutId ;

      suivant . échec  =  fonction ( )  {
        soi . échouer . apply ( null ,  arguments ) ;
        suivant ( ) ;
      } ;

      if  ( queueeableFn . timeout )  {
        timeoutId  =  Fonction . prototype . appliquer . apply ( self . timeout . setTimeout ,  [ j $ . getGlobal ( ) ,  [ function ( )  {
          var  error  =  new  Error ( 'Timeout - Le rappel asynchrone n'a pas été appelé dans le délai spécifié par jasmine.DEFAULT_TIMEOUT_INTERVAL.' ) ;
          onException ( erreur ) ;
          suivant ( ) ;
        } ,  queueableFn . timeout ( ) ] ] ) ;
      }

      essayez  {
        queueableFn . fn . appel ( self . userContext ,  suivant ) ;
      }  catch  ( e )  {
        handleException ( e ,  queueableFn ) ;
        suivant ( ) ;
      }
    }

    function  onException ( e )  {
      soi . onException ( e ) ;
    }

    function  handleException ( e ,  queueableFn )  {
      onException ( e ) ;
      if  ( ! self . catchException ( e ) )  {
        // TODO: définit une var quand on intercepte une exception et
        // utilise un bloc finally pour fermer la boucle d'une manière agréable ..
        jeter  e ;
      }
    }
  } ;

  return  QueueRunner ;
} ;

getJasmineRequireObj ( ) . ReportDispatcher  =  function ( )  {
  function  ReportDispatcher ( méthodes )  {

    var  dispatchedMethods  =  méthodes  ||  [ ] ;

    for  ( var  i  =  0 ;  i  <  dispatchedMethods . length ;  i ++ )  {
      var  method  =  dispatchedMethods [ i ] ;
      this [ méthode ]  =  ( fonction ( m )  {
         fonction de retour ( )  {
          dispatch ( m ,  arguments ) ;
        } ;
      } ( méthode ) ) ;
    }

    var  reporters  =  [ ] ;

    ceci . addReporter  =  function ( reporter )  {
      journalistes . push ( journaliste ) ;
    } ;

    renvoyer  ceci ;

    function  dispatch ( méthode ,  args )  {
      for  ( var  i  =  0 ;  i  <  reporters . length ;  i ++ )  {
        var  reporter  =  journalistes [ i ] ;
        if  ( reporter [ méthode ] )  {
          reporter [ méthode ] . appliquer ( reporter ,  args ) ;
        }
      }
    }
  }

  return  ReportDispatcher ;
} ;


getJasmineRequireObj ( ) . SpyRegistry  =  fonction ( j $ )  {

  function  SpyRegistry ( options )  {
    options  =  options  ||  { } ;
    var  currentSpies  =  options . currentSpies  ||  function ( )  {  return  [ ] ;  } ;

    ceci . spyOn  =  function ( obj ,  methodName )  {
      if  ( j $ . util . isUndefined ( obj ) )  {
        throw  new  Error ( 'spyOn n'a pas pu trouver un objet à espionner pour'  +  methodName  +  '()' ) ;
      }

      if  ( j $ . util . isUndefined ( methodName ) )  {
        throw  new  Error ( 'Aucun nom de méthode fourni' ) ;
      }

      if  ( j $ . util . isUndefined ( obj [ methodName ] ) )  {
        throw  new  Error ( methodName  +  '() method does not exist' ) ;
      }

      if  ( obj [ methodName ]  &&  j $ . isSpy ( obj [ methodName ] ) )  {
        // TODO?: Cela devrait-il renvoyer l'espion actuel? Inconvénient: peut entraîner une confusion chez l'utilisateur concernant l'état d'espionnage
        lancer une  nouvelle  erreur ( methodName  +  'a déjà été espionné' ) ;
      }

      var  descriptor ;
      essayez  {
        descriptor  =  Objet . getOwnPropertyDescriptor ( obj ,  methodName ) ;
      }  catch ( e )  {
        // IE 8 ne prend pas en charge `definePropery` sur les nœuds non DOM
      }

      if  ( descripteur  && ! ( descripteur . inscriptible  ||  descripteur . ensemble ) )  {
        throw  new  Error ( methodName  +  'n'est pas déclaré accessible en écriture ou n'a pas de setter' ) ;
      }

      var  espion  =  j $ . createSpy ( methodName ,  obj [ methodName ] ) ;

      currentSpies ( ) . pousser ( {
        espion : espion ,
        baseObj : obj ,
        methodName : methodName ,
        originalValue : obj [ methodName ]
      } ) ;

      obj [ methodName ]  =  espion ;

      retour  espion ;
    } ;

    ceci . clearSpies  =  fonction ( )  {
      var  espions  =  currentSpies ( ) ;
      for  ( var  i  =  0 ;  i  <  espions . longueur ;  i ++ )  {
        var  spyEntry  =  espions [ i ] ;
        spyEntry . baseObj [ spyEntry . methodName ]  =  spyEntry . originalValue ;
      }
    } ;
  }

  return  SpyRegistry ;
} ;

getJasmineRequireObj ( ) . SpyStrategy  =  fonction ( )  {

  function  SpyStrategy ( options )  {
    options  =  options  ||  { } ;

    var  identité  =  options . nom  ||  'inconnu' ,
        originalFn  =  options . fn  ||  function ( )  { } ,
        getSpy  =  options . getSpy  ||  function ( )  { } ,
        plan  =  fonction ( )  { } ;

    ceci . identité  =  fonction ( )  {
      retour d'  identité ;
    } ;

    ceci . exec  =  fonction ( )  {
       plan de retour . appliquer ( ceci ,  arguments ) ;
    } ;

    ceci . callThrough  =  function ( )  {
      plan  =  originalFn ;
      return  getSpy ( ) ;
    } ;

    ceci . returnValue  =  fonction ( valeur )  {
      plan  =  fonction ( )  {
         valeur de retour ;
      } ;
      return  getSpy ( ) ;
    } ;

    ceci . returnValues  =  fonction ( )  {
       valeurs  var =  tableau . prototype . tranche . appel ( arguments ) ;
      plan  =  fonction  ( )  {
        renvoyer des  valeurs . shift ( ) ;
      } ;
      return  getSpy ( ) ;
    } ;

    ceci . throwError  =  function ( quelque chose )  {
      var  error  =  ( quelque chose d'  instance d'  erreur ) ? quelque chose : nouvelle  erreur ( quelque chose ) ;
      plan  =  fonction ( )  {
        lancer une  erreur ;
      } ;
      return  getSpy ( ) ;
    } ;

    ceci . callFake  =  fonction ( fn )  {
      plan  =  fn ;
      return  getSpy ( ) ;
    } ;

    ceci . stub  =  fonction ( fn )  {
      plan  =  fonction ( )  { } ;
      return  getSpy ( ) ;
    } ;
  }

  return  SpyStrategy ;
} ;

getJasmineRequireObj ( ) . Suite  =  fonction ( j $ )  {
   Suite de fonctions ( attrs )  {
    ceci . env  =  attrs . env ;
    ceci . id  =  attrs . id ;
    ceci . parentSuite  =  attrs . parentSuite ;
    ceci . description  =  attrs . description ;
    ceci . expectationFactory  =  attrs . expectationFactory ;
    ceci . expectationResultFactory  =  attrs . expectationResultFactory ;
    ceci . throwOnExpectationFailure  = !! attrs . throwOnExpectationFailure ;

    ceci . beforeFns  =  [ ] ;
    ceci . afterFns  =  [ ] ;
    ceci . beforeAllFns  =  [ ] ;
    ceci . afterAllFns  =  [ ] ;
    ceci . désactivé  =  faux ;

    ceci . enfants  =  [ ] ;

    ceci . résultat  =  {
      id : ceci . id ,
      description : ceci . description ,
      fullName : ceci . getFullName ( ) ,
      failedExpectations : [ ]
    } ;
  }

  Suite . prototype . expect  =  fonction ( réelle )  {
    renvoyer  ceci . expectationFactory ( réel ,  ceci ) ;
  } ;

  Suite . prototype . getFullName  =  function ( )  {
    var  fullName  =  ceci . description ;
    pour  ( var  parentSuite  =  this . parentSuite ;  parentSuite ;  parentSuite  =  parentSuite . parentSuite )  {
      if  ( parentSuite . parentSuite )  {
        fullName  =  parentSuite . description  +  ''  + nom  complet ;
      }
    }
    return  fullName ;
  } ;

  Suite . prototype . désactiver  =  fonction ( )  {
    ceci . désactivé  =  vrai ;
  } ;

  Suite . prototype . pend  =  fonction ( message )  {
    ceci . marquéPendant  =  vrai ;
  } ;

  Suite . prototype . beforeEach  =  fonction ( fn )  {
    ceci . beforeFns . unshift ( fn ) ;
  } ;

  Suite . prototype . beforeAll  =  fonction ( fn )  {
    ceci . beforeAllFns . pousser ( fn ) ;
  } ;

  Suite . prototype . afterEach  =  fonction ( fn )  {
    ceci . afterFns . unshift ( fn ) ;
  } ;

  Suite . prototype . afterAll  =  fonction ( fn )  {
    ceci . afterAllFns . pousser ( fn ) ;
  } ;

  Suite . prototype . addChild  =  function ( enfant )  {
    ceci . les enfants . pousser ( enfant ) ;
  } ;

  Suite . prototype . état  =  fonction ( )  {
    if  ( this . disabled )  {
      retourne  «désactivé» ;
    }

    if  ( this . marquéPending )  {
      retourne  «en attente» ;
    }

    if  ( this . result . failedExpectations . length  >  0 )  {
      retourne  «échoué» ;
    }  else  {
      retourne  «terminé» ;
    }
  } ;

  Suite . prototype . isExecutable  =  function ( )  {
    retour ! ceci . handicapé ;
  } ;

  Suite . prototype . canBeReentered  =  function ( )  {
    renvoyer  ceci . beforeAllFns . length  ===  0  &&  this . afterAllFns . longueur  ===  0 ;
  } ;

  Suite . prototype . getResult  =  function ( )  {
    ceci . résultat . statut  =  ceci . statut ( ) ;
    renvoyer  ceci . résultat ;
  } ;

  Suite . prototype . sharedUserContext  =  function ( )  {
    if  ( ! this . sharedContext )  {
      ceci . sharedContext  =  ceci . parentSuite ? clone ( this . parentSuite . sharedUserContext ( ) ) : { } ;
    }

    renvoyer  ceci . sharedContext ;
  } ;

  Suite . prototype . clonedSharedUserContext  =  function ( )  {
    retourne le  clone ( this . sharedUserContext ( ) ) ;
  } ;

  Suite . prototype . onException  =  function ( )  {
    if  ( arguments [ 0 ]  instanceof  j $ . errors . ExpectationFailed )  {
      retour ;
    }

    if ( isAfterAll ( this . children ) )  {
      var  data  =  {
        matcherName : '' ,
        passé : faux ,
        attendu : '' ,
        réel : '' ,
        erreur : arguments [ 0 ]
      } ;
      ceci . résultat . échouéAttentes . push ( this . expectationResultFactory ( données ) ) ;
    }  else  {
      for  ( var  i  =  0 ;  i  <  this . children . length ;  i ++ )  {
        var  enfant  =  ceci . enfants [ i ] ;
        enfant . onException . apply ( enfant ,  arguments ) ;
      }
    }
  } ;

  Suite . prototype . addExpectationResult  =  function  ( )  {
    if ( isAfterAll ( this . children )  &&  isFailure ( arguments ) ) {
      var  data  =  arguments [ 1 ] ;
      ceci . résultat . échouéAttentes . push ( this . expectationResultFactory ( données ) ) ;
      if ( this . throwOnExpectationFailure )  {
        lancer un  nouveau  j $ . des erreurs . ExpectationFailed ( ) ;
      }
    }  else  {
      for  ( var  i  =  0 ;  i  <  this . children . length ;  i ++ )  {
        var  enfant  =  ceci . enfants [ i ] ;
        essayez  {
          enfant . addExpectationResult . apply ( enfant ,  arguments ) ;
        }  catch ( e )  {
          // continue
        }
      }
    }
  } ;

  function  isAfterAll ( enfants )  {
    return children && children[0].result.status;
  }

  function isFailure(args) {
    return !args[0];
  }

  function clone(obj) {
    var clonedObj = {};
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        clonedObj[prop] = obj[prop];
      }
    }

    return clonedObj;
  }

  return Suite;
};

if (typeof window == void 0 && typeof exports == 'object') {
  exports.Suite = jasmineRequire.Suite;
}

getJasmineRequireObj().Timer = function() {
  var defaultNow = (function(Date) {
    return function() { return new Date().getTime(); };
  })(Date);

  function Timer(options) {
    options = options || {};

    var now = options.now || defaultNow,
      startTime;

    this.start = function() {
      startTime = now();
    };

    this.elapsed = function() {
      return now() - startTime;
    };
  }

  return Timer;
};

getJasmineRequireObj().TreeProcessor = function() {
  function TreeProcessor(attrs) {
    var tree = attrs.tree,
        runnableIds = attrs.runnableIds,
        queueRunnerFactory = attrs.queueRunnerFactory,
        nodeStart = attrs.nodeStart || function() {},
        nodeComplete = attrs.nodeComplete || function() {},
        orderChildren = attrs.orderChildren || function(node) { return node.children; },
        stats = { valid: true },
        processed = false,
        defaultMin = Infinity,
        defaultMax = 1 - Infinity;

    this.processTree = function() {
      processNode(tree, false);
      processed = true;
      return stats;
    };

    this.execute = function(done) {
      if (!processed) {
        this.processTree();
      }

      if (!stats.valid) {
        throw 'invalid order';
      }

      var childFns = wrapChildren(tree, 0);

      queueRunnerFactory({
        queueableFns: childFns,
        userContext: tree.sharedUserContext(),
        onException: function() {
          tree.onException.apply(tree, arguments);
        },
        onComplete: done
      });
    };

    function runnableIndex(id) {
      for (var i = 0; i < runnableIds.length; i++) {
        if (runnableIds[i] === id) {
          return i;
        }
      }
    }

    function processNode(node, parentEnabled) {
      var executableIndex = runnableIndex(node.id);

      if (executableIndex !== undefined) {
        parentEnabled = true;
      }

      parentEnabled = parentEnabled && node.isExecutable();

      if (!node.children) {
        stats[node.id] = {
          executable: parentEnabled && node.isExecutable(),
          segments: [{
            index: 0,
            owner: node,
            nodes: [node],
            min: startingMin(executableIndex),
            max: startingMax(executableIndex)
          }]
        };
      } else {
        var hasExecutableChild = false;

        var orderedChildren = orderChildren(node);

        for (var i = 0; i < orderedChildren.length; i++) {
          var child = orderedChildren[i];

          processNode(child, parentEnabled);

          if (!stats.valid) {
            return;
          }

          var childStats = stats[child.id];

          hasExecutableChild = hasExecutableChild || childStats.executable;
        }

        stats[node.id] = {
          executable: hasExecutableChild
        };

        segmentChildren(node, orderedChildren, stats[node.id], executableIndex);

        if (!node.canBeReentered() && stats[node.id].segments.length > 1) {
          stats = { valid: false };
        }
      }
    }

    function startingMin(executableIndex) {
      return executableIndex === undefined ? defaultMin : executableIndex;
    }

    function startingMax(executableIndex) {
      return executableIndex === undefined ? defaultMax : executableIndex;
    }

    function segmentChildren(node, orderedChildren, nodeStats, executableIndex) {
      var currentSegment = { index: 0, owner: node, nodes: [], min: startingMin(executableIndex), max: startingMax(executableIndex) },
          result = [currentSegment],
          lastMax = defaultMax,
          orderedChildSegments = orderChildSegments(orderedChildren);

      function isSegmentBoundary(minIndex) {
        return lastMax !== defaultMax && minIndex !== defaultMin && lastMax < minIndex - 1;
      }

      for (var i = 0; i < orderedChildSegments.length; i++) {
        var childSegment = orderedChildSegments[i],
          maxIndex = childSegment.max,
          minIndex = childSegment.min;

        if (isSegmentBoundary(minIndex)) {
          currentSegment = {index: result.length, owner: node, nodes: [], min: defaultMin, max: defaultMax};
          result.push(currentSegment);
        }

        currentSegment.nodes.push(childSegment);
        currentSegment.min = Math.min(currentSegment.min, minIndex);
        currentSegment.max = Math.max(currentSegment.max, maxIndex);
        lastMax = maxIndex;
      }

      nodeStats.segments = result;
    }

    function orderChildSegments(children) {
      var specifiedOrder = [],
          unspecifiedOrder = [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i],
            segments = stats[child.id].segments;

        for (var j = 0; j < segments.length; j++) {
          var seg = segments[j];

          if (seg.min === defaultMin) {
            unspecifiedOrder.push(seg);
          } else {
            specifiedOrder.push(seg);
          }
        }
      }

      specifiedOrder.sort(function(a, b) {
        return a.min - b.min;
      });

      return specifiedOrder.concat(unspecifiedOrder);
    }

    function executeNode(node, segmentNumber) {
      if (node.children) {
        return {
          fn: function(done) {
            nodeStart(node);

            queueRunnerFactory({
              onComplete: function() {
                nodeComplete(node, node.getResult());
                done();
              },
              queueableFns: wrapChildren(node, segmentNumber),
              userContext: node.sharedUserContext(),
              onException: function() {
                node.onException.apply(node, arguments);
              }
            });
          }
        };
      } else {
        return {
          fn: function(done) { node.execute(done, stats[node.id].executable); }
        };
      }
    }

    function wrapChildren(node, segmentNumber) {
      var result = [],
          segmentChildren = stats[node.id].segments[segmentNumber].nodes;

      for (var i = 0; i < segmentChildren.length; i++) {
        result.push(executeNode(segmentChildren[i].owner, segmentChildren[i].index));
      }

      if (!stats[node.id].executable) {
        return result;
      }

      return node.beforeAllFns.concat(result).concat(node.afterAllFns);
    }
  }

  return TreeProcessor;
};

getJasmineRequireObj().Any = function(j$) {

  function Any(expectedObject) {
    if (typeof expectedObject === 'undefined') {
      throw new TypeError(
        'jasmine.any() expects to be passed a constructor function. ' +
        'Please pass one or use jasmine.anything() to match any object.'
      );
    }
    this.expectedObject = expectedObject;
  }

  Any.prototype.asymmetricMatch = function(other) {
    if (this.expectedObject == String) {
      return typeof other == 'string' || other instanceof String;
    }

    if (this.expectedObject == Number) {
      return typeof other == 'number' || other instanceof Number;
    }

    if (this.expectedObject == Function) {
      return typeof other == 'function' || other instanceof Function;
    }

    if (this.expectedObject == Object) {
      return typeof other == 'object';
    }

    if (this.expectedObject == Boolean) {
      return typeof other == 'boolean';
    }

    return other instanceof this.expectedObject;
  };

  Any.prototype.jasmineToString = function() {
    return '<jasmine.any(' + j$.fnNameFor(this.expectedObject) + ')>';
  };

  return Any;
};

getJasmineRequireObj().Anything = function(j$) {

  function Anything() {}

  Anything.prototype.asymmetricMatch = function(other) {
    return !j$.util.isUndefined(other) && other !== null;
  };

  Anything.prototype.jasmineToString = function() {
    return '<jasmine.anything>';
  };

  return Anything;
};

getJasmineRequireObj().ArrayContaining = function(j$) {
  function ArrayContaining(sample) {
    this.sample = sample;
  }

  ArrayContaining.prototype.asymmetricMatch = function(other) {
    var className = Object.prototype.toString.call(this.sample);
    if (className !== '[object Array]') { throw new Error('You must provide an array to arrayContaining, not \'' + this.sample + '\'.'); }

    for (var i = 0; i < this.sample.length; i++) {
      var item = this.sample[i];
      if (!j$.matchersUtil.contains(other, item)) {
        return false;
      }
    }

    return true;
  };

  ArrayContaining.prototype.jasmineToString = function () {
    return '<jasmine.arrayContaining(' + jasmine.pp(this.sample) +')>';
  };

  return ArrayContaining;
};

getJasmineRequireObj().ObjectContaining = function(j$) {

  function ObjectContaining(sample) {
    this.sample = sample;
  }

  function getPrototype(obj) {
    if (Object.getPrototypeOf) {
      return Object.getPrototypeOf(obj);
    }

    if (obj.constructor.prototype == obj) {
      return null;
    }

    return obj.constructor.prototype;
  }

  function hasProperty(obj, property) {
    if (!obj) {
      return false;
    }

    if (Object.prototype.hasOwnProperty.call(obj, property)) {
      return true;
    }

    return hasProperty(getPrototype(obj), property);
  }

  ObjectContaining.prototype.asymmetricMatch = function(other) {
    if (typeof(this.sample) !== 'object') { throw new Error('You must provide an object to objectContaining, not \''+this.sample+'\'.'); }

    for (var property in this.sample) {
      if (!hasProperty(other, property) ||
          !j$.matchersUtil.equals(this.sample[property], other[property])) {
        return false;
      }
    }

    return true;
  };

  ObjectContaining.prototype.jasmineToString = function() {
    return '<jasmine.objectContaining(' + j$.pp(this.sample) + ')>';
  };

  return ObjectContaining;
};

getJasmineRequireObj().StringMatching = function(j$) {

  function StringMatching(expected) {
    if (!j$.isString_(expected) && !j$.isA_('RegExp', expected)) {
      throw new Error('Expected is not a String or a RegExp');
    }

    this.regexp = new RegExp(expected);
  }

  StringMatching.prototype.asymmetricMatch = function(other) {
    return this.regexp.test(other);
  };

  StringMatching.prototype.jasmineToString = function() {
    return '<jasmine.stringMatching(' + this.regexp + ')>';
  };

  return StringMatching;
};

getJasmineRequireObj().errors = function() {
  function ExpectationFailed() {}

  ExpectationFailed.prototype = new Error();
  ExpectationFailed.prototype.constructor = ExpectationFailed;

  return {
    ExpectationFailed: ExpectationFailed
  };
};
getJasmineRequireObj().matchersUtil = function(j$) {
  // TODO: what to do about jasmine.pp not being inject? move to JSON.stringify? gut PrettyPrinter?

  return {
    equals: function(a, b, customTesters) {
      customTesters = customTesters || [];

      return eq(a, b, [], [], customTesters);
    },

    contains: function(haystack, needle, customTesters) {
      customTesters = customTesters || [];

      if ((Object.prototype.toString.apply(haystack) === '[object Array]') ||
        (!!haystack && !haystack.indexOf))
      {
        for (var i = 0; i < haystack.length; i++) {
          if (eq(haystack[i], needle, [], [], customTesters)) {
            return true;
          }
        }
        return false;
      }

      return !!haystack && haystack.indexOf(needle) >= 0;
    },

    buildFailureMessage: function() {
      var args = Array.prototype.slice.call(arguments, 0),
        matcherName = args[0],
        isNot = args[1],
        actual = args[2],
        expected = args.slice(3),
        englishyPredicate = matcherName.replace(/[A-Z]/g, function(s) { return ' ' + s.toLowerCase(); });

      var message = 'Expected ' +
        j$.pp(actual) +
        (isNot ? ' not ' : ' ') +
        englishyPredicate;

      if (expected.length > 0) {
        for (var i = 0; i < expected.length; i++) {
          if (i > 0) {
            message += ',';
          }
          message += ' ' + j$.pp(expected[i]);
        }
      }

      return message + '.';
    }
  };

  function isAsymmetric(obj) {
    return obj && j$.isA_('Function', obj.asymmetricMatch);
  }

  function asymmetricMatch(a, b) {
    var asymmetricA = isAsymmetric(a),
        asymmetricB = isAsymmetric(b);

    if (asymmetricA && asymmetricB) {
      return undefined;
    }

    if (asymmetricA) {
      return a.asymmetricMatch(b);
    }

    if (asymmetricB) {
      return b.asymmetricMatch(a);
    }
  }

  // Equality function lovingly adapted from isEqual in
  //   [Underscore](http://underscorejs.org)
  function eq(a, b, aStack, bStack, customTesters) {
    var result = true;

    var asymmetricResult = asymmetricMatch(a, b);
    if (!j$.util.isUndefined(asymmetricResult)) {
      return asymmetricResult;
    }

    for (var i = 0; i < customTesters.length; i++) {
      var customTesterResult = customTesters[i](a, b);
      if (!j$.util.isUndefined(customTesterResult)) {
        return customTesterResult;
      }
    }

    if (a instanceof Error && b instanceof Error) {
      return a.message == b.message;
    }

    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) { return a !== 0 || 1 / a == 1 / b; }
    // A strict comparison is necessary because `null == undefined`.
    if (a === null || b === null) { return a === b; }
    var className = Object.prototype.toString.call(a);
    if (className != Object.prototype.toString.call(b)) { return false; }
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a === 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
          a.global == b.global &&
          a.multiline == b.multiline &&
          a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') { return false; }

    var aIsDomNode = j$.isDomNode(a);
    var bIsDomNode = j$.isDomNode(b);
    if (aIsDomNode && bIsDomNode) {
      // At first try to use DOM3 method isEqualNode
      if (a.isEqualNode) {
        return a.isEqualNode(b);
      }
      // IE8 doesn't support isEqualNode, try to use outerHTML && innerText
      var aIsElement = a instanceof Element;
      var bIsElement = b instanceof Element;
      if (aIsElement && bIsElement) {
        return a.outerHTML == b.outerHTML;
      }
      if (aIsElement || bIsElement) {
        return false;
      }
      return a.innerText == b.innerText && a.textContent == b.textContent;
    }
    if (aIsDomNode || bIsDomNode) {
      return false;
    }

    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) { return bStack[length] == b; }
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0;
    // Recursively compare objects and arrays.
    // Compare array lengths to determine if a deep comparison is necessary.
    if (className == '[object Array]' && a.length !== b.length) {
      result = false;
    }

    if (result) {
      // Objects with different constructors are not equivalent, but `Object`s
      // or `Array`s from different frames are.
      if (className !== '[object Array]') {
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor &&
               isFunction(bCtor) && bCtor instanceof bCtor)) {
          return false;
        }
      }
      // Deep compare objects.
      for (var key in a) {
        if (has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = has(b, key) && eq(a[key], b[key], aStack, bStack, customTesters))) { break; }
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (has(b, key) && !(size--)) { break; }
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();

    return result;

    function has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }

    function isFunction(obj) {
      return typeof obj === 'function';
    }
  }
};

getJasmineRequireObj().toBe = function() {
  function toBe() {
    return {
      compare: function(actual, expected) {
        return {
          pass: actual === expected
        };
      }
    };
  }

  return toBe;
};

getJasmineRequireObj().toBeCloseTo = function() {

  function toBeCloseTo() {
    return {
      compare: function(actual, expected, precision) {
        if (precision !== 0) {
          precision = precision || 2;
        }

        return {
          pass: Math.abs(expected - actual) < (Math.pow(10, -precision) / 2)
        };
      }
    };
  }

  return toBeCloseTo;
};

getJasmineRequireObj().toBeDefined = function() {
  function toBeDefined() {
    return {
      compare: function(actual) {
        return {
          pass: (void 0 !== actual)
        };
      }
    };
  }

  return toBeDefined;
};

getJasmineRequireObj().toBeFalsy = function() {
  function toBeFalsy() {
    return {
      compare: function(actual) {
        return {
          pass: !!!actual
        };
      }
    };
  }

  return toBeFalsy;
};

getJasmineRequireObj().toBeGreaterThan = function() {

  function toBeGreaterThan() {
    return {
      compare: function(actual, expected) {
        return {
          pass: actual > expected
        };
      }
    };
  }

  return toBeGreaterThan;
};


getJasmineRequireObj().toBeLessThan = function() {
  function toBeLessThan() {
    return {

      compare: function(actual, expected) {
        return {
          pass: actual < expected
        };
      }
    };
  }

  return toBeLessThan;
};
getJasmineRequireObj().toBeNaN = function(j$) {

  function toBeNaN() {
    return {
      compare: function(actual) {
        var result = {
          pass: (actual !== actual)
        };

        if (result.pass) {
          result.message = 'Expected actual not to be NaN.';
        } else {
          result.message = function() { return 'Expected ' + j$.pp(actual) + ' to be NaN.'; };
        }

        return result;
      }
    };
  }

  return toBeNaN;
};

getJasmineRequireObj().toBeNull = function() {

  function toBeNull() {
    return {
      compare: function(actual) {
        return {
          pass: actual === null
        };
      }
    };
  }

  return toBeNull;
};

getJasmineRequireObj().toBeTruthy = function() {

  function toBeTruthy() {
    return {
      compare: function(actual) {
        return {
          pass: !!actual
        };
      }
    };
  }

  return toBeTruthy;
};

getJasmineRequireObj().toBeUndefined = function() {

  function toBeUndefined() {
    return {
      compare: function(actual) {
        return {
          pass: void 0 === actual
        };
      }
    };
  }

  return toBeUndefined;
};

getJasmineRequireObj().toContain = function() {
  function toContain(util, customEqualityTesters) {
    customEqualityTesters = customEqualityTesters || [];

    return {
      compare: function(actual, expected) {

        return {
          pass: util.contains(actual, expected, customEqualityTesters)
        };
      }
    };
  }

  return toContain;
};

getJasmineRequireObj().toEqual = function() {

  function toEqual(util, customEqualityTesters) {
    customEqualityTesters = customEqualityTesters || [];

    return {
      compare: function(actual, expected) {
        var result = {
          pass: false
        };

        result.pass = util.equals(actual, expected, customEqualityTesters);

        return result;
      }
    };
  }

  return toEqual;
};

getJasmineRequireObj().toHaveBeenCalled = function(j$) {

  function toHaveBeenCalled() {
    return {
      compare: function(actual) {
        var result = {};

        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        if (arguments.length > 1) {
          throw new Error('toHaveBeenCalled does not take arguments, use toHaveBeenCalledWith');
        }

        result.pass = actual.calls.any();

        result.message = result.pass ?
          'Expected spy ' + actual.and.identity() + ' not to have been called.' :
          'Expected spy ' + actual.and.identity() + ' to have been called.';

        return result;
      }
    };
  }

  return toHaveBeenCalled;
};

getJasmineRequireObj().toHaveBeenCalledTimes = function(j$) {

  function toHaveBeenCalledTimes() {
    return {
      compare: function(actual, expected) {
        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        var args = Array.prototype.slice.call(arguments, 0),
          result = { pass: false };

        if(!expected){
          throw new Error('Expected times failed is required as an argument.');
        }

        actual = args[0];
        var calls = actual.calls.count();
        var timesMessage = expected === 1 ? 'once' : expected + ' times';
        result.pass = calls === expected;
        result.message = result.pass ?
          'Expected spy ' + actual.and.identity() + ' not to have been called ' + timesMessage + '. It was called ' +  calls + ' times.' :
          'Expected spy ' + actual.and.identity() + ' to have been called ' + timesMessage + '. It was called ' +  calls + ' times.';
        return result;
      }
    };
  }

  return toHaveBeenCalledTimes;
};

getJasmineRequireObj().toHaveBeenCalledWith = function(j$) {

  function toHaveBeenCalledWith(util, customEqualityTesters) {
    return {
      compare: function() {
        var args = Array.prototype.slice.call(arguments, 0),
          actual = args[0],
          expectedArgs = args.slice(1),
          result = { pass: false };

        if (!j$.isSpy(actual)) {
          throw new Error('Expected a spy, but got ' + j$.pp(actual) + '.');
        }

        if (!actual.calls.any()) {
          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' to have been called with ' + j$.pp(expectedArgs) + ' but it was never called.'; };
          return result;
        }

        if (util.contains(actual.calls.allArgs(), expectedArgs, customEqualityTesters)) {
          result.pass = true;
          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' not to have been called with ' + j$.pp(expectedArgs) + ' but it was.'; };
        } else {
          result.message = function() { return 'Expected spy ' + actual.and.identity() + ' to have been called with ' + j$.pp(expectedArgs) + ' but actual calls were ' + j$.pp(actual.calls.allArgs()).replace(/^\[ | \]$/g, '') + '.'; };
        }

        return result;
      }
    };
  }

  return toHaveBeenCalledWith;
};

getJasmineRequireObj().toMatch = function(j$) {

  function toMatch() {
    return {
      compare: function(actual, expected) {
        if (!j$.isString_(expected) && !j$.isA_('RegExp', expected)) {
          throw new Error('Expected is not a String or a RegExp');
        }

        var regexp = new RegExp(expected);

        return {
          pass: regexp.test(actual)
        };
      }
    };
  }

  return toMatch;
};

getJasmineRequireObj().toThrow = function(j$) {

  function toThrow(util) {
    return {
      compare: function(actual, expected) {
        var result = { pass: false },
          threw = false,
          thrown;

        if (typeof actual != 'function') {
          throw new Error('Actual is not a Function');
        }

        try {
          actual();
        } catch (e) {
          threw = true;
          thrown = e;
        }

        if (!threw) {
          result.message = 'Expected function to throw an exception.';
          return result;
        }

        if (arguments.length == 1) {
          result.pass = true;
          result.message = function() { return 'Expected function not to throw, but it threw ' + j$.pp(thrown) + '.'; };

          return result;
        }

        if (util.equals(thrown, expected)) {
          result.pass = true;
          result.message = function() { return 'Expected function not to throw ' + j$.pp(expected) + '.'; };
        } else {
          result.message = function() { return 'Expected function to throw ' + j$.pp(expected) + ', but it threw ' +  j$.pp(thrown) + '.'; };
        }

        return result;
      }
    };
  }

  return toThrow;
};

getJasmineRequireObj().toThrowError = function(j$) {
  function toThrowError () {
    return {
      compare: function(actual) {
        var threw = false,
          pass = {pass: true},
          fail = {pass: false},
          thrown;

        if (typeof actual != 'function') {
          throw new Error('Actual is not a Function');
        }

        var errorMatcher = getMatcher.apply(null, arguments);

        try {
          actual();
        } catch (e) {
          threw = true;
          thrown = e;
        }

        if (!threw) {
          fail.message = 'Expected function to throw an Error.';
          return fail;
        }

        if (!(thrown instanceof Error)) {
          fail.message = function() { return 'Expected function to throw an Error, but it threw ' + j$.pp(thrown) + '.'; };
          return fail;
        }

        if (errorMatcher.hasNoSpecifics()) {
          pass.message = 'Expected function not to throw an Error, but it threw ' + j$.fnNameFor(thrown) + '.';
          return pass;
        }

        if (errorMatcher.matches(thrown)) {
          pass.message = function() {
            return 'Expected function not to throw ' + errorMatcher.errorTypeDescription + errorMatcher.messageDescription() + '.';
          };
          return pass;
        } else {
          fail.message = function() {
            return 'Expected function to throw ' + errorMatcher.errorTypeDescription + errorMatcher.messageDescription() +
              ', but it threw ' + errorMatcher.thrownDescription(thrown) + '.';
          };
          return fail;
        }
      }
    };

    function getMatcher() {
      var expected = null,
          errorType = null;

      if (arguments.length == 2) {
        expected = arguments[1];
        if (isAnErrorType(expected)) {
          errorType = expected;
          expected = null;
        }
      } else if (arguments.length > 2) {
        errorType = arguments[1];
        expected = arguments[2];
        if (!isAnErrorType(errorType)) {
          throw new Error('Expected error type is not an Error.');
        }
      }

      if (expected && !isStringOrRegExp(expected)) {
        if (errorType) {
          throw new Error('Expected error message is not a string or RegExp.');
        } else {
          throw new Error('Expected is not an Error, string, or RegExp.');
        }
      }

      function messageMatch(message) {
        if (typeof expected == 'string') {
          return expected == message;
        } else {
          return expected.test(message);
        }
      }

      return {
        errorTypeDescription: errorType ? j$.fnNameFor(errorType) : 'an exception',
        thrownDescription: function(thrown) {
          var thrownName = errorType ? j$.fnNameFor(thrown.constructor) : 'an exception',
              thrownMessage = '';

          if (expected) {
            thrownMessage = ' with message ' + j$.pp(thrown.message);
          }

          return thrownName + thrownMessage;
        },
        messageDescription: function() {
          if (expected === null) {
            return '';
          } else if (expected instanceof RegExp) {
            return ' with a message matching ' + j$.pp(expected);
          } else {
            return ' with message ' + j$.pp(expected);
          }
        },
        hasNoSpecifics: function() {
          return expected === null && errorType === null;
        },
        matches: function(error) {
          return (errorType === null || error instanceof errorType) &&
            (expected === null || messageMatch(error.message));
        }
      };
    }

    function isStringOrRegExp(potential) {
      return potential instanceof RegExp || (typeof potential == 'string');
    }

    function isAnErrorType(type) {
      if (typeof type !== 'function') {
        return false;
      }

      var Surrogate = function() {};
      Surrogate.prototype = type.prototype;
      return (new Surrogate()) instanceof Error;
    }
  }

  return toThrowError;
};

getJasmineRequireObj().interface = function(jasmine, env) {
  var jasmineInterface = {
    describe: function(description, specDefinitions) {
      return env.describe(description, specDefinitions);
    },

    xdescribe: function(description, specDefinitions) {
      return env.xdescribe(description, specDefinitions);
    },

    fdescribe: function(description, specDefinitions) {
      return env.fdescribe(description, specDefinitions);
    },

    it: function() {
      return env.it.apply(env, arguments);
    },

    xit: function() {
      return env.xit.apply(env, arguments);
    },

    fit: function() {
      return env.fit.apply(env, arguments);
    },

    beforeEach: function() {
      return env.beforeEach.apply(env, arguments);
    },

    afterEach: function() {
      return env.afterEach.apply(env, arguments);
    },

    beforeAll: function() {
      return env.beforeAll.apply(env, arguments);
    },

    afterAll: function() {
      return env.afterAll.apply(env, arguments);
    },

    expect: function(actual) {
      return env.expect(actual);
    },

    pending: function() {
      return env.pending.apply(env, arguments);
    },

    fail: function() {
      return env.fail.apply(env, arguments);
    },

    spyOn: function(obj, methodName) {
      return env.spyOn(obj, methodName);
    },

    jsApiReporter: new jasmine.JsApiReporter({
      timer: new jasmine.Timer()
    }),

    jasmine: jasmine
  };

  jasmine.addCustomEqualityTester = function(tester) {
    env.addCustomEqualityTester(tester);
  };

  jasmine.addMatchers = function(matchers) {
    return env.addMatchers(matchers);
  };

  jasmine.clock = function() {
    return env.clock;
  };

  return jasmineInterface;
};

getJasmineRequireObj().version = function() {
  return '2.4.1';
};