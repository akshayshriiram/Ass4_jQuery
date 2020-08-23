let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let menu_items = null;

$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
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
    
document.querySelector("#restaurant").addEventListener("change",showdetails);

function showdetails(e){
    let index = e.target.value;
    console.log(index);
    
    if(menu_items != null){
        let x = menu_items[index];
        let s_price = menu_items[index].price_small;
        console.log('small price:  '+s_price);
        let l_price = menu_items[index].price_large;
        console.log('large price:  '+l_price);
        console.log(x);
        let pricesmall;
        
        if(x.price_small != null){
            pricesmall = x.price_small;
            
        }
        else{
            pricesmall = "Not available";
        }
        let descrp = x.description;
        if(descrp == ""){
            descrp = "Description not available";
        }
        
        document.querySelector("#menuname").textContent = x.name;
        document.querySelector("#id").textContent = x.id;
        document.querySelector("#sname").textContent = x.short_name;
        document.querySelector("#descp").textContent = descrp;
        document.querySelector("#psmall").textContent = pricesmall;
        document.querySelector("#plarge").textContent = x.price_large;
        document.getElementById("tabl").style.display = "block";
    }

    
}


});
