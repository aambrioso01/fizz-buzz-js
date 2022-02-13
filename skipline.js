// references
// https://www.w3schools.com/js/default.asp

function SkipLine() {
    // clear
    document.getElementById("output").innerHTML = "";
    
    // get user input
    // default n = 100
    let n = document.getElementById("input").value;

    // list all numbers 1 to n
    // numbers divisible by 4 set to Skip
    // numbers divisible by 9 set to Line
    // numbers divisible by 4 and 9 set to SkipLine
    if (n != null) {
        for (i = 1; i <= n; i++)
        {
            if (i % 4 == 0)
            {
                if (i % 9 == 0)
                {
                    document.getElementById("output").innerHTML += "SkipLine<br>";
                } else
                {
                    document.getElementById("output").innerHTML += "Skip<br>";
                }
            } else if (i % 9 == 0)
            {
                document.getElementById("output").innerHTML += "Line<br>";
            } else
            {
                document.getElementById("output").innerHTML += i + "<br>";
            }
        }
        document.getElementById("output").innerHTML += "<br>";  
    }
}