VANTA.RINGS({
    el: "#body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x0
  })

  const elements = ['gmail', 'numbertelephone', 'github', 'facebook', 'instagram'];

function animateElements() {
  elements.forEach((elementId, index) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 500 * index); // เวลาที่ให้แต่ละอันโผล่ 500 milliseconds
  });
}

animateElements();

