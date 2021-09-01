async function SHA512(Plaintext) {
  const Encode_Array = new TextEncoder().encode(Plaintext);
  const Hash = await crypto.subtle.digest("SHA-512", Encode_Array);
  const Hash_Array = Array.from(new Uint8Array(Hash));
  const Hash_Hex = Hash_Array.map((Bytes) =>
    Bytes.toString(16).padStart(2, "0")
  ).join("");
  return Hash_Hex;
}

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
    alert("Login Successfully!");
  } else {
    alert("Username Or Password Incorrect!");
  }
}
