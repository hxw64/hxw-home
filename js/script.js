(function () {
  'use strict';

  var dict = {
    zh: {
      tagline: 'Conquer zenith light.',
      contactBtn: '联系我',
      aboutTitle: '关于我',
      aboutText1: '我是何欣蔚，天津大学智能医学工程专业本科生。',
      aboutText2: '我喜欢探索新鲜事物，也喜欢音乐。',
      skillsTitle: '经历与技能',
      skillStudy: '目前是一名在读本科生，正在学习智能医学工程。',
      skillErhu: '特长：二胡。',
      projectsTitle: '项目',
      projectsText: '项目整理中，敬请期待。',
      contactTitle: '联系我',
      contactHint: '欢迎联系我',
      emailLabel: '邮箱：',      sendEmailBtn: '发邮件给我',
      footerNote: '本网站为本地静态页面，不收集任何信息。'
    },
    en: {
      tagline: 'Conquer zenith light.',
      contactBtn: 'Contact Me',
      aboutTitle: 'About Me',
      aboutText1: 'I am He Xinwei, an undergraduate student in Intelligent Medical Engineering at Tianjin University.',
      aboutText2: 'I like exploring new things and I love music.',
      skillsTitle: 'Experience & Skills',
      skillStudy: 'Current undergraduate student, learning Intelligent Medical Engineering.',
      skillErhu: 'Specialty: erhu (Chinese fiddle).',
      projectsTitle: 'Projects',
      projectsText: 'Projects are coming soon.',
      contactTitle: 'Contact Me',
      contactHint: 'Feel free to contact me.',
      emailLabel: 'Email: ',      sendEmailBtn: 'Send Me an Email',
      footerNote: 'This is a local static page. No information is collected.'
    }
  };

  function getSaved() {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  }
  function saveLang(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) { /* local only */ }
  }
  function detectLang() {
    var saved = getSaved();
    if (saved === 'zh' || saved === 'en') { return saved; }
    var nav = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
  }
  function applyLang(lang) {
    var set = dict[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '何欣蔚 | 个人主页' : 'He Xinwei | Homepage';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (set[key]) { nodes[i].textContent = set[key]; }
    }
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中文';
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : 'Switch to Chinese');
    }
  }

  var current = detectLang();
  applyLang(current);

  var toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      current = current === 'zh' ? 'en' : 'zh';
      saveLang(current);
      applyLang(current);
    });
  }
})();