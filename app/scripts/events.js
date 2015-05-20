'use strict';

// http://stackoverflow.com/questions/20181239/chrome-extension-making-extension-active-only-if-matches-match

chrome.runtime.onMessage.addListener(function(msg, sender) {
  console.log('got message');
  console.log(msg,sender);
  if(msg.onAppLoaded)
  {
    chrome.browserAction.setIcon({
      tabId: sender.tab.id,
      path: 'images/icon-128.png'
    });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, info) {
  if (info.status === 'loading') {
    chrome.pageAction.setIcon({
      tabId: tabId,
      path: 'images/icon-128-disabled.png'
    });
  }
});