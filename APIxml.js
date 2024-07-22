const xhr = new XMLHttpRequest();
xhr.open("GET","https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json");
xhr.onreadystatechange = function(){
    if(xhr.readyState===4){
        let data = JSON.parse(this.responseText);
        console.log(data.bio);
    }
}
xhr.send();