function draw() {
    let n = document.getElementById("numberdraw").value;

    let draw = Math.round(Math.random() * n);

    document.getElementById("result").innerHTML = draw;
}