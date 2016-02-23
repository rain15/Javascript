<p>Click the button to change occurrences of World War II to Second World War</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var citrus = fruits.slice(1, 3);
    document.getElementById("demo").innerHTML = citrus;
}
</script>