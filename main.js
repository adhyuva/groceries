let itemNum = 1;
function addItem() {
    let addInput = `Item ${itemNum}:<input name='grocery${itemNum}' id='item${itemNum}'></input><br/><br/>`;
    document.getElementById('items').innerHTML += addInput;
    itemNum++;
}
