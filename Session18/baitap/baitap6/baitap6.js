let yers = Number(prompt("một năm bất kỳ"));


if (yers % 4 == 0) {
    alert(`Năm ${yers} là năm nhuận`);

} else if (yers % 100 == 0) {
    alert(`Năm ${yers} Không phải là năm nhuận`)

} else if (yers % 400 == 0) {
    alert(`Năm ${yers} là năm nhuận`);
} else {
    alert(`Năm ${yers} Không phải là năm nhuận`);
}
