document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS === "undefined") {
    console.error("Particles.js not loaded!");
  } else {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 200, // Number of particles
          density: { enable: true, value_area: 800 },
        },
        color: {
          value: "#ffffff", // Particle color
          gradient: {
            type: "linear",
            x0: 0,
            y0: 0,
            x1: 1,
            y1: 1,
            stops: [
              { color: "rgba(19, 173, 199, 1)", offset: 0 },
              { color: "rgba(148, 93, 214, 1)", offset: 0.5 },
              { color: "rgba(105, 120, 209, 1)", offset: 1 },
            ],
          },
        },
        shape: {
          type: "circle", // Particle shape
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            opacity_min: 0.1,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 30,
            size_min: 1,
          },
        },
        line_linked: {
          enable: false, // No lines connecting the particles
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
        },
      },
      retina_detect: true,
    });
  }
});
