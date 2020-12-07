function testGS(){
    var url = "https://script.googleusercontent.com/macros/echo?user_content_key=aeAYZeI6HkX-ljx1FpMZEst8onQkH8uG6LsMjD1JvxvDMb9yZyt3DKgraStv66FL2kfZzJsp6WoeBL9xLOgnv6XforothQmem5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMrfKI7o3W-zki4XTlk2h1_sxrxB4Dm-gUBuJZ8Wh8uj9w3eanhbrf7Oy_om9_nY0ndO6ACmiFd3GGaU2pP6Ntk&lib=MLavx5prdqfjzSqxLRTTOKdUj6pQy2WoH";

    fetch(url)
    .then(d => d.json())
    .then(d => {
    document.getElementById("app").textContent = d[0].message;
    });


}

document.getElementById("btn").addEventListener("click", testGS);
