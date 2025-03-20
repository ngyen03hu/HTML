let subject = ["Toán", "lý", "hóa"];
function showSubject() {
    let text = "";
    for (let i = 0; i < subject.length; i++) {
        text += `<li>${subject[i]}</li>`
    }
    document.getElementById("content").innerHTML = text;
}
showSubject();
function addSubject() {
    let name = document.getElementById("subject").value;
    if (name === "") {
        alert("Tên môn học không được để trống!");
        return;
    }
    if (subject.includes(name)) {
        alert("Môn học này đã tồn tại!");
        return;
    }
    console.log("name", name);
    subject.push(name);
    showSubject();
    document.getElementById("subject").value = "";
}