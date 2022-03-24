function sample_api() {
    var request = new XMLHttpRequest();
    const request_url = "https://jsonplaceholder.typicode.com/users/1";
    const action_type = "GET";
    const response_type = "json";

    request.open(action_type, request_url, true);
    request.responseType = response_type;

    request.onload = function () {
        var data = this.response;
        console.log(data);
    };

    request.send();
}
