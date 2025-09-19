let intervalId = null;

document.getElementById("notifyBtn").addEventListener("click", () => {
  if (!("Notification" in window)) {
    alert("Your browser does not support notifications 😢");
  } else if (Notification.permission === "granted") {
    startInterval();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        startInterval();
      }
    });
  }
});

document.getElementById("stopBtn").addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    alert("Notifications stopped ✅");
  }
});

function startInterval() {
  if (intervalId) return; // already running
  intervalId = setInterval(() => {
    new Notification("hii 𝐴𝑡ℎ𝑎𝑟𝑣˚₊·— ͟͞͞♡", {
      body: "This is your repeating notification! 💖",
      icon: "https://cdn-icons-png.flaticon.com/512/565/565547.png"
    });
  }, 10000); // 10 sec
}