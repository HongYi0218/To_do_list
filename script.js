document.getElementById('addBtn').addEventListener('click', function() {
    const list = document.querySelector("#myList");
    const input = document.querySelector("#newText");

    if(input.value.trim() !== ''){
    
        const newItem = document.createElement('li');
        newItem.textContent = input.value;
        list.appendChild(newItem);
        input.value = '';
    }else{
        alert('Enter Something');
    }
})