export const Fetch = async ({
  endpoint,
  method = 'GET',
  contentType = 'application/json',
  body = {},
  token = ''
}) => {
  const object = {
    headers: {
      'Content-Type': contentType,
      Authorization: token
    },
    method
  };
  if (method !== 'GET') {
    if (contentType === 'application/json') {
      object.body = JSON.stringify(body);
    } else {
      let formDataObject = new FormData();
      for (let key in body) {
        formDataObject.append(key, body[key]);
      }
      object.body = formDataObject;
    }
  }
  return await fetch(endpoint, object);
};
