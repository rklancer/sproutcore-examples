// ==========================================================================
// Project:   Hello - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Hello */

// This page describes the main user interface for your application.  
Hello.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'preferenceCheckbox labelView'.w(),
    
    preferenceCheckbox: SC.CheckboxView.design({
      layout: { centerX: 0, centerY: -15, width: 300, height: 18 },
      title: 'Be traditional',
      valueBinding: 'Hello.appController.useTraditionalGreeting'
    }),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 15, width: 300, height: 18 },
      tagName: "h1", 
      valueBinding: 'Hello.appController.greeting'
    })
  })

});
