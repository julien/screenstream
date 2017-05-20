window.addEventListener("load", () => {
  const constraints = {
    // audio: true,
    // video: true,

    video: {
      mediaSource: "screen"
    }
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {
      const vid = document.createElement("video");
      document.body.appendChild(video);
      // vid.src = URL.createObjectURL(stream);
      // vid.play();

      const recorder = new MediaRecorder(stream);
      recorder.addEventListener("dataavailable", e => {
        vid.src = URL.createObjectURL(e.data);
        vid.play();
      });
      recorder.start();

      setTimeout(() => {
        recorder.stop();
      }, 5000);
    })
    .catch(err => {
      console.error(err);
    });
});
