var infoText = document.getElementById("info")
var clipboardNoti = document.getElementById("clipboard-notification")

var selectedPaletteColor;

// on start
var paletteColors = document.getElementsByClassName("palette-color")
for(var i = 0; i < paletteColors.length; i++) {
    paletteColors[i].key = i
    paletteColors[i].onclick = (e) => {
        var colorID = e.target.classList[1];

        var number = colorID[6]
        var color = getComputedStyle(document.documentElement).getPropertyValue(`--${colorID}`)
        
        infoText.textContent = `Color ${number}`

        if(selectedPaletteColor != undefined)
            selectedPaletteColor.classList.remove("palette-color-selected")
        e.target.classList.add("palette-color-selected");
        selectedPaletteColor = e.target;

        Copy(color)
    }
}

function Copy(color) {
    navigator.clipboard.writeText(color)

    clipboardNoti.textContent = `Copied ${color} to Clipboard!`;
    clipboardNoti.classList.remove("hidden");
}

console.log(getComputedStyle(document.documentElement).getPropertyValue("--color-1"))