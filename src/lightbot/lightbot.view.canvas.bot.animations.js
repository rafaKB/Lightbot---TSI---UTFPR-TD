// Sprite animation definitions used by the bot view (frame timing + sprite sheet offsets).
export function createBotAnimations() {
  var animations = {
    stand: {
      name: 'stand',
      loop: false, // set to true for animation to loop automatically
      totalFrames: 1, // # of images in the animation
      step: 10, // # of frames before animation advances - controls animation speed
      duration: 10, // # of steps the entire animation lasts. stand.duration defines the idle time after turn instructions. for non-looping animations, if the duration is larger than (totalFrames * step), the last frame is displayed until the end.
      width: 80,
      height: 100, // should be same for every animation
      sX: 0  // X offset for where animation is located in source file
    },
    walk: {
      name: 'walk',
      loop: true,
      totalFrames: 8,
      step: 2.5,
      duration: 20,
      width: 80,
      height: 100,
      sX: 80
    },
    light: {
      name: 'light',
      loop: true,
      totalFrames: 14,
      step: 2,
      duration: 28,
      width: 80,
      height: 100,
      sX: 880
    },
    jumpUp: {
      name: 'jumpUp',
      loop: false,
      totalFrames: 1,
      step: 15,
      duration: 15,
      width: 80,
      height: 100,
      sX: 720
    },
    jumpDown: {
      name: 'jumpDown',
      loop: false,
      totalFrames: 1,
      step: 15,
      duration: 15,
      width: 80,
      height: 100,
      sX: 800
    }
  };
  return animations;
}
