/* global CONFIG */

(function() {
  const relList = document.createElement('link').relList;
  const preloadSupported = !!(relList && relList.supports && relList.supports('preload'));

  Object.values(CONFIG.asyncStyles).forEach(vendor => {
    if (!vendor) return;
    const link = document.createElement('link');

    if (preloadSupported) {
      link.rel = 'preload';
      link.as = 'style';
      link.addEventListener('load', () => {
        link.rel = 'stylesheet';
        link.removeAttribute('as');
      }, { once: true });
    } else {
      link.rel = 'stylesheet';
    }

    link.href = vendor.url;
    if (vendor.integrity) {
      link.integrity = vendor.integrity;
      link.crossOrigin = 'anonymous';
    }

    document.head.appendChild(link);
  });
})();
