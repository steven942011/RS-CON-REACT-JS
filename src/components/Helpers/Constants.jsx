const Constants = Object.freeze({
  BASE_URL: "http://192.168.0.100:4700/api/",
  ENDPOINTS: {
      REGISTER_USER: 'user/register',
  },
  HTTP_METHODS: {
      GET: 'GET',
      POST: 'POST',
      PUT: 'PUT',
      DELETE: 'DELETE',
  },
  RESPONSE_STATES: {
      NOT_SAVED: 'not_saved',
      SAVED: 'saved',
      ERROR: 'error',
  },
  HEADER_NAMES: {
      CONTENT_TYPE: 'Content-Type',
      ACCEPT: 'Accept',
      AUTHORIZATION: 'Authorization',
  },
  HEADER_VALUES: {
      JSON: 'application/json',
      XML: 'application/xml',
  },
});

export default Constants;