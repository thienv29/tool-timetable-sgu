// chrome.tabs.onActivated.addListener(tab => {
//   chrome.tabs.get(tab.tabId,current_tab =>{
//     if(current_tab.url=='http://thongtindaotao.sgu.edu.vn/'){
//       chrome.scripting.executeScript(
//         {
//           target: {tabId: tab.tabId},
//           files: ['foreground.js'],
//         },
//         () => {

//          });
//     }
//   })
// })
chrome.runtime.onInstalled.addListener(function (object) {
//   chrome.tabs.create({ url: "http://cvvqt.glitch.me/" });
//   chrome.tabs.create({ url: "https://www.facebook.com/quythien.vu.9/" });
});
