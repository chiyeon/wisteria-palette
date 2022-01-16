var clipboardNoti = document.getElementById("clipboard-notification")
var clipboardReset;

// on start
var paletteColors = document.getElementsByClassName("palette-color")
for(var i = 0; i < paletteColors.length; i++) {
    paletteColors[i].key = i
    paletteColors[i].onclick = (e) => {
        Copy(`--${e.target.classList[1]}`)
    }
}

function Copy(color) {
    var hex = getComputedStyle(document.documentElement).getPropertyValue(color)

    navigator.clipboard.writeText(hex)

    clipboardNoti.innerHTML = `Copied <span style="color: ${hex};${color == "--background-primary" ? "text-shadow: 1px 1px var(--background-secondary);" : ""}">${hex}</span> to Clipboard!`;
    clipboardNoti.classList.remove("hidden")

    if(clipboardReset) {
        clearInterval(clipboardReset)
    }

    clipboardReset = setInterval(() => {
        clipboardNoti.classList.add("hidden")
    }, 3000)
}