// content.js
function replaceUTMParameters() {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      let href = link.getAttribute('href');
      if ((href) && href.includes('utm_')) {
        href = href.replace(/utm_[^&=]+=[^&]*/g, (match) => {
          const paramName = match.split('=')[0];
          return `${paramName}=your-mom`;
        });
        link.setAttribute('href', href);
      }
    }
  }
  
  // Initial run
  replaceUTMParameters();
  
  // Listen for DOM changes
  const observer = new MutationObserver(replaceUTMParameters);
  observer.observe(document, { subtree: true, childList: true });