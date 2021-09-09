$("body").css({ display: "none" });

function CheckRedirect() {
  let URL = "https://t-programmer-t.github.io/Login/";
  if (document.referrer !== URL) {
    window.location.href = "/";
  } else {
    return true;
  }
}

if (CheckRedirect()) {
  $("body").css({ display: "block" });
}
