chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.command === "openSignUp") {
    openNewUrl({ url: "https://thanx.finance/" });
    sendResponse(true);
  }
  if (msg.command === "authUser") {
    (async () => {
      let authRes = await authUser(msg.loginInfo);
      sendResponse(authRes);
    })();
  }
  if (msg.command === "openNewTab") openNewUrl(msg);
  return true;
});

const openNewUrl = (data) => {
  chrome.tabs.create({ url: data.url });
};

const authUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, userId: 123 });
    }, 2000);
  });
