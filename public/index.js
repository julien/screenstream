import { getScreenRecorder, createVideo } from "./media.js";

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
      btn.textContent = "start screensharing";
      recorder.addEventListener("dataavailable", e => {
        video.src = URL.createObjectURL(e.data);
        video.play();
      });
      recorder.stop();
      sharing = false;
    }
  });
});
