// let color = '#3aa757';

//one time initialization of an extension
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.local.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

//filter events
// chrome.webNavigation.onCompleted.addListener(function () {
//   // alert("This is my favorite website!");
//   console.log('Welcome %s', document.getElementsByClassName("layout__header")[0].getElementsByClassName("user-nick")[0].innerHTML);
// }, { url: [{ urlMatches: 'https://www.geoguessr.com/' }] });

//filter events
// chrome.tabs.onActivated.addListener(tab => {
//   // alert("This is my favorite website!");
//   console.log(tab)
//   // console.log('Welcome %s', document.getElementsByClassName("layout__header")[0].getElementsByClassName("user-nick")[0].innerHTML);
// }//, { url: [{ urlMatches: 'https://www.geoguessr.com/' }] }
// );

//create context menu
// chrome.runtime.onInstalled.addListener(function() {
//   chrome.contextMenus.create({
//     "id": "sampleContextMenu",
//     "title": "Sample Context Menu",
//     "contexts": ["all"]
//   });
// });

