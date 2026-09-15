// Interactions for the One-Off Pricing Cards (Both Light and Dark)
document.addEventListener('DOMContentLoaded', () => {
  const actionButtons = document.querySelectorAll('.card-bottom');

  actionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.card-wrapper');
      const isDark = card && card.classList.contains('card-dark');
      console.log(`Selected: Choose Design Only (${isDark ? 'Dark Card' : 'Light Card'})`);
    });
  });
});
