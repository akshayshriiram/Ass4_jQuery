let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function () {
    $.get(url, function (data, status) {
        if (status == "success") {
            menu_items = data.menu_items;
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key;
                document.querySelector('#restaurant').appendChild(opt);
                // console.log(opt.value);
            }
        }
        
    });
    alert('Sorry!  We only provide large meal!!!')

    document.querySelector("#restaurant").addEventListener("change", showdetails);
    let l_total = 0
    let items = []
    


    function showdetails(e) {
        let index = e.target.value;
        console.log('index:  ' + index);

        if (menu_items != null) {
            n = menu_items[index].name
            console.log(n);
            
            let x = menu_items[index];

            let descrp = x.description;
            if (descrp == "") {
                descrp = "Description not available";
            }
            var largeprice = x.price_large;
            l_total += largeprice
            console.log('total large'+l_total);
            var table = document.getElementById("myTable");
 
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = n;
            cell2.innerHTML = x.price_large;
        

        $('#total').html('Total Price: Rs.'+l_total);

        document.querySelector("#menuname").textContent = x.name;
        document.querySelector("#id").textContent = x.id;
        document.querySelector("#sname").textContent = x.short_name;
        document.querySelector("#descp").textContent = descrp;
        document.querySelector("#psmall").textContent = x.price_small;
        document.querySelector("#plarge").textContent = x.price_large;
        document.getElementById("tabl").style.display = "block";
    }


}


});
