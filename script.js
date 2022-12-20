//your code here
let itemInput = document.getElementById('item-name');
let qtyInput = document.getElementById('Quantity-count');
let amountInput = document.getElementById('Amount-value');

let addbtn = document.getElementById('add');
let table = document.getElementById('table-v');
let total = document.getElementById('total-v');

let priceArr = [];
function additem() {
    let item = itemInput.value;
    let qty = qtyInput.value;
    let price = amountInput.value;
    let sum = 0;

    if(item !== "" && qty !== "" && price !== "") {
        let row = document.createElement("tr");
        priceArr.push(parseInt(price));
        row.innerHTML = `<td>${item}</td> <td>${qty}</td> <td>${price}</td>`;
        for(let i = 0; i < priceArr.length; i++) {
            sum += priceArr[i];
        }
        console.log(sum);
        table.append(row);
        total.innerText = sum;

        itemInput.value = "";
        qtyInput.value = "";
        amountInput.value = "";
    }


}

addbtn.addEventListener('click', additem);

