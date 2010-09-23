// ==========================================================================
// Project:   Hello.appController Unit Test
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Hello module test ok equals same stop start */

module("Hello.appController");

test("appController should respect 'useTraditionalGreeting' setting", function () {
  
  Hello.appController.set('useTraditionalGreeting', YES);
  equals( Hello.appController.get('greeting'), 
    "Hello, world!",
    "greeting should be traditional when useTraditionalGreeting is YES"
  );
  
  Hello.appController.set('useTraditionalGreeting', NO);
  equals( Hello.appController.get('greeting'),
    "Welcome to SproutCore!",
    "greeting should be nontraditional when useTraditionalGreeting is NO"
  );
  
  Hello.appController.set('useTraditionalGreeting', YES);
  equals( Hello.appController.get('greeting'), 
    "Hello, world!",
    "greeting should be revert to traditional when useTraditionalGreeting is YES again"
  );
  
});

