import {getScreenRecorder, createVideo} from "./media.js";

window.addEventListener("load", () => {
  const container = document.querySelector(".container");
  const btn = container.querySelector(".btn");

  const video = createVideo(640);
  video.classList.add("video");
  container.insertBefore(video, btn);

  let sharing = false;
  let recorder;

  btn.addEventListener("click", () => {
    if (sharing === false) {
      sharing = true;

      getScreenRecorder().then(data => {
        const { rec, str } = data;

        video.src = URL.createObjectURL(str);
        video.play();

        recorder = rec;
        btn.textContent = "stop screensharing";

        recorder.start();
      });
    } else {
      sharing = false;
      btn.textContent = "start screensharing";

      recorder.addEventListener("dataavailable", e => {
        const url = URL.createObjectURL(e.data);

        video.src = url;
        video.play();

        forceDownload(url, container);
      });

      recorder.stop();
    }
  });

  function forceDownload(url, parent) {
    const a = document.createElement('a');
    a.classList.add('hidden');

    const p = parent.contains(parent) ? parent : document.body;
    p.appendChild(a);
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.webm');
    a.click();
  }
});
