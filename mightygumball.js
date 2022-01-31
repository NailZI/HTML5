// let url = "http://someserver.com/data.json";
// let request = new XMLHttpRequest();
// request.open("GET", url);
// request.onload = function () {
//   if (request.status == 200) {
//     //alert("Data received!")
//     alert(request.responseText);
//   }
// };
// request.send(null);


window.onload = function() {
    // let url = 'http://127.0.0.1:5500/sales.json'
    let url = 'http://gumball.wickedlysmart.com'
    
    let request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = function () {
        if (request.status == 200) {
            //alert("Data received!")
            updateSales(request.responseText);
          }
        };
    request.send(null);
}

function updateSales(responseText) {
    let salesDiv = document.getElementById("sales")
    // salesDiv.innerHTML = responseText
    let sales = JSON.parse(responseText)
    for (let i = 0; i < sales.length; i++) {
        let sale = sales[i]
        let div = document.createElement("div")
        div.setAttribute("class", "saleItem")
        // div.innerHTML = sale.name + " sold " + sale.sales + " gumballs "
        div.innerHTML = sale.name + " продано " + sale.sales + " жевательных резинок "
        salesDiv.appendChild(div)
    }
}