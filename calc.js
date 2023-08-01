<!DOCTYPE html>
<html>
<head>
    <title>SIMPLE CALCULATOR</title>
</head>
<body>
    <h1>SIMPLE CALCULATOR</h1>
    <label for="num1">Number 1:</label>
    <input type="number" id="num1">

    <label for="operation">Operations:</label>
    <select id="operation">
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="+">+</option>
        <option value="-">-</option>
    </select>

    <label for="num2">Number 2:</label>
    <input type="number" id="num2">

    <button onclick="calculate()">Calculate</button>

    <h2>Result: <span id="result">0</span></h2>

    <script>
        function calculate() {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const operation = document.getElementById("operation").value;
            let result = 0;

            switch (operation) {
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                default:
                    alert("Invalid operation selected!");
                    return;
            }

            document.getElementById("result").innerText = result;
        }
    </script>
</body>
</html>

