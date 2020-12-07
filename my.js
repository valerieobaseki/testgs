function testGS(){
    var url = "https://script.googleusercontent.com/macros/echo?user_content_key=yt-Qtglrya7GGwnUwotvnCsznsm274NJyH5Lk1OST2ykSw4CJ3dUKiTQZU2gD6bjn8XtUBbOq3-sxba-mjLQUASvy22lZ5Fom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA3puq2BYbE7rV7oWIl31Xq-i5AhQYBwWyEbddyrwKPJ0on5HHmRh9toLyd0geonWDHYlvxnKr4OGGaU2pP6Ntk&lib=MBNzBteGq5n9YUmnt-nME9dUj6pQy2WoH";

    fetch(url)
    .then(d => d.json())
    .then(d => {
    document.getElementById("app").textContent = d[0].message.first;
    });


}

document.getElementById("btn").addEventListener("click", testGS);
