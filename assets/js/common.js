function extractUrlValue(key, url) {
  if (typeof url === "undefined") url = window.location.href;
  var match = url.match("[?&]" + key + "=([^&#]+)");
  return match ? match[1] : null;
}

(() => {
  const path = window.location.href;
  const btn_val = atob(extractUrlValue("btn", path));
  const link_val = atob(extractUrlValue("link", path));
  // http://127.0.0.1:5500/index.html?btn=MTIzNDU2Nzg5&link=aHR0cHM6Ly90dXllbnNpbmgubGh1LmVkdS52bg==
  console.log(btn_val, link_val);
})();
