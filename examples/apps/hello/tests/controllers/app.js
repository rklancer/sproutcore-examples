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


test("when bound to a view, appController should update the view correctly", function () {

  var mockCheckbox = SC.Object.create({
    valueBinding: 'Hello.appController.useTraditionalGreeting'
  });
  
  var mockLabel = SC.Object.create({
    valueBinding: 'Hello.appController.greeting'
  });
  
  SC.run(function () {
    mockCheckbox.set('value', YES);
  });  
  equals( mockLabel.get('value'), 
    "Hello, world!", 
    "mock label view should show the traditional greeting when mock checkbox is checked"
  );
  
  SC.run(function () {
    mockCheckbox.set('value', NO);
  });
  equals( mockLabel.get('value'), 
    "Welcome to SproutCore!", 
    "mock label view should show the nontraditional greeting when mock checkbox is unchecked"
  );

  SC.run(function () {
    mockCheckbox.set('value', YES);
  });
  equals( mockLabel.get('value'), 
    "Hello, world!", 
    "mock label view should revert to traditional greeting when mock checkbox is checked again"
  );
  
});
