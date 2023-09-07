let a = prompt('стоимость товара')
let b = prompt('кол-во денег клиента')

if(a == b){
    alert('Покупка совершена')
}
else{
    if(a>b){
        let x = a - b
        alert('Для покупки не хватает ' + x + 'р.')
    }
    else{
        let x = b - a
        alert('Покупка совершена. Ваша сдача ' + x + 'р.')
    }
}