# Unit-Converter
HTML:
<!DOCTYPE html>
<html>
<head>
	<title>Unit Converter</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="container">
		<h1>Unit Converter</h1>
		<form>
			<div class="input-group">
				<label for="celsius">Celsius:</label>
				<input type="number" id="celsius" placeholder="Enter temperature in Celsius">
			</div>
			<div class="input-group">
				<label for="fahrenheit">Fahrenheit:</label>
				<input type="number" id="fahrenheit" placeholder="Enter temperature in Fahrenheit">
			</div>
			<button type="button" onclick="convert()">Convert</button>
		</form>
	</div>
	<script src="script.js"></script>
</body>
</html>
-----------------
CSS:
body {
	font-family: Arial, sans-serif;
	background-color: #fdfcfc;
}

.container {
	margin: 200px  auto;
	max-width: 500px;
	padding: 20px;
	background-color: #070707;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
}

h1 {
	text-align: center;
	margin-bottom: 40px;
	color: #fdfafa;
}

form {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.input-group {
	flex-basis: calc(50% - 10px);
    margin-right: 10px;
	margin-bottom: 20px;
}

label {
	display: block;
	margin-bottom: 10px;
	color: #fcfafa;
}

input {
	width: 95%;
	padding: 10px;
	border-radius: 5px;
	border: none;
	box-shadow: 0px 0px 5px rgba(238, 13, 13, 0.2);
}

button {
	display: block;
	margin: 0 auto;
	padding: 10px 20px;
	border-radius: 5px;
	border: none;
	background-color: #f71d1d;
	color: #fff;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	transition: all 0.3s ease;
}

button:hover {
	background-color: #bd0404;
}

-----------
JS:
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
