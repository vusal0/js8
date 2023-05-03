function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none");
    modal.classList.remove("gorsenmesin");
}

function closeModal() {
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
    modal.classList.add("gorsenmesin");
}

function addTr() {
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");

    let person = {
        name: nameInp.value,
        surname: surnameInp.value
    }
    let arr = [];
    arr.push(person);

    const tbody = document.querySelector("table tbody");
    const rowCount = tbody.getElementsByTagName("tr").length;
    tbody.innerHTML +=
        `<tr>
        <th>${rowCount + 1}</th>
        <td>${nameInp.value}</td>
        <td>${surnameInp.value}</td>
        <td><button class="del-btn" arr-ind='${rowCount}' onclick="delClick(event)">Delete</button></td>
    </tr>`
    nameInp.value = "";
    surnameInp.value = "";
    closeModal();
}

function delClick(e) {
    if (e.target.classList.contains("del-btn")) {
        const index = e.target.getAttribute("arr-ind");
        deleteRow(index);
    }
}


function deleteRow(index) {
    const tbody = document.querySelector("table tbody");
    const rows = tbody.getElementsByTagName("tr");

    if (index >= 0 && index < rows.length) {
        rows[index].remove();
    }
}