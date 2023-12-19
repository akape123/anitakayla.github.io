function hitungPertidaksamaan() {
    // Mendapatkan nilai a, b, dan c dari input
    var a = document.getElementById("input-a").value;
    var b = document.getElementById("input-b").value;
    var c = document.getElementById("input-c").value;

    // Validasi input
    if (a === "" || b === "" || c === "") {
        alert("Silakan masukkan nilai a, b, dan c!");
        return;
    }

    // Menghitung diskriminan
    var diskriminan = b * b - 4 * a * c;

    // Menentukan akar-akar persamaan
    if (diskriminan > 0) {
        var x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
        var x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
        document.getElementById("hasil").innerHTML = "Akar-akar pertidaksamaan kuadrat: x1 = " + x1 + ", x2 = " + x2;
    } else if (diskriminan === 0) {
        var x = -b / (2 * a);
        document.getElementById("hasil").innerHTML = "Akar kembar pertidaksamaan kuadrat: x = " + x;
    } else {
        document.getElementById("hasil").innerHTML = "Pertidaksamaan kuadrat tidak memiliki akar real.";
    }
}
