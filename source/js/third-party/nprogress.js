/* global CONFIG, NProgress */

NProgress.configure({
  showSpinner: CONFIG.nprogress.spinner
});
document.addEventListener('pjax:send', () => {
  NProgress.start();
});
document.addEventListener('pjax:success', () => {
  NProgress.done();
});
