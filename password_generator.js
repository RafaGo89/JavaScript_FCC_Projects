/*
 * This function creates an easy password of a given length.
 */

const generatePassword = (passwordLength) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(";
  let newPassword = "";

  for (let i = 1; i <= passwordLength; i++) {
    let randonIdex =
      Math.floor(Math.random() * (characters.length - 1 - 0 + 1)) + 0;
    newPassword += characters[randonIdex];
  }

  return newPassword;
};

const password = generatePassword(8);

console.log(`Generated password: ${password}`);
