// let xreq = new XMLHttpRequest();
// xreq.open("GEt", "https://jsonplaceholder.typicode.com/users");
// xreq.send("");

// xreq.onreadystatechange = function () {
//     if (xreq.readyState === 4 && xreq.status === 200) {
//         console.log(xreq.response);
//     let userData = JSON.parse(xreq.response);
//     console.log(userData);
//         for(let i = 0; i < userData.length; i++) {
//             let data = document.querySelector(".data");
//             data.innerHTML += 
//             `<table border="1" style="width: 100%;">
//                 <tr>
//                     <td>${userData[i]["id"]}</td>
//                     <td>${userData[i]["name"]}</td>
//                 </tr>
//             </table>`
//             //document.querySelector(".p").innerText += userData[i]["name"];
//         }
//     }
// }



let table = document.createElement("table");
table.style.width = "80%";
table.style.margin = "10px auto";
table.style.border = "1px solid grey";
//table.style.borderCollapse = "collapse";
document.body.appendChild(table);

let row = document.createElement("tr");

let thead = ["ID", "Name", "Email", "See more"];
thead.forEach(header => {
    let th = document.createElement("th");
    th.innerText += header;  // innerText = to textContent
    th.style.padding = "10px"
    th.style.border = "1px solid grey"
    th.style.backgroundColor ="lightgrey"
    row.appendChild(th);
});
table.appendChild(row);

let getDataReq = new XMLHttpRequest();
getDataReq.open("GEt", "https://jsonplaceholder.typicode.com/users");
getDataReq.send("");
getDataReq.onreadystatechange = function (){
    if(getDataReq.readyState === 4 && getDataReq.status === 200) {
        console.log(getDataReq.response);
        let res = JSON.parse(getDataReq.response)
        addToTable(res);
    }
}

function addToTable(dataarr) {
    dataarr.forEach((item) => {
        let row = document.createElement("tr");

        let idCell = document.createElement("td");
        idCell.textContent = item.id;
        idCell.style.textAlign = "center";
        idCell.style.border = "1px solid grey";
        idCell.style.padding = "10px"
        row.appendChild(idCell);
        table.appendChild(row);

        let nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        nameCell.style.textAlign = "center";
        nameCell.style.border = "1px solid grey";
        nameCell.style.padding = "10px"
        row.appendChild(nameCell);
        table.appendChild(row);

        let emailCell = document.createElement("td");
        emailCell.textContent = item.email;
        emailCell.style.textAlign = "center";
        emailCell.style.border = "1px solid grey";
        emailCell.style.padding = "10px"
        row.appendChild(emailCell);
        table.appendChild(row);

        let butt = document.createElement("button");
        butt.textContent = "see more";
        butt.textContent.color = "black"
        butt.addEventListener("click", () => alert(JSON.stringify(item)))

        let seemoreCell = document.createElement("td");
        seemoreCell.style.textAlign = "center";
        seemoreCell.appendChild(butt)
        seemoreCell.style.padding = "10px";
        seemoreCell.style.border = "1px solid grey";

        row.appendChild(seemoreCell);
        table.appendChild(row);
    })
}


let inp = document.createElement("input");
inp.placeholder = "enter user ID";
inp.style.border = "1px solid";
inp.style.borderRadius ="10px"
inp.style.padding = "10px";
//document.body.appendChild(inp);

let sub = document.createElement("button");
sub.type = "submit";
sub.textContent = "serach";
sub.style.backgroundColor = "lightgrey"
sub.style.border = "1px"
sub.style.borderRadius = "10px"
sub.style.padding = "10px"

let div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.gap = "20px"; // Add 20px space between the items
div.appendChild(inp);
div.appendChild(sub)
document.body.appendChild(div);

let id;
sub.addEventListener("click",()=>{
    id = inp.value;
    inp.value = "";
    console.log(id);
    GetById(id)
})

function GetById(id) {
    let xreq = new XMLHttpRequest();
    xreq.open("GET", "https://jsonplaceholder.typicode.com/users/" + id);
    xreq.send("");
    xreq.onreadystatechange = function () {
        if(xreq.readyState === 4 && xreq.status === 200) {
            let res = JSON.parse(xreq.response); // from json to object
            alert(JSON.stringify(res)); // from object to string
        }
    }

}

