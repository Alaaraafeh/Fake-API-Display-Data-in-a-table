let xreq = new XMLHttpRequest();
xreq.open("GEt", "https://jsonplaceholder.typicode.com/users");
xreq.send("");
xreq.onreadystatechange = function () {
    if (xreq.readyState === 4 && xreq.status === 200) {
        console.log(xreq.response);
        let userData = JSON.parse(xreq.response);
        console.log(userData);
        for(let i = 0; i < userData.length; i++) {
            let data = document.querySelector(".data");
            data.innerHTML += 
            `<table border="1" style="width: 100%;">
                <tr>
                    <td>${userData[i]["id"]}</td>
                    <td>${userData[i]["name"]}</td>
                </tr>
            </table>`
            //document.querySelector(".p").innerText += userData[i]["name"];
        }
    }
}


//? Bonus --> get data by Id
// function GetDataBYID() {
//     let inp = document.getElementById("databyid").value;
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + inp);
//     xhr.send("");
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.response);
//         let res = JSON.parse(xhr.response);
//         console.log(res);
//         document.getElementById("title").innerText = res.title;
//         document.getElementById("body").innerText = res.body;
//         // for(let i=0;i<res.length;i++){
//         //   document.getElementById("res").innerText += res[i]["title"]
//         // }
//       }
//     };
//   }
