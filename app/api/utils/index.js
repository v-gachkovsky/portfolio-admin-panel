function withoutEmptyProps(data) {
  const filterEmptyProps = obj => Object.keys(obj).reduce((newObj, prop) => {
    const value = obj[prop];

    if (value !== '' && value !== undefined) {
      return {
        ...newObj,
        [prop]: value,
      };
    }

    return newObj;
  }, {});

  if (Array.isArray(data)) {
    return data.map(filterEmptyProps);
  } else if (typeof data === 'object' && data !== null) {
    return filterEmptyProps(data);
  } else {
    return data;
  }
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function request(url, options = {}, responseInterceptor = parseJSON) {
  return fetch(url, options)
    .then(response => responseInterceptor(response))
    .catch((e) => console.error(e.toString()));
}

export function createAPIRequests(apiBase) {
  const ptmRequest = httpMethod => (endpoint, data, responseInterceptor) => {
    const url = `${apiBase}${endpoint}`;

    const options = {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    };

    if (data) {
      options.body = JSON.stringify(withoutEmptyProps(data));
    }

    return request(url, options, responseInterceptor);
  };

  return {
    get: ptmRequest('GET'),
    post: ptmRequest('POST'),
    put: ptmRequest('PUT'),
    destroy: ptmRequest('DELETE'),
  };
}
