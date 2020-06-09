class Api {
  static get headers() {
    return {
      "content-type": "application/json",
    };
  }

  static async get(route, params) {
    return Api.xhr({ route, params, method: "GET" });
  }

  static async xhr({ route, params, body, method, isFormtype }) {
    try {
        const options = { method };

        options.headers = Api.headers;
        if (body) {
            options.body = JSON.stringify(body);
        }
        const response = await fetch(route, options);
        return response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default Api;
