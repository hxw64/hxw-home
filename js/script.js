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
      skillErhu: '特长：二胡、篆刻。',      projectsTitle: '项目',
      projectsText: '项目整理中，敬请期待。',
      contactTitle: '联系我',
      contactHint: '欢迎联系我',
      emailLabel: '邮箱：',
      sendEmailBtn: '发邮件给我',
      boardTitle: '留言板',      nickLabel: '昵称（可留空）',
      nickPlaceholder: '匿名',
      msgLabel: '留言',
      msgPlaceholder: '写点什么…',
      sendBtn: '发送',
      clearBtn: '清空留言',
      anonymousName: '匿名',
      emptyMsg: '还没有留言',
      anonLabel: '匿名',
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
      skillErhu: 'Specialties: erhu, seal carving.',      projectsTitle: 'Projects',
      projectsText: 'Projects are coming soon.',
      contactTitle: 'Contact Me',
      contactHint: 'Feel free to contact me.',
      emailLabel: 'Email: ',
      sendEmailBtn: 'Send Me an Email',
      boardTitle: 'Message Board',      nickLabel: 'Nickname (optional)',
      nickPlaceholder: 'Anonymous',
      msgLabel: 'Message',
      msgPlaceholder: 'Write something...',
      sendBtn: 'Send',
      clearBtn: 'Clear messages',
      anonymousName: 'Anonymous',
      emptyMsg: 'No messages yet',
      anonLabel: 'Anonymous',
      footerNote: 'This is a local static page. No information is collected.'
    }
  };

  var STORE_KEY = 'site_messages';
  var current = 'zh';

  function getSavedLang() {
    try { return localStorage.getItem('lang'); } catch (e) { return null; }
  }
  function saveLang(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  function detectLang() {
    var saved = getSavedLang();
    if (saved === 'zh' || saved === 'en') { return saved; }
    var nav = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
    return nav.indexOf('zh') === 0 ? 'zh' : 'en';
  }
  function t(key) {
    return dict[current][key] || key;
  }
  function loadMessages() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) { return JSON.parse(raw); }
    } catch (e) {}
    return [];
  }
  function saveMessages(list) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); } catch (e) {}
  }
  function renderBoard() {
    var ul = document.getElementById('msgList');
    if (!ul) { return; }
    var list = loadMessages();
    ul.textContent = '';
    if (list.length === 0) {
      var empty = document.createElement('li');
      empty.className = 'msg-empty';
      empty.textContent = t('emptyMsg');
      ul.appendChild(empty);
    } else {
      for (var i = 0; i < list.length; i++) {
        var m = list[i];
        var li = document.createElement('li');
        li.className = 'msg-item';
        var head = document.createElement('div');
        head.className = 'msg-head';
        var name = document.createElement('span');
        name.className = 'msg-name';
        name.textContent = (m.n && String(m.n).trim()) ? String(m.n).trim() : t('anonymousName');
        var time = document.createElement('time');
        time.className = 'msg-time';
        time.textContent = new Date(m.t).toLocaleString();
        head.appendChild(name);
        head.appendChild(time);
        var body = document.createElement('p');
        body.className = 'msg-body';
        body.textContent = String(m.m);
        li.appendChild(head);
        li.appendChild(body);
        ul.appendChild(li);
      }
    }
    var anonBox = document.getElementById('msgAnon');
    var nickInput = document.getElementById('msgNick');
    if (anonBox && nickInput) {
      anonBox.addEventListener('change', function () {
        nickInput.disabled = anonBox.checked;
      });
    }
    var clear = document.getElementById('msgClear');
    if (clear) { clear.style.display = list.length ? 'inline-block' : 'none'; }
  }
  function applyLang(lang) {
    current = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '何欣蔚 | 个人主页' : 'He Xinwei | Homepage';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[lang][key]) { nodes[i].textContent = dict[lang][key]; }
    }
    var ph = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < ph.length; j++) {
      var k = ph[j].getAttribute('data-i18n-placeholder');
      if (dict[lang][k]) { ph[j].setAttribute('placeholder', dict[lang][k]); }
    }
    var btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中文';
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : 'Switch to Chinese');
    }
    renderBoard();
  }
  function initBoard() {
    var form = document.getElementById('msgForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var anonBox = document.getElementById('msgAnon');
        var nick = (anonBox && anonBox.checked) ? '' : document.getElementById('msgNick').value.trim();
        var text = document.getElementById('msgText').value.trim();
        if (!text) { return; }
        var list = loadMessages();
        list.push({ n: nick, m: text, t: Date.now() });
        saveMessages(list);
        renderBoard();
        form.reset();
      });
    }
    var anonBox = document.getElementById('msgAnon');
    var nickInput = document.getElementById('msgNick');
    if (anonBox && nickInput) {
      anonBox.addEventListener('change', function () {
        nickInput.disabled = anonBox.checked;
      });
    }
    var clear = document.getElementById('msgClear');
    if (clear) {
      clear.addEventListener('click', function () {
        var ok = window.confirm(current === 'zh' ? '确定清空所有留言吗？' : 'Clear all messages?');
        if (ok) { saveMessages([]); renderBoard(); }
      });
    }
  }

  var initial = detectLang();
  initBoard();
  applyLang(initial);

  var toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = current === 'zh' ? 'en' : 'zh';
      saveLang(next);
      applyLang(next);
    });
  }
})();