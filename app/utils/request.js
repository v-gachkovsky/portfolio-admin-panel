import RequestError from './requestError';

const encode = content => window.btoa
  ? window.btoa(content)
  : content;

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

export default function createRequest(apiBase) {
  function responseInterceptor(response, method) {
    if (response.status === 401 || response.status === 403) {
      // TODO: Logout
      return Promise.resolve();
    }

    // uncomment to test different errors
    // response = new Response('{"success": false, "test": "testsetsetetsetset"}');

    return response
      .text()
      .then(textResponse => {
        if (textResponse === '{}' || textResponse === 'null') {
          throw new Error('Empty server response');
        }

        if (response.ok && method === 'HEAD') {
          return true;
        }

        let jsonResponse;

        try {
          jsonResponse = JSON.parse(textResponse);
        } catch (e) {
          throw new Error(`Can't parse server response: ${encode(textResponse)}`);
        }

        const { success, error, content } = jsonResponse;

        if (success === true) {
          return content;
        }

        if (error && error.errorCode) {
          throw new RequestError(error.errorCode, error.errorDetails, error.message);
        } else if (error) {
          throw new Error(error.message || error);
        } else {
          throw new Error(`Bad server response: ${encode(textResponse)}`);
        }
      });
  }

  const ptmRequest = httpMethod => (endpoint, data) => {
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

  const makeGetRequest = (isHead = false) => (endpoint, data) => {
    let queryParams = '';

    if (data) {
      const searchParams = new URLSearchParams();

      Object.entries(data)
        .filter(t => t[1] !== undefined)
        .forEach(([key, value]) => searchParams.append(key, value));

      queryParams = `${searchParams.toString()}`;
    }

    const url = queryParams
      ? `${endpoint}?${queryParams}`
      : endpoint;

    return ptmRequest(isHead ? 'HEAD' : 'GET')(url, null);
  };

  return {
    get: makeGetRequest(),
    head: makeGetRequest(true),
    post: ptmRequest('POST'),
    put: ptmRequest('PUT'),
    delete: ptmRequest('DELETE'),
  };
}
