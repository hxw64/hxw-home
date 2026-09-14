(function () {
  'use strict';

  var dict = {
    zh: {
      tagline: 'Chase the Zenith Light.',
      contactBtn: '联系我',
      navAbout: '关于我',
      navSkills: '经历与技能',
      navProjects: '项目',
      navContact: '联系',
      nextPage: '下一页',
      aboutTitle: '关于我',
      aboutText1: '我是何欣蔚，天津大学智能医学工程专业本科生',
      aboutText2: '我喜欢探索新鲜事物，也喜欢音乐',
      aboutText3: '我偏爱小狗，偏爱那些毛茸茸、真诚而热烈的灵魂',
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
      themeLabel: '主题',
      themeSystem: '跟随系统',
      themeLight: '浅色模式',
      themeDark: '深色模式',
      footerNote: '本网站为本地静态页面，不收集任何信息'
    },
    en: {
      tagline: 'Chase the Zenith Light.',
      contactBtn: 'Contact Me',
      navAbout: 'About',
      navSkills: 'Skills',
      navProjects: 'Projects',
      navContact: 'Contact',
      nextPage: 'Next',
      aboutTitle: 'About Me',
      aboutText1: 'I am He Xinwei, an undergraduate in Intelligent Medical Engineering at Tianjin University',
      aboutText2: 'I like exploring new things and I love music',
      aboutText3: 'I have a special fondness for dogs, for those furry souls so sincere and full of warmth.',
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
      themeLabel: 'Theme',
      themeSystem: 'System',
      themeLight: 'Light',
      themeDark: 'Dark',
      footerNote: 'This is a local static page. No information is collected'
    }
  };

  var STORE_KEY = 'site_messages';
  var THEME_KEY = 'theme';
  var LIGHT_KEY = 'lang';
  var current = 'zh';
  var themeMode = 'system';
  var themeMenuOpen = false;
  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  function getSavedLang() {
    try { return localStorage.getItem(LIGHT_KEY); } catch (e) { return null; }
  }
  function saveLang(lang) {
    try { localStorage.setItem(LIGHT_KEY, lang); } catch (e) {}
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
  function getSavedTheme() {
    try {
      var v = localStorage.getItem(THEME_KEY);
      return (v === 'light' || v === 'dark' || v === 'system') ? v : 'system';
    } catch (e) { return 'system'; }
  }
  function saveTheme(mode) {
    try { localStorage.setItem(THEME_KEY, mode); } catch (e) {}
  }
  function systemDark() {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  function applyTheme(mode) {
    themeMode = mode;
    var dark = mode === 'dark' || (mode === 'system' && systemDark());
    var root = document.documentElement;
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    root.setAttribute('data-theme-mode', mode);
    var opts = document.querySelectorAll('.theme-menu li');
    for (var i = 0; i < opts.length; i++) {
      var on = opts[i].getAttribute('data-theme-mode') === mode;
      opts[i].classList.toggle('is-active', on);
      opts[i].setAttribute('aria-selected', on ? 'true' : 'false');
    }
  }
  function setThemeMenu(open) {
    var menu = document.getElementById('themeMenu');
    var btn = document.getElementById('themeToggle');
    if (!menu || !btn) { return; }
    themeMenuOpen = open;
    if (open) { menu.removeAttribute('hidden'); } else { menu.setAttribute('hidden', ''); }
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      var target = menu.querySelector('li.is-active') || menu.querySelector('li');
      if (target) { target.focus(); }
    }
  }
  function initTheme() {
    var btn = document.getElementById('themeToggle');
    var menu = document.getElementById('themeMenu');
    applyTheme(getSavedTheme());
    if (!btn || !menu) { return; }
    var opts = menu.querySelectorAll('li');
    btn.addEventListener('click', function (e) {
      if (e) { e.stopPropagation(); }
      setThemeMenu(!themeMenuOpen);
    });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setThemeMenu(true); }
      else if (e.key === 'Escape') { setThemeMenu(false); }
    });
    for (var i = 0; i < opts.length; i++) {
      opts[i].addEventListener('click', function () {
        var mode = this.getAttribute('data-theme-mode');
        saveTheme(mode);
        applyTheme(mode);
        setThemeMenu(false);
        btn.focus();
      });
      opts[i].addEventListener('keydown', function (e) {
        var list = Array.prototype.slice.call(opts);
        var idx = list.indexOf(this);
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          list[(idx + 1) % list.length].focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          list[(idx - 1 + list.length) % list.length].focus();
        } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          this.click();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          setThemeMenu(false);
          btn.focus();
        }
      });
    }
    document.addEventListener('click', function (e) {
      if (!themeMenuOpen) { return; }
      if (e.target.closest && e.target.closest('.theme')) { return; }
      setThemeMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && themeMenuOpen) { setThemeMenu(false); btn.focus(); }
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function () { if (themeMode === 'system') { applyTheme('system'); } };
      if (mq.addEventListener) { mq.addEventListener('change', onChange); }
      else if (mq.addListener) { mq.addListener(onChange); }
    }
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
    var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
    for (var m = 0; m < ariaNodes.length; m++) {
      var ak = ariaNodes[m].getAttribute('data-i18n-aria');
      if (dict[lang][ak]) { ariaNodes[m].setAttribute('aria-label', dict[lang][ak]); }
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

  function initPointerEffects() {
    var finePointer = !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    if (!finePointer || reduceMotion) { return; }

    /* 全页柔光跟随 */
    var glow = document.createElement('div');
    glow.className = 'hero-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(glow, document.body.firstChild);

    var glowX = 0;
    var glowY = 0;
    var glowRaf = null;
    var drawGlow = function () {
      glowRaf = null;
      glow.style.transform = 'translate(' + glowX + 'px,' + glowY + 'px) translate(-50%,-50%)';
    };

    document.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') { return; }
      glowX = e.clientX;
      glowY = e.clientY;
      glow.classList.add('is-on');
      if (glowRaf === null) { glowRaf = window.requestAnimationFrame(drawGlow); }
    });
    document.addEventListener('pointerleave', function () {
      glow.classList.remove('is-on');
    });
    window.addEventListener('blur', function () {
      glow.classList.remove('is-on');
    });

    /* 卡片轻倾斜（平滑跟随，回正自然） */
    var MAX_TILT = 3;
    var PERSPECTIVE = 1100;
    var EASE = 0.12;
    var cards = document.querySelectorAll('.card');

    var bindCard = function (card) {
      var targetX = 0;
      var targetY = 0;
      var currentX = 0;
      var currentY = 0;
      var rafId = null;
      var hovering = false;

      var draw = function () {
        currentX += (targetX - currentX) * EASE;
        currentY += (targetY - currentY) * EASE;
        var settled = Math.abs(targetX - currentX) < 0.01 && Math.abs(targetY - currentY) < 0.01;
        if (settled) {
          currentX = targetX;
          currentY = targetY;
        }
        if (!hovering && Math.abs(currentX) < 0.01 && Math.abs(currentY) < 0.01) {
          card.style.transform = '';
          card.classList.remove('is-tilting');
          rafId = null;
          return;
        }
        card.style.transform = 'perspective(' + PERSPECTIVE + 'px) rotateX(' + currentX.toFixed(3) + 'deg) rotateY(' + currentY.toFixed(3) + 'deg)';
        if (settled) { rafId = null; return; }
        rafId = window.requestAnimationFrame(draw);
      };

      var start = function () {
        if (rafId === null) { rafId = window.requestAnimationFrame(draw); }
      };

      card.classList.add('is-tiltable');

      card.addEventListener('pointerenter', function () {
        hovering = true;
        card.classList.add('is-tilting');
        start();
      });

      card.addEventListener('pointermove', function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        targetY = px * MAX_TILT * 2;
        targetX = -py * MAX_TILT * 2;
        hovering = true;
        start();
      });

      card.addEventListener('pointerleave', function () {
        hovering = false;
        targetX = 0;
        targetY = 0;
        start();
      });
    };

    for (var i = 0; i < cards.length; i++) { bindCard(cards[i]); }
  }
  function initPager() {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var nextWrap = document.querySelector('.page-next');
    var next1 = document.getElementById('nextPage');
    var next2 = document.getElementById('nextPage2');
    var pages = [];
    if (page1) { pages.push(page1); }
    if (page2) { pages.push(page2); }
    if (page3) { pages.push(page3); }
    if (pages.length < 2) { return; }

    var motionOK = !reduceMotion && document.documentElement.classList.contains('js-motion');

    if (!motionOK) {
      if (next1 && page2) { next1.addEventListener('click', function () { page2.scrollIntoView(); }); }
      if (next2 && page3) { next2.addEventListener('click', function () { page3.scrollIntoView(); }); }
      return;
    }

    var i2 = pages.indexOf(page2);
    var i3 = pages.indexOf(page3);
    var idx = 0;
    var memo = {};
    var animating = false;

    var setWrap = function (i) {
      if (!nextWrap) { return; }
      if (i === i2) { nextWrap.classList.add('is-active'); }
      else { nextWrap.classList.remove('is-active'); }
    };

    var swap = function (to) {
      if (animating || to < 0 || to === idx || !pages[to]) { return; }
      animating = true;
      memo[idx] = window.pageYOffset;
      var from = pages[idx];
      var target = pages[to];

      var finish = function () {
        if (from) { from.classList.remove('is-active', 'is-entered', 'is-leaving', 'is-armed'); }
        target.classList.add('is-active');
        setWrap(to);
        window.scrollTo(0, memo[to] || 0);
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            target.classList.add('is-entered');
            window.setTimeout(function () { animating = false; }, 760);
          });
        });
        idx = to;
      };

      if (from) {
        from.classList.add('is-armed');
        window.setTimeout(function () { from.classList.add('is-leaving'); }, 120);
        window.setTimeout(finish, 460);
      } else {
        finish();
      }
    };

    if (next1 && i2 > -1) { next1.addEventListener('click', function () { swap(i2); }); }
    if (next2 && i3 > -1) { next2.addEventListener('click', function () { swap(i3); }); }

    var navLinks = document.querySelectorAll('.nav a[href^="#"], .brand[href^="#"]');
    for (var n = 0; n < navLinks.length; n++) {
      navLinks[n].addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (!href || href.length < 2) { return; }
        if (href === '#top' || href === '#page1') {
          if (idx !== 0) { e.preventDefault(); swap(0); }
          return;
        }
        var el = document.querySelector(href);
        if (!el) { return; }
        for (var t = 0; t < pages.length; t++) {
          if (pages[t].contains(el)) {
            if (t !== idx) {
              e.preventDefault();
              memo[t] = 0;
              swap(t);
              window.setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 760);
            }
            return;
          }
        }
      });
    }

    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey || animating) { return; }
      var atTop = window.pageYOffset <= 4;
      var atBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 4);
      if (e.deltaY > 0) {
        if (idx === 0 && i2 > -1) { e.preventDefault(); swap(i2); }
        else if (idx === i2 && i3 > -1 && atBottom) { e.preventDefault(); swap(i3); }
      } else if (e.deltaY < 0) {
        if (idx > 0 && atTop) { e.preventDefault(); swap(idx - 1); }
      }
    }, { passive: false });

    window.addEventListener('keydown', function (e) {
      if (animating) { return; }
      var atTop = window.pageYOffset <= 4;
      var atBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 4);
      var nextKey = (e.key === 'ArrowDown' || e.key === 'PageDown');
      var prevKey = (e.key === 'ArrowUp' || e.key === 'PageUp');
      if (nextKey && idx === 0 && i2 > -1) { e.preventDefault(); swap(i2); }
      else if (nextKey && idx === i2 && i3 > -1 && atBottom) { e.preventDefault(); swap(i3); }
      else if (prevKey && idx > 0 && atTop) { e.preventDefault(); swap(idx - 1); }
    });
  }
  var initial = detectLang();
  initBoard();
  applyLang(initial);
  initTheme();
  initPointerEffects();
  initPager();

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