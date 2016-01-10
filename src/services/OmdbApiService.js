const BASE_URL = "http://www.omdbapi.com/";

class OmdbApiService {
  /* @ngInject */
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  _get(url) {
    return this.$http.get(url).then((res) => {
      return res.data;
    });
  }

  search(query) {
    return this._get(`${BASE_URL}?v=1&s=${encodeURIComponent(query)}`);
  }

  find(id) {
    return this._get(`${BASE_URL}?v=1&i=${encodeURIComponent(id)}`);
  }
}

export default OmdbApiService;