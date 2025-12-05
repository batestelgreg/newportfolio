  function showAboutTab(evt, tab) {
    const tabs = ['education', 'experience', 'skills'];
    tabs.forEach(t => {
      document.getElementById('about-' + t).style.display = (t === tab) ? 'block' : 'none';
    });
    document.querySelectorAll('.about-tab-btn').forEach(btn => btn.classList.remove('active'));
    evt.currentTarget.classList.add('active');
  }