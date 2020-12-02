function testGS(){
    var url = "https://script.googleusercontent.com/macros/echo?user_content_key=HTucSM56ru3FLH6FO2slFfwOx_jWQVRKrizs9ApEw06B0w6uLavh2mN0ag5AohFC4O_TcECgX0Cs9acolJdcQpAfhycX9UTEm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHSUmmmmHVOnPyMmqtWMppYfnby_mwwXUGvQNDlmxplavudFWVGcbNw0VBegouUmz5cdv3aNHr6K&lib=MLavx5prdqfjzSqxLRTTOKdUj6pQy2WoH";

    fetch(url)
    .then(d => d.json())
    .then(d => {
    document.getElementById("app").textContent = d[0].status;
    });


}

document.getElementById("btn").addEventListener("click", testGS);