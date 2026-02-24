document.querySelectorAll('.membership-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    if (target) {
      target.classList.toggle('show');
    }
  });
});
