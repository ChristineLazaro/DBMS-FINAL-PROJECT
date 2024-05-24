
function uploadImages() {
    const fileInput = document.getElementById('fileInput');
    const imageSlider = document.getElementById('imageSlider');
    const files = fileInput.files;
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('slide');
        img.onclick = function() {
          this.classList.toggle('selected');
        };
        imageSlider.appendChild(img);
      };
  
      reader.readAsDataURL(file);
    }
  }
  
  function deleteImage() {
    const selectedImages = document.querySelectorAll('.selected');
    selectedImages.forEach(image => image.remove());
  }