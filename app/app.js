'use strict';

console.log('\'Allo \'Allo! Content script');

chrome.runtime.sendMessage({ onAppLoaded: true });