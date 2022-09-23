chrome.storage.sync.get(["user", "password", "autologin"], function (result) {
     if (result.user != null) {
          document.getElementById("username").value = result.user;
          document.getElementById("password").value = result.password;
     }
});
document.getElementById("btnsave").onclick = function (e) {
     document.getElementById("btnsave").textContent = "Đang lưu...";
     chrome.storage.sync.set({
          user: document.getElementById("username").value,
          password: document.getElementById("password").value,
     });
};
document.getElementById("turnOffAuto").onclick = function (e) {
     chrome.storage.sync.set(null);
};
