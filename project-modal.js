// Project Modal and Flip Animation
function flipCard() {
  const flipper = document.getElementById('flipper');
  flipper.classList.toggle('flipped');
}

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('projectModal');
  const btn = document.getElementById('viewProjectBtn');
  const closeBtn = document.getElementById('closeModal');

  btn.onclick = function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
    document.getElementById('flipper').classList.remove('flipped');
  };

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});
