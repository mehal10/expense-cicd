let form = document.getElementById("expense-form");
let list = document.getElementById("expense-list");
let totalDisplay = document.getElementById("total");

let total = 0;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let amount = parseFloat(document.getElementById("amount").value);

    total += amount;
    totalDisplay.textContent = total;

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${title} - ₹${amount}</span>
        <button onclick="deleteExpense(this, ${amount})">❌</button>
    `;

    list.appendChild(li);

    form.reset();
});

function deleteExpense(button, amount) {
    total -= amount;
    totalDisplay.textContent = total;
    button.parentElement.remove();
}