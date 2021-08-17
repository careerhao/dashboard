const fetchOptions = {  
    // For cors problem
    mode: 'cors',
    // If app requires cookie, consider about following stuff
    //credentials: 'include',
};

const getApiUrl = path => {
    const cleanPath = path.replace(/\/+$/, '') // Remove trailing slashes
    const url = `${process.env.VUE_APP_API_URL}/${cleanPath}/`
    
    if (method === 'GET' && Object.keys(data).length > 0) {
      const queryString = Object.keys(data)
        .map(key => `${key}=${data[key]}`)
        .join('&')
  
      return `${url}?${queryString}`
    }
    
    return url;
  }

const fetchAPI = method => (path, config = {}) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const body = method !== 'GET' ? { body: JSON.stringify(config.body) } : {}

  return fetch(getApiUrl(method, path), {
    ...fetchOptions(),
    method,
    headers,
    ...body,
  }).then(response => {
    if(response.status >= 200 && response.status < 400) {
      return response;
    }

    throw response;
  }).catch(err => {
    throw (err);
  });
};


export default {
  get: fetchAPI('GET'),
  post: fetchAPI('POST'),
  put: fetchAPI('PUT'),
  delete: fetchAPI('DELETE'),
}