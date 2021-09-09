async function Login() {
  const Username =
    "447a06e96440d0024d44b359afdfbffe74a4b7152c0cc89de1c072eadc3bcc134c09bace36b49e256485569a5ef85dff76eb65c3ec3e99d0264cd0af669c209d";
  const Password =
    "4abd7f8913f53d6719a0685f6c2650a6e895d60933bf180fddcda92ae224e7905d4baff243415a07586451cb985311e12855c1e3cf53991d3551b6fad604d34d";

  let Input_Username = $("#Username").val();
  let Input_Password = $("#Password").val();

  Input_Username = await SHA512(Input_Username).then((SHA512_Username) => {
    return SHA512_Username;
  });
  Input_Password = await SHA512(Input_Password).then((SHA512_Password) => {
    return SHA512_Password;
  });

  if (Input_Username === Username && Input_Password === Password) {
    window.location.href = "/Home/";
  } else {
    alert("Username Or Password Incorrect!");
  }
}
