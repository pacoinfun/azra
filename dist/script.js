onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      const loveText = document.querySelector('.love-text');
      loveText.style.opacity = 0;
      
      // Fade in the love text after flowers appear
      setTimeout(() => {
        let opacity = 0;
        const fadeIn = setInterval(() => {
          opacity += 0.05;
          loveText.style.opacity = opacity;
          if (opacity >= 1) clearInterval(fadeIn);
        }, 100);
      }, 1500);
      
      clearTimeout(c);
    }, 1000);
  };