// ==========================================================================
// Project:   Hello.appController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Hello */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Hello.appController = SC.ObjectController.create(
/** @scope Hello.appController.prototype */ {

  useTraditionalGreeting: NO,
  
  greeting: function () {
    return this.get('useTraditionalGreeting') ? "Hello, world!" : "Welcome to SproutCore!";
  }.property('useTraditionalGreeting')

}) ;
