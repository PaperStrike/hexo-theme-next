/* global NexT, CONFIG, Pjax */

window.pjax = new Pjax({
  selectors: [
    'head title',
    'script[type="application/json"]',
    '.main-inner',
    '.post-toc-wrap',
    '.languages',
    '.pjax'
  ],
  scrollTo: !CONFIG.bookmark.enable
});

document.addEventListener('pjax:success', () => {
  NexT.boot.refresh();
  // Define Motion Sequence & Bootstrap Motion.
  if (CONFIG.motion.enable) {
    NexT.motion.integrator
      .init()
      .add(NexT.motion.middleWares.subMenu)
      .add(NexT.motion.middleWares.postList)
      .bootstrap();
  }
  const hasTOC = document.querySelector('.post-toc');
  document.querySelector('.sidebar-inner').classList.toggle('sidebar-nav-active', hasTOC);
  document.querySelector(hasTOC ? '.sidebar-nav-toc' : '.sidebar-nav-overview').click();
  NexT.utils.updateSidebarPosition();
});
