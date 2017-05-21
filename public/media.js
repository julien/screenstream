const defaultConstraints = {
  audio: true,
  video: {
    mediaSource: "screen"
  }
};

export function createRecorder(constraints = defaultConstraints) {
  return navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {
      return { rec: new MediaRecorder(stream), str: stream };
    })
    .catch(err => {
      console.error(err);
    });
}

export function createVideo(maxWidth) {
  const screenWidth = screen.width;
  const screenHeight = screen.height;
  const screenRatio = screenWidth / screenHeight;

  let width = Number.isNaN(maxWidth) ? 640 : maxWidth;
  let height = width / screenRatio;

  const video = document.createElement("video");
  video.width = width;
  video.height = height;
  return video;
}
