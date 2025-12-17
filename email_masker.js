const maskEmail = (email) => {
  const arroba_index = email.indexOf("@");
  const domain = email.slice(arroba_index);

  // The slice before the '@' on an email
  const local_part = email.slice(0, arroba_index);

  const size_mask = local_part.length - 2;

  const masked = local_part[0] + '*'.repeat(size_mask) +local_part[local_part.length - 1];

  return masked + domain;
}

const email = 'pedro@gmail.com';

console.log(maskEmail(email));