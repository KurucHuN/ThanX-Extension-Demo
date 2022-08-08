export const sendToBg = (msg) => {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(msg, (res) => {
      resolve(res);
    });
  });
};
