let homeBtn = document.querySelector(".home");
let convertBtn = document.querySelector(".btn");
let langBtn = document.querySelector(".lang");
let main = document.querySelector(".main");
let secondMain = document.querySelector(".second-main");
let fromSelect = document.querySelector(".from");
let toSelect = document.querySelector(".to");
let amount = document.getElementById("amount");
let secondConvert = document.querySelector(".second-conv");
let results = document.createElement("h2");
let fromlabel = document.querySelector(".fromlabel");
let tolabel = document.querySelector(".tolabel");
let img = document.querySelector("img");
let header = document.querySelector("header");
let labelAmount = document.querySelector(".labelamount");

langBtn.addEventListener("click", () => {
  if (langBtn.innerText === "العربية") {
    langBtn.innerText = "English";
    convertBtn.innerText = "تحويل الان";
    fromSelect.innerHTML = `<option value="USD" class="USD">(&#36;) دولار امريكي</option>
      <option value="EUR" class="EUR">(&euro;) يورو</option>
      <option value="ARS" class="ARS">(&#36;) بيزو أرجنتيني</option>
      `;
    toSelect.setAttribute("value", `جنيه مصري`);
    secondConvert.innerHTML = `تحويل`;
    fromlabel.innerText = `من`;
    tolabel.innerText = `الي`;
    labelAmount.innerText = `مبلغ`;
    header.style.cssText = "flex-direction: row-reverse";
  } else if (langBtn.innerText === "English") {
    langBtn.innerText = "العربية";
    convertBtn.innerText = "Convert Now";
    fromSelect.innerHTML = `<option value="USD" class="USD">(&#36;) USD - United States Dollar</option>
      <option value="EUR" class="EUR">(&euro;) EURO</option>
      <option value="ARS" class="ARS">(&#36;) ARS - Argentine Peso</option>
    `;
    toSelect.setAttribute("value", `EGP - Egyptian Pound`);
    secondConvert.innerHTML = `Convert`;
    fromlabel.innerText = `From`;
    tolabel.innerText = `To`;
    labelAmount.innerText = `AMOUNT`;
    header.style.cssText = "flex-direction: row";
  }
});

convertBtn.addEventListener("click", () => {
  main.style.cssText = "display:none;";
  secondMain.style.cssText = "display:flex;";
  img.style.cssText = "filter : blur(10px)";
});
homeBtn.addEventListener("click", () => {
  secondMain.style.cssText = "display:none;";
  main.style.cssText = "display:flex;";
  results.remove();
  amount.value = "";
  fromSelect.value = "USD";
  img.style.cssText = "filter : unset";
});

function Calc() {
  if (amount.value === "") {
    results.innerHTML = `aktb rkam ya 3rs`;
    secondMain.appendChild(results);
  }
  if (fromSelect.value === "USD" && amount.value !== "") {
    results.innerHTML = `${amount.value} DOLLARS = ${(
      amount.value * 15.7
    ).toFixed(2)} EGP`;
    secondMain.appendChild(results);
  } else if (fromSelect.value === "EUR" && amount.value !== "") {
    results.innerHTML = `${amount.value} EURO = ${(amount.value * 17.7).toFixed(
      2
    )} EGP`;
    secondMain.appendChild(results);
  } else if (fromSelect.value === "ARS" && amount.value !== "") {
    results.innerHTML = `${amount.value} ARS = ${(amount.value * 0.15).toFixed(
      2
    )} EGP`;
    secondMain.appendChild(results);
  }
}

secondConvert.addEventListener("click", (e) => {
  e.preventDefault();
  Calc();
});
