const seriesSelect = document.querySelector("#seriesSelect");
const videoPlayer = document.querySelector("#videoPlayer");

seriesSelect.addEventListener("change", function() {
  const selectedSeries = seriesSelect.value;
  videoPlayer.src = selectedSeries;
});
