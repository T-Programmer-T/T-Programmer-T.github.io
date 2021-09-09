/**
 * SHA-512 Hash Function
 *
 * @param {string} Plaintext
 * @return {string}
 */
async function SHA512(Plaintext) {
  const Encode_Array = new TextEncoder().encode(Plaintext);
  const Hash = await crypto.subtle.digest("SHA-512", Encode_Array);
  const Hash_Array = Array.from(new Uint8Array(Hash));
  const Hash_Hex = Hash_Array.map((Bytes) =>
    Bytes.toString(16).padStart(2, "0")
  ).join("");
  return Hash_Hex;
}
