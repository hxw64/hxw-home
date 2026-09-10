(function () {
  'use strict';

  var dict = {
    zh: {
      tagline: 'Conquer zenith light.',
      contactBtn: '联系我',
      navAbout: '关于我',
      navSkills: '经历与技能',
      navProjects: '项目',
      navContact: '联系',
      aboutTitle: '关于我',
      aboutText1: '我是何欣蔚，天津大学智能医学工程专业本科生',
      aboutText2: '我喜欢探索新鲜事物，也喜欢音乐',
      skillsTitle: '经历与技能',
      eduLabel: '教育背景',
      eduText: '天津大学 · 智能医学工程 · 本科在读',
      interestLabel: '兴趣与特长',
      tagErhu: '二胡',
      tagSeal: '篆刻',
      projectsTitle: '项目',
      projectsText: '项目案例正在整理中，将陆续分享课程项目与设计探索',
      contactTitle: '联系我',
      contactHint: '欢迎联系我',
      emailLabel: '邮箱：',
      sendEmailBtn: '发送邮件',
      boardTitle: '留言板',
      nickLabel: '昵称',
      msgLabel: '留言',
      msgPlaceholder: '写点什么…',
      anonLabel: '匿名',
      sendBtn: '发送',
      clearBtn: '清空留言',
      anonymousName: '匿名',
      emptyMsg: '还没有留言',
      msgSending: '发送中...',
      msgSent: '已发送，谢谢你的留言',
      msgError: '发送失败，请重试',
      msgEmpty: '请先填写留言',
      footerNote: '本网站为本地静态页面，不收集任何信息'
    },
    en: {
      tagline: 'Conquer zenith light.',
      contactBtn: 'Contact Me',
      navAbout: 'About',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navContact: 'Contact',
      aboutTitle: 'About Me',
      aboutText1: 'I am He Xinwei, an undergraduate in Intelligent Medical Engineering at Tianjin University',
      aboutText2: 'I like exploring new things and I love music',
      skillsTitle: 'Experience & Skills',
      eduLabel: 'Education',
      eduText: 'Tianjin University · Intelligent Medical Engineering · Undergraduate',
      interestLabel: 'Interests & Skills',
      tagErhu: 'Erhu',
      tagSeal: 'Seal carving',
      projectsTitle: 'Projects',
      projectsText: 'Project cases are being organized. Course projects and design explorations will be shared soon',
      contactTitle: 'Contact Me',
      contactHint: 'Feel free to contact me',
      emailLabel: 'Email: ',
      sendEmailBtn: 'Send Email',
      boardTitle: 'Message Board',
      nickLabel: 'Nickname',
      msgLabel: 'Message',
      msgPlaceholder: 'Write something...',
      anonLabel: 'Anonymous',
      sendBtn: 'Send',
      clearBtn: 'Clear messages',
      anonymousName: 'Anonymous',
      emptyMsg: 'No messages yet',
      msgSending: 'Sending...',
      msgSent: 'Sent. Thank you for your message',
      msgError: 'Failed to send. Please try again',
      msgEmpty: 'Please write a message first',
      footerNote: 'This is a local static page. No information is collected'
    }
  };

  var STORE_KEY = 'site_messages';
  var current = 'zh';
  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

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
    try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); return true; } catch (e) { return false; }
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
    var clear = document.getElementById('msgClear');
    if (clear) { clear.style.display = list.length ? 'inline-block' : 'none'; }
  }
  function showToast(message, type) {
    var wrap = document.querySelector('.toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'toast-wrap';
      document.body.appendChild(wrap);
    }
    var toast = document.createElement('div');
    var isError = type === 'error';
    toast.className = 'toast ' + (isError ? 'toast-error' : 'toast-success');
    toast.setAttribute('role', 'status');
    if (isError) {
      var icon = document.createElement('span');
      icon.className = 'toast-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '!';
      toast.appendChild(icon);
    }
    var textNode = document.createElement('span');
    textNode.className = 'toast-text';
    textNode.textContent = message;
    toast.appendChild(textNode);
    wrap.appendChild(toast);
    window.requestAnimationFrame(function () { toast.classList.add('show'); });
    window.setTimeout(function () {
      toast.classList.remove('show');
      window.setTimeout(function () { toast.remove(); }, 240);
    }, 2200);
  }
  function addRipple(btn, x, y) {
    if (reduceMotion) { return; }
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height) * 1.2;
    var ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = (x - rect.left - size / 2) + 'px';
    ripple.style.top = (y - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    window.setTimeout(function () { ripple.remove(); }, 280);
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
    var anonBox = document.getElementById('msgAnon');
    var nickInput = document.getElementById('msgNick');
    if (anonBox && nickInput) {
      anonBox.addEventListener('change', function () {
        nickInput.disabled = anonBox.checked;
      });
    }
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var submitBtn = form.querySelector('button[type="submit"]');
        var nick = (anonBox && anonBox.checked) ? '' : (nickInput ? nickInput.value.trim() : '');
        var textArea = document.getElementById('msgText');
        var text = textArea ? textArea.value.trim() : '';
        if (!text) { showToast(t('msgEmpty'), 'error'); return; }
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = t('msgSending');
        }
        window.setTimeout(function () {
          var list = loadMessages();
          list.push({ n: nick, m: text, t: Date.now() });
          if (saveMessages(list)) {
            renderBoard();
            form.reset();
            if (anonBox && nickInput) { nickInput.disabled = anonBox.checked; }
            showToast(t('msgSent'), 'success');
          } else {
            showToast(t('msgError'), 'error');
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = t('sendBtn');
          }
        }, 240);
      });
    }
    var clear = document.getElementById('msgClear');
    if (clear) {
      clear.addEventListener('click', function () {
        var ok = window.confirm(current === 'zh' ? '确定清空所有留言吗' : 'Clear all messages?');
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

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.btn') : null;
    if (!btn || btn.disabled) { return; }
    var rect = btn.getBoundingClientRect();
    var isKeyboard = !e.clientX && !e.clientY;
    var x = isKeyboard ? rect.left + rect.width / 2 : e.clientX;
    var y = isKeyboard ? rect.top + rect.height / 2 : e.clientY;
    addRipple(btn, x, y);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== ' ' && e.key !== 'Spacebar') { return; }
    var btn = e.target.closest ? e.target.closest('.btn') : null;
    if (!btn || btn.tagName !== 'A') { return; }
    e.preventDefault();
    btn.click();
  });
})();