function chetchik() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var cnt = document.getElementById('cnt').value;
    $.ajax({
        type:'get',
        url: 'http://currency.changer/',
        data:{'from':from, 'to':to, 'cnt':cnt},
        dataType : "text",
        success:function (data) {
            document.getElementById('result').innerHTML = data;
        }
    });
}
