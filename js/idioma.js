function setLanguage(lang) {
  const select = document.querySelector("select.goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  }
}
