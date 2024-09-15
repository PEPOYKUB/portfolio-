VANTA.GLOBE({
    el: "#head1",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1ef9,
    size: 3.00,
    backgroundColor: 0x0
  })

  let description = document.getElementById('description');
  let text = description.textContent;
  let index = 0;
  
  function typeWriter() {
      if (index >= text.length) {
          setTimeout(() => {
              description.textContent = "";
              index = 0;
              typeWriter();
          }, 2000); // ตั้งเป็น 2000 เมื่อพิมพ์เสร็จจะมีเดลเลย์ 2 วินาที
          return;
      }
      description.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // ปรับความเร็วให้เร็วขึ้นเป็น 50
  }
  
  typeWriter();
  
  