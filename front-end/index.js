//Truy cập dữ liệu server
// fetch("  http://localhost:9998/products/")
// .then(res =>{
//     console.log(res);
//     return res.json();
// })
// .then(data =>{
//     console.log(data);
//     // Tiến hành xử lý dữ liệu
// })

//Delete
// fetch("  http://localhost:9998/products/3", {
//     method: "DELETE",

// })
// .then(res =>{
//     console.log(res);
//     return res.json();
// })
// .then(data =>{
//     console.log(data);
//     // Tiến hành xử lý dữ liệu
// })

//Add new
fetch("  http://localhost:9998/products", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: "ip",
        name: "iphone",
        price: 1000000,
        description: "iphone 12",
        image: "https://i.imgur.com/32i723v.jpg",
        category: "mobile"
    })
})
.then(res =>{
    console.log(res);
    return res.json();
})
.then(data =>{
    console.log(data);
    // Tiến hành xử lý dữ liệu
})

