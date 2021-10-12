// This code is not mine bc im bad at requests

function Get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function Post(url, data) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(data)
    })
}
function Delete(url) {
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json"
    }
  })
}
function Put(url, data) {
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(data)
  })
}