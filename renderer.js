const infoEl = document.getElementById("info");

// preload.js によって global(window) に versions が expose されているので下記のように versions にアクセス可能
infoEl.innerHTML = `This app is using Chrome (v${window.versions.chrome()})`;

window.versions.ping().then((res) => {
  console.log(res);
});
