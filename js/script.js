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
      navTwin: '数字分身',
      agentTitle: '数字分身',
      agentIntro: '你可以问我关于我的问题，我在本地回答，不会联网',
      agentHello: '你好，我是何欣蔚的数字分身，问我点什么吧',
      agentFallback: '这个问题我还不太会，可以问我：你是谁 / 学校专业 / 特长 / 爱好 / 项目 / 联系方式',
      chatPlaceholder: '问我点什么…',
      chatSend: '发送',
      qWho: '你是谁',
      qStudy: '学校和专业',
      qSkill: '你的特长',
      qHobby: '你的爱好',
      qContact: '怎么联系你',
      feedbackLink: '留言反馈',
      feedbackTitle: '反馈',
      feedbackIntro: '你的意见会帮我改进这个主页',
      feedbackRating: '评分（可选）',
      feedbackText: '反馈内容',
      feedbackTextPlaceholder: '说说你的想法…',
      feedbackContact: '联系方式（可选）',
      feedbackSubmit: '提交',
      feedbackCancel: '取消',
      feedbackClose: '关闭',
      feedbackSoon: '反馈通道正在接入，敬请期待',
      feedbackEmpty: '请先填写内容',
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
      navTwin: 'Digital Twin',
      agentTitle: 'Digital Twin',
      agentIntro: 'Ask me about Xinwei. I answer locally and I am not connected to the internet',
      agentHello: 'Hi, I am the digital twin of He Xinwei. Ask me anything',
      agentFallback: 'I am not sure about that yet. You can ask: who are you / school / skills / hobbies / projects / contact',
      chatPlaceholder: 'Ask me something...',
      chatSend: 'Send',
      qWho: 'Who are you',
      qStudy: 'School and major',
      qSkill: 'Your skills',
      qHobby: 'Your hobbies',
      qContact: 'How to contact you',
      feedbackLink: 'Feedback',
      feedbackTitle: 'Feedback',
      feedbackIntro: 'Your feedback helps me improve this page',
      feedbackRating: 'Rating (optional)',
      feedbackText: 'Your feedback',
      feedbackTextPlaceholder: 'Tell me what you think...',
      feedbackContact: 'Contact (optional)',
      feedbackSubmit: 'Submit',
      feedbackCancel: 'Cancel',
      feedbackClose: 'Close',
      feedbackSoon: 'The feedback channel is coming soon',
      feedbackEmpty: 'Please fill in your feedback first',
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
    if (agentGreeting) { agentGreeting.textContent = dict[lang].agentHello; }
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
    var cards = document.querySelectorAll('.card:not(.agent)');

    var bindCard = function (card) {
      var targetX = 0;
      var targetY = 0;
      var currentX = 0;
      var currentY = 0;
      var rafId = null;
      var hovering = false;

      var draw = function () {
      dot.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      rx += (x - rx) * 0.42;
      ry += (y - ry) * 0.42;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) scale(' + (pressed ? 0.9 : 1) + ')';
      if (Math.abs(x - rx) < 0.2 && Math.abs(y - ry) < 0.2) {
        rx = x;
        ry = y;
        running = false;
        return;
      }
      window.requestAnimationFrame(draw);
    };
    var start = function () {
      if (!running) {
        running = true;
        window.requestAnimationFrame(draw);
      }
    };;

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
    var ids = ['page1', 'page2', 'page3', 'page4'];
    var pages = [];
    for (var p = 0; p < ids.length; p++) {
      var el = document.getElementById(ids[p]);
      if (el) { pages.push(el); }
    }
    if (pages.length < 2) { return null; }

    var arrows = document.querySelectorAll('.page-next');
    var motionOK = !reduceMotion && document.documentElement.classList.contains('js-motion');

    document.documentElement.setAttribute('data-page', pages[0].id);

    var indexOfId = function (id) {
      for (var i = 0; i < pages.length; i++) {
        if (pages[i].id === id) { return i; }
      }
      return -1;
    };

    if (!motionOK) {
      for (var a = 0; a < arrows.length; a++) {
        (function (arrow) {
          arrow.addEventListener('click', function () {
            var t = indexOfId(arrow.getAttribute('data-target'));
            if (t > -1) { pages[t].scrollIntoView(); }
          });
        })(arrows[a]);
      }
      var heroArrow = document.getElementById('nextPage');
      if (heroArrow) {
        heroArrow.addEventListener('click', function () {
          var to2 = indexOfId('page2');
          if (to2 > -1) { pages[to2].scrollIntoView(); }
        });
      }
      return null;
    }

    var idx = 0;
    var memo = {};
    var animating = false;

    var setArrow = function (i) {
      var nextId = pages[i + 1] ? pages[i + 1].id : '';
      for (var a2 = 0; a2 < arrows.length; a2++) {
        var on = nextId !== '' && arrows[a2].getAttribute('data-target') === nextId;
        arrows[a2].classList.toggle('is-active', on);
      }
    };

    var swap = function (to) {
      if (animating || to < 0 || to >= pages.length || to === idx) { return; }
      animating = true;
      memo[idx] = window.pageYOffset;
      var from = pages[idx];
      var target = pages[to];

      var finish = function () {
        if (from) { from.classList.remove('is-active', 'is-entered', 'is-leaving', 'is-armed'); }
        target.classList.add('is-active');
        setArrow(to);
        document.documentElement.setAttribute('data-page', target.id);
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

    for (var a3 = 0; a3 < arrows.length; a3++) {
      (function (arrow) {
        arrow.addEventListener('click', function () {
          swap(indexOfId(arrow.getAttribute('data-target')));
        });
      })(arrows[a3]);
    }

    var heroArrow2 = document.getElementById('nextPage');
    if (heroArrow2) {
      heroArrow2.addEventListener('click', function () { swap(indexOfId('page2')); });
    }

    setArrow(0);

    var navLinks = document.querySelectorAll('.nav a[href^="#"], .brand[href^="#"]');
    for (var n = 0; n < navLinks.length; n++) {
      navLinks[n].addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (!href || href.length < 2) { return; }
        if (href === '#top' || href === '#page1') {
          if (idx !== 0) { e.preventDefault(); swap(0); }
          return;
        }
        var target = document.querySelector(href);
        if (!target) { return; }
        for (var t = 0; t < pages.length; t++) {
          if (pages[t].contains(target)) {
            if (t !== idx) {
              e.preventDefault();
              memo[t] = 0;
              swap(t);
              window.setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 760);
            }
            return;
          }
        }
      });
    }

    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey || animating || document.documentElement.classList.contains('feedback-open')) { return; }
      var node = e.target;
      if (node && node.closest && node.closest('.chat-log')) { return; }
      var atTop = window.pageYOffset <= 4;
      var atBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 4);
      if (e.deltaY > 0 && atBottom) { e.preventDefault(); swap(idx + 1); }
      else if (e.deltaY < 0 && atTop) { e.preventDefault(); swap(idx - 1); }
    }, { passive: false });

    window.addEventListener('keydown', function (e) {
      if (animating || document.documentElement.classList.contains('feedback-open')) { return; }
      var atTop = window.pageYOffset <= 4;
      var atBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 4);
      var nextKey = (e.key === 'ArrowDown' || e.key === 'PageDown');
      var prevKey = (e.key === 'ArrowUp' || e.key === 'PageUp');
      if (nextKey && atBottom) { e.preventDefault(); swap(idx + 1); }
      else if (prevKey && atTop) { e.preventDefault(); swap(idx - 1); }
    });

    return { swap: swap, index: function () { return idx; }, pages: pages };
  }

  var agentQA = {
    zh: [
      { keys: ['你是谁', '介绍一下', '自我介绍', '名字', '谁'], a: '我是何欣蔚，天津大学智能医学工程专业本科生' },
      { keys: ['学校', '专业', '天津大学', '学什么', '就读'], a: '我在天津大学读智能医学工程' },
      { keys: ['特长', '技能', '会什么', '二胡', '篆刻'], a: '我的特长是二胡和篆刻' },
      { keys: ['爱好', '兴趣', '喜欢什么', '音乐', '小狗', '狗'], a: '我喜欢探索新鲜事物，也喜欢音乐，还特别偏爱小狗' },
      { keys: ['项目', '作品', '做过什么'], a: '项目案例正在整理中，会陆续分享课程项目与设计探索' },
      { keys: ['联系', '邮箱', '邮件', '怎么找'], a: '可以发邮件到 xinwei_he@tju.edu.cn' },
      { keys: ['留言', '留言板'], a: '第三屏是留言板，欢迎留言' },
      { keys: ['你好', '您好', '嗨', '在吗'], a: '你好，我是何欣蔚的数字分身，问点你感兴趣的' }
    ],
    en: [
      { keys: ['who are you', 'your name', 'introduce', 'who'], a: 'I am He Xinwei, an undergraduate in Intelligent Medical Engineering at Tianjin University' },
      { keys: ['school', 'major', 'university', 'study'], a: 'I study Intelligent Medical Engineering at Tianjin University' },
      { keys: ['skill', 'specialty', 'erhu', 'seal'], a: 'My specialties are the erhu and seal carving' },
      { keys: ['hobby', 'interest', 'music', 'dog'], a: 'I like exploring new things and music, and I am especially fond of dogs' },
      { keys: ['project', 'work', 'portfolio'], a: 'Project cases are being organized and will be shared soon' },
      { keys: ['contact', 'email', 'reach'], a: 'You can email me at xinwei_he@tju.edu.cn' },
      { keys: ['message', 'board', 'comment'], a: 'The third screen has a message board' },
      { keys: ['hello', 'hey', 'hi there'], a: 'Hi, I am the digital twin of He Xinwei. Ask me what you like' }
    ]
  };

  function getAnswer(text) {
    var q = String(text || '').toLowerCase();
    var list = agentQA[current] || agentQA.zh;
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      for (var k = 0; k < item.keys.length; k++) {
        if (q.indexOf(item.keys[k].toLowerCase()) > -1) { return item.a; }
      }
    }
    return t('agentFallback');
  }

  var agentGreeting = null;

  function initAgent(pager) {
    var log = document.getElementById('chatLog');
    var form = document.getElementById('chatForm');
    var input = document.getElementById('chatInput');
    var quick = document.getElementById('chatQuick');
    var ball = document.getElementById('agentBall');
    if (!log) { return; }

    var index4 = -1;
    if (pager && pager.pages) {
      for (var i = 0; i < pager.pages.length; i++) {
        if (pager.pages[i].id === 'page4') { index4 = i; }
      }
    }

    if (ball && pager && index4 > -1) {
      ball.addEventListener('click', function () { pager.swap(index4); });
    }

    var addBubble = function (text, who) {
      var li = document.createElement('li');
      li.className = 'chat-item ' + (who === 'me' ? 'chat-me' : 'chat-bot');
      var bubble = document.createElement('div');
      bubble.className = 'chat-bubble';
      bubble.textContent = text;
      li.appendChild(bubble);
      log.appendChild(li);
      log.scrollTop = log.scrollHeight;
      return bubble;
    };

    var typeOut = function (bubble, text) {
      if (reduceMotion) { bubble.textContent = text; return; }
      var i = 0;
      bubble.textContent = '';
      var timer = window.setInterval(function () {
        i += 1;
        bubble.textContent = text.slice(0, i);
        log.scrollTop = log.scrollHeight;
        if (i >= text.length) { window.clearInterval(timer); }
      }, 28);
    };

    var respond = function (text) {
      var bubble = addBubble('···', 'bot');
      bubble.classList.add('chat-typing');
      window.setTimeout(function () {
        bubble.classList.remove('chat-typing');
        typeOut(bubble, getAnswer(text));
      }, reduceMotion ? 0 : 500);
    };

    var send = function (text) {
      var value = String(text || '').trim();
      if (!value) { return; }
      addBubble(value, 'me');
      respond(value);
      if (input) { input.value = ''; }
    };

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        send(input ? input.value : '');
      });
    }

    if (quick) {
      quick.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('.chip') : null;
        if (!btn) { return; }
        var key = btn.getAttribute('data-i18n');
        if (key) { send(t(key)); }
      });
    }

    agentGreeting = addBubble(t('agentHello'), 'bot');
  }
  function submitFeedback(data) {
    /* V3：这里改成提交到后台（Supabase / 腾讯云） */
    showToast(t('feedbackSoon'), 'success');
    return true;
  }

  function initFeedback() {
    var modal = document.getElementById('feedbackModal');
    var openBtn = document.getElementById('feedbackOpen');
    var closeBtn = document.getElementById('feedbackClose');
    var cancelBtn = document.getElementById('feedbackCancel');
    var form = document.getElementById('feedbackForm');
    var textArea = document.getElementById('feedbackText');
    var contact = document.getElementById('feedbackContact');
    var ratingRow = document.getElementById('ratingRow');
    if (!modal || !openBtn) { return; }

    var lastFocus = null;
    var score = 0;

    var openModal = function () {
      lastFocus = document.activeElement;
      modal.removeAttribute('hidden');
      document.documentElement.classList.add('feedback-open');
      if (textArea) { textArea.focus(); }
    };
    var closeModal = function () {
      modal.setAttribute('hidden', '');
      document.documentElement.classList.remove('feedback-open');
      if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
    };

    openBtn.addEventListener('click', openModal);
    if (closeBtn) { closeBtn.addEventListener('click', closeModal); }
    if (cancelBtn) { cancelBtn.addEventListener('click', closeModal); }
    modal.addEventListener('click', function (e) {
      if (e.target && e.target.getAttribute && e.target.getAttribute('data-close')) { closeModal(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) { closeModal(); }
    });

    if (ratingRow) {
      ratingRow.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('.rating-dot') : null;
        if (!btn) { return; }
        var value = parseInt(btn.getAttribute('data-score'), 10) || 0;
        score = (score === value) ? 0 : value;
        var dots = ratingRow.querySelectorAll('.rating-dot');
        for (var i = 0; i < dots.length; i++) {
          dots[i].classList.toggle('is-on', i < score);
        }
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var text = textArea ? textArea.value.trim() : '';
        if (!text) { showToast(t('feedbackEmpty'), 'error'); return; }
        submitFeedback({
          score: score,
          text: text,
          contact: contact ? contact.value.trim() : ''
        });
        form.reset();
        score = 0;
        if (ratingRow) {
          var dots2 = ratingRow.querySelectorAll('.rating-dot');
          for (var k = 0; k < dots2.length; k++) { dots2[k].classList.remove('is-on'); }
        }
        closeModal();
      });
    }
  }
  function initCursor() {
    var finePointer = !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    if (!finePointer || reduceMotion) { return; }

    var dot = document.createElement('div');
    dot.className = 'cursor-dot';
    var ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var rx = x;
    var ry = y;
    var pressed = false;
    var started = false;
    var running = false;

    var draw = function () {
      dot.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      rx += (x - rx) * 0.42;
      ry += (y - ry) * 0.42;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) scale(' + (pressed ? 0.9 : 1) + ')';
      if (Math.abs(x - rx) < 0.2 && Math.abs(y - ry) < 0.2) {
        rx = x;
        ry = y;
        running = false;
        return;
      }
      window.requestAnimationFrame(draw);
    };
    var start = function () {
      if (!running) {
        running = true;
        window.requestAnimationFrame(draw);
      }
    };

    window.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') { return; }
      x = e.clientX;
      y = e.clientY;
      start();
      if (!started) {
        started = true;
        rx = x;
        ry = y;
        document.documentElement.classList.add('custom-cursor');
        document.documentElement.classList.add('cursor-on');
      }
    });
    window.addEventListener('pointerleave', function () {
      document.documentElement.classList.remove('cursor-on');
    });
    window.addEventListener('blur', function () {
      document.documentElement.classList.remove('cursor-on');
    });
    window.addEventListener('pointerdown', function () { pressed = true; start(); });
    window.addEventListener('pointerup', function () { pressed = false; start(); });

    document.addEventListener('pointerover', function (e) {
      var node = e.target;
      var hit = node && node.closest ? node.closest('a, button, .chip, input, textarea, [role="option"]') : null;
      ring.classList.toggle('is-hover', !!hit);
    });
  }
  var initial = detectLang();
  initBoard();
  applyLang(initial);
  initTheme();
  initPointerEffects();
  var pager = initPager();
  initAgent(pager);
  initFeedback();
  initCursor();

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