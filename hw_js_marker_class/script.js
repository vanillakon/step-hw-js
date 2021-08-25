let marker,
  quantity = 1;
function outStr() {
  let inp = document.querySelector(".inp");
  let sel = document.querySelector(".sel");
  let out = document.querySelector(".out");
  document.querySelector(".btn.primary").addEventListener("click", () => {
    if (!!inp.value.trim()) {
      marker = new MarkerOnSteroids(sel.value, quantity);
      let { words, color, restWords } = marker.print(inp.value);
      let p = document.createElement("p");
      p.innerHTML = `${
        words
          ? words
          : '<span style="color: red"><i class="material-icons left">error_outline</i>Not enough ink for printing...</span>'
      } | Remaining ink: ${(marker.quantity * 100).toFixed(2)} %`;
      p.style.cssText = `color: ${color}`;
      out.appendChild(p);
      quantity = marker.quantity;
      inp.value = restWords ? restWords : "";
    }
    return marker, quantity;
  });
}
outStr();

function addSteroids() {
  let inp2 = document.querySelector(".inp2");

  document.querySelector(".btn.danger").addEventListener("click", () => {
    if (!!inp2.value.trim() && !isNaN(inp2.value)) {
      quantity = marker.addSteroids(inp2.value.trim());
      inp2.value = "";
    }
  });
}
addSteroids();
