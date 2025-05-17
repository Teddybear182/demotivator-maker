function makeImage(){
  let demotivatorText = document.getElementById("demotivator-text");
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let fonts = document.getElementById("fonts");
  let font = fonts.options[fonts.selectedIndex].value;

  switch (font) {
    case "sansserif":
      demotivatorText.style.fontFamily = "Arial, sans-serif";
      break;
    case "impact":
      demotivatorText.style.fontFamily = "Impact, sans-serif";
      break;
    case "monospace":
      demotivatorText.style.fontFamily = "monospace";
      break;
    case "cursive":
      demotivatorText.style.fontFamily = "cursive";
      break;
    case "comicsans":
      demotivatorText.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
      break;
    case "timesnewroman":
      demotivatorText.style.fontFamily = "Times New Roman, Times, serif";
      break;
  }

  document.getElementById("demotivator-title").textContent = title;
  document.getElementById("demotivator-description").textContent = description;

  let file = document.getElementById("CHOOSE_FILE");
  let png = file.files[0];
  if (!png) {
    alert("Please select an image file.");
    return;
  }
  if (document.getElementById('demotivator-image')) {
    let child = document.getElementById('demotivator-image');
    document.getElementById("demotivator").removeChild(child);
  }
  let img = document.createElement('img');
  img.src = URL.createObjectURL(png);
  img.className = "demotivator-image";
  img.id = "demotivator-image";
  document.getElementById("demotivator").appendChild(img)
  };

function downloadImage() {
  const demotivator = document.getElementById('demotivator');
  html2canvas(demotivator).then(canvas => {
    canvas.toBlob(function(blob) {
      let url = URL.createObjectURL(blob);
      let link = document.createElement('a');
      link.href = url;
      link.download = "demotivator.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, "image/png")
  })
}

function reset() {
  document.getElementById("demotivator-title").textContent = "";
  document.getElementById("demotivator-description").textContent = "";
  if (document.getElementById('demotivator-image')) {
    let child = document.getElementById('demotivator-image');
    document.getElementById("demotivator").removeChild(child);
  }
}