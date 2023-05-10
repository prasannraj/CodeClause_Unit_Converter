function convert() {
	var celsius = document.getElementById("celsius").value;
	var fahrenheit = document.getElementById("fahrenheit").value;

	if (celsius != "") {
		fahrenheit = parseFloat(celsius) * 9 / 5 + 32;
		document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
	} else if (fahrenheit != "") {
		celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
		document.getElementById("celsius").value = celsius.toFixed(2);
	}
}
