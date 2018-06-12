let request = new XMLHttpRequest();


function AJAX(method, url, sync) {
    request.open(method, url, sync);

    request.send();

    request.onreadystatechange = function () {
        //  if(request.status == 404){
        //     alert("sehife tapilmadi");
        //  }
        //  console.log(request.readyState)
        // console.log("statusText: " + request.statusText);
        // let data = request.responseText;
        // console.log(data);
        // }

    }
    request.onload = function () {
        let data = JSON.parse(request.responseText);

        for (let item of data) {
            // document.write(`
            //     <h1>Id: ${item.id}</h1>
            //     <h2>Title: ${item.title}</h2>
            //     <hr/>
            //     `) 

            document.write(
                " <h1>Id: " + item.id + "</h1>" +
                "<h2>Title: " + item.title + "</h2>" +
                "<hr/>")
        }

    }


}

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    AJAX("GET", "https://jsonplaceholder.typicode.com/posts", true)
});