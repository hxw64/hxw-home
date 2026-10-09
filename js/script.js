(function () {
  'use strict';

  var dict = {
    zh: {
      tagline: 'Chase the Zenith Light.',
      contactBtn: '联系我',
      navAbout: '关于我',
      navSkills: '经历与技能',
      navProjects: '学习与探索',
      navBoard: '留言板',
      navContact: '联系我',
      nextPage: '下一页',
      navTwin: '数字分身',
      agentTitle: '数字分身',
      agentIntro: '你可以问我关于我的问题',
      agentHello: '你好，我是何欣蔚的数字分身，问我点什么吧',
      agentFallback: '这个问题我还不太会，可以问我：你是谁 / 学校专业 / 特长 / 爱好 / 学习与探索 / 联系方式',
      agentOffline: '我暂时答不上来，可以邮件联系我',
      agentLimit: '问得有点快，稍等一下再问我',
      chatPlaceholder: '问我点什么…',
      chatSend: '发送',
      agentDisclaimer: '回答由 AI 生成，仅供参考',
      qWho: '你是谁',
      qStudy: '学校和专业',
      qSkill: '你的特长',
      qHobby: '你的爱好',
      qContact: '怎么联系你',
      feedbackLink: '留言反馈',
      feedbackTitle: '反馈',
      feedbackIntro: '你的意见会帮我改进这个主页',
      feedbackRating: '评分（可选）',
      feedbackDevice: '使用设备',
      deviceDesktop: '电脑',
      deviceTablet: '平板',
      deviceMobile: '手机',
      deviceOther: '其他',
      feedbackText: '反馈内容',
      feedbackTextPlaceholder: '说说你的想法…',
      feedbackContact: '联系方式（可选）',
      feedbackSubmit: '提交',
      feedbackCancel: '取消',
      feedbackClose: '关闭',
      feedbackSoon: '反馈通道正在接入，敬请期待',
      feedbackEmpty: '请先填写内容',
      feedbackSending: '提交中…',
      feedbackSent: '已收到，谢谢你的反馈',
      feedbackError: '提交失败，请稍后再试',
      boardError: '留言加载失败',
      retry: '重试',
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
      projectsTitle: '学习与探索',
      projectsText: '学习记录正在整理中，将陆续分享课程实践与探索心得',
      projectManage: '管理项目',
      projectEditorTitle: '编辑项目',
      projectNew: '新增项目',
      projectList: '项目列表',
      projectSelect: '选择左侧项目开始编辑',
      projectPublishedLabel: '发布到主页',
      projectSortLabel: '排序',
      projectContentZh: '中文内容',
      projectContentEn: 'English content',
      projectTitle: '标题',
      projectKicker: '副标题',
      projectSummary: '简介',
      projectTags: '标签',
      projectContributions: '贡献亮点',
      projectAddContribution: '添加',
      projectReflection: '感悟',
      projectImages: '项目图片',
      projectImagesHint: '最多 6 张，JPEG / PNG / WebP，单张不超过 8 MB',
      projectAddImages: '选择图片',
      projectDelete: '删除项目',
      projectSave: '保存项目',
      projectViewDetail: '查看详情',
      projectStaticKicker: '基于 Vibe Coding 构建',
      projectStaticTitle: '何欣蔚个人主页',
      projectStaticSummary: '一次通过 Vibe Coding（AI 辅助编程）独立完成的现代 Web 实践，从产品构思到工程落地均由我主导。',
      projectIndependent: '独立开发',
      projectTagsLabel: '项目标签',
      projectHighlightsLabel: '贡献亮点',
      projectDesign: '产品设计',
      projectPrompt: 'Prompt 架构',
      projectEngineering: '工程把控',
      projectDetailContrib: '我做了什么',
      projectDetailInsight: '感悟',
      projectGallery: '项目图片',
      projectCover: '封面',
      projectNoImage: '暂无图片',
      projectEmpty: '学习与探索内容正在整理中',
      projectLoadError: '项目加载失败',
      projectRetry: '重试',
      projectEditorError: '项目管理加载失败',
      projectSaved: '项目已保存',
      projectSaveError: '保存失败，请重试',
      projectDeleted: '项目已删除',
      projectDeleteConfirm: '确定删除这个项目吗？图片也会一并删除。',
      projectDeleteImageConfirm: '确定删除这张图片吗？',
      projectTitleRequired: '请填写中文标题',
      projectNeedSave: '请先保存项目再添加图片',
      projectImageLimit: '每个项目最多 6 张图片',
      projectFileType: '仅支持 JPEG、PNG 或 WebP',
      projectFileTooLarge: '单张图片不能超过 8 MB',
      projectUploading: '图片上传中…',
      projectUploaded: '图片已上传',
      projectUploadError: '图片上传失败',
      projectImageDeleted: '图片已删除',
      projectImageSaved: '图片信息已保存',
      projectCoverSet: '已设为封面',
      projectMoveUp: '上移',
      projectMoveDown: '下移',
      projectDeleteImage: '删除',
      projectSetCover: '设为封面',
      projectDraft: '草稿',
      projectPublished: '已发布',
      projectUntitled: '未命名项目',
      projectNoProjects: '还没有项目',
      projectAltZh: '中文替代文字',
      projectAltEn: '英文替代文字',
      hobbyManage: '管理爱好',
      hobbyEditorTitle: '编辑爱好',
      hobbyNew: '新增爱好',
      hobbyListLabel: '爱好列表',
      hobbySelect: '选择左侧爱好开始编辑',
      hobbyPublishedLabel: '发布到主页',
      hobbySortLabel: '排序',
      hobbyTitle: '标题',
      hobbyContent: '正文',
      hobbyRichToolbar: '富文本格式',
      hobbyRichParagraph: '正文',
      hobbyRichBold: '加粗',
      hobbyRichItalic: '斜体',
      hobbyRichBullet: '无序列表',
      hobbyRichNumber: '有序列表',
      hobbyRichLink: '链接',
      hobbyLinkPrompt: '请输入链接地址（https:// 或 mailto:）',
      hobbyMedia: '照片与视频',
      hobbyMediaHint: '最多 20 张图片、3 个视频；图片 8 MB，视频 50 MB',
      hobbyAddImages: '添加图片',
      hobbyAddVideos: '添加视频',
      hobbyDelete: '删除爱好',
      hobbySave: '保存爱好',
      hobbyDetailMedia: '照片与视频',
      hobbyDetailText: '关于这个爱好',
      hobbyNoMedia: '还没有照片或视频',
      hobbyContentEmpty: '文字内容正在整理中',
      hobbyEmpty: '爱好内容正在整理中',
      hobbyLoadError: '爱好加载失败',
      hobbyRetry: '重试',
      hobbyEditorError: '爱好管理加载失败',
      hobbySaved: '爱好已保存',
      hobbySaveError: '保存失败，请重试',
      hobbyDeleted: '爱好已删除',
      hobbyDeleteConfirm: '确定删除这个爱好吗？其中的照片和视频也会一并删除。',
      hobbyDeleteMediaConfirm: '确定删除这个媒体文件吗？',
      hobbyTitleRequired: '请填写中文标题',
      hobbyNeedSave: '请先保存爱好再上传媒体',
      hobbyImageLimit: '每个爱好最多 20 张图片',
      hobbyVideoLimit: '每个爱好最多 3 个视频',
      hobbyImageType: '图片仅支持 JPEG、PNG 或 WebP',
      hobbyVideoType: '视频仅支持 MP4 或 WebM',
      hobbyImageTooLarge: '单张图片不能超过 8 MB',
      hobbyVideoTooLarge: '单个视频不能超过 50 MB',
      hobbyUploading: '媒体上传中…',
      hobbyUploaded: '媒体已上传',
      hobbyUploadError: '媒体上传失败',
      hobbyMediaDeleted: '媒体已删除',
      hobbyMediaSaved: '媒体顺序已保存',
      hobbyDraft: '草稿',
      hobbyPublished: '已发布',
      hobbyUntitled: '未命名爱好',
      hobbyNoHobbies: '还没有爱好',
      hobbyImageTypeLabel: '图片',
      hobbyVideoTypeLabel: '视频',
      contactTitle: '联系我',
      contactHint: '欢迎联系我',
      emailLabel: '邮箱：',
      sendEmailBtn: '发送邮件',
      boardTitle: '留言板',
      nickLabel: '昵称',
      msgLabel: '留言',
      msgPlaceholder: '写点什么…',
      anonLabel: '匿名',
      msgColorLabel: '气泡颜色',
      colorCoral: '珊瑚红',
      colorAmber: '暖橙',
      colorSky: '天蓝',
      colorMint: '薄荷绿',
      colorLilac: '淡紫',
      relLabel: '与我的关系',
      relClassmate: '同学',
      relFriend: '朋友',
      relFamily: '家人',
      relTeacher: '老师',
      relOther: '其他',
      adminOpen: '管理',
      adminTitle: '管理员登录',
      adminIntro: '登录后可以管理留言、项目和爱好内容',
      adminEmail: '邮箱',
      adminPass: '密码',
      adminLogin: '登录',
      adminClear: '清空留言板',
      adminSignOut: '退出管理',
      adminHide: '隐藏',
      adminAuthFail: '登录失败，请检查邮箱和密码',
      adminSignedIn: '已进入管理模式',
      adminClearConfirm: '确定清空所有留言吗？',
      sendBtn: '发送',
      clearBtn: '清空留言',
      anonymousName: '匿名',
      emptyMsg: '还没有留言',
      msgSending: '发送中...',
      msgSent: '已发送，谢谢你的留言',
      msgError: '发送失败，请重试',
      msgEmpty: '请先填写留言',
      msgLimit: '发送太频繁，请稍后再试',
      themeLabel: '主题',
      themeSystem: '跟随系统',
      themeLight: '浅色模式',
      themeDark: '深色模式',
      footerNote: '反馈与留言会发送到 Supabase，仅用于改进这个主页'
    },
    en: {
      tagline: 'Chase the Zenith Light.',
      contactBtn: 'Contact Me',
      navAbout: 'About',
      navSkills: 'Skills',
      navProjects: 'Learning & Exploration',
      navBoard: 'Message Board',
      navContact: 'Contact me',
      nextPage: 'Next',
      navTwin: 'Digital Twin',
      agentTitle: 'Digital Twin',
      agentIntro: 'You can ask me about myself',
      agentHello: 'Hi, I am the digital twin of He Xinwei. Ask me anything',
      agentFallback: 'I am not sure about that yet. You can ask: who are you / school / skills / hobbies / projects / contact',
      agentOffline: 'I cannot answer that right now, feel free to email me',
      agentLimit: 'A bit too fast, please ask again in a moment',
      chatPlaceholder: 'Ask me something...',
      chatSend: 'Send',
      agentDisclaimer: 'Answers are generated by AI, for reference only',
      qWho: 'Who are you',
      qStudy: 'School and major',
      qSkill: 'Your skills',
      qHobby: 'Your hobbies',
      qContact: 'How to contact you',
      feedbackLink: 'Feedback',
      feedbackTitle: 'Feedback',
      feedbackIntro: 'Your feedback helps me improve this page',
      feedbackRating: 'Rating (optional)',
      feedbackDevice: 'Your device',
      deviceDesktop: 'Desktop',
      deviceTablet: 'Tablet',
      deviceMobile: 'Mobile',
      deviceOther: 'Other',
      feedbackText: 'Your feedback',
      feedbackTextPlaceholder: 'Tell me what you think...',
      feedbackContact: 'Contact (optional)',
      feedbackSubmit: 'Submit',
      feedbackCancel: 'Cancel',
      feedbackClose: 'Close',
      feedbackSoon: 'The feedback channel is coming soon',
      feedbackEmpty: 'Please fill in your feedback first',
      feedbackSending: 'Sending...',
      feedbackSent: 'Thank you for your feedback',
      feedbackError: 'Submit failed, please try again later',
      boardError: 'Could not load messages',
      retry: 'Retry',
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
      projectsTitle: 'Learning & Exploration',
      projectsText: 'Learning notes are being organized. Coursework and exploration insights will be shared soon',
      projectManage: 'Manage Projects',
      projectEditorTitle: 'Edit Project',
      projectNew: 'New Project',
      projectList: 'Projects',
      projectSelect: 'Select a project to edit',
      projectPublishedLabel: 'Published',
      projectSortLabel: 'Sort order',
      projectContentZh: '中文内容',
      projectContentEn: 'English content',
      projectTitle: 'Title',
      projectKicker: 'Subtitle',
      projectSummary: 'Summary',
      projectTags: 'Tags',
      projectContributions: 'Contributions',
      projectAddContribution: 'Add',
      projectReflection: 'Reflection',
      projectImages: 'Project images',
      projectImagesHint: 'Up to 6 images. JPEG / PNG / WebP, max 8 MB each',
      projectAddImages: 'Choose images',
      projectDelete: 'Delete project',
      projectSave: 'Save project',
      projectViewDetail: 'View details',
      projectStaticKicker: 'Built with Vibe Coding',
      projectStaticTitle: 'Xinwei He’s Personal Homepage',
      projectStaticSummary: 'A modern web practice independently completed through Vibe Coding (AI-assisted programming), from product concept to engineering delivery.',
      projectIndependent: 'Independent',
      projectTagsLabel: 'Project tags',
      projectHighlightsLabel: 'Contribution highlights',
      projectDesign: 'Product Design',
      projectPrompt: 'Prompt Architecture',
      projectEngineering: 'Engineering Oversight',
      projectDetailContrib: 'What I did',
      projectDetailInsight: 'Reflection',
      projectGallery: 'Project gallery',
      projectCover: 'Cover',
      projectNoImage: 'No images yet',
      projectEmpty: 'Learning and exploration notes are being organized',
      projectLoadError: 'Could not load projects',
      projectRetry: 'Retry',
      projectEditorError: 'Could not load project manager',
      projectSaved: 'Project saved',
      projectSaveError: 'Could not save project',
      projectDeleted: 'Project deleted',
      projectDeleteConfirm: 'Delete this project and all its images?',
      projectDeleteImageConfirm: 'Delete this image?',
      projectTitleRequired: 'Chinese title is required',
      projectNeedSave: 'Save the project before adding images',
      projectImageLimit: 'Up to 6 images per project',
      projectFileType: 'Only JPEG, PNG, or WebP is supported',
      projectFileTooLarge: 'Each image must be 8 MB or less',
      projectUploading: 'Uploading image...',
      projectUploaded: 'Image uploaded',
      projectUploadError: 'Could not upload image',
      projectImageDeleted: 'Image deleted',
      projectImageSaved: 'Image details saved',
      projectCoverSet: 'Cover updated',
      projectMoveUp: 'Move up',
      projectMoveDown: 'Move down',
      projectDeleteImage: 'Delete',
      projectSetCover: 'Set cover',
      projectDraft: 'Draft',
      projectPublished: 'Published',
      projectUntitled: 'Untitled project',
      projectNoProjects: 'No projects yet',
      projectAltZh: 'Chinese alt text',
      projectAltEn: 'English alt text',
      hobbyManage: 'Manage Hobbies',
      hobbyEditorTitle: 'Edit Hobby',
      hobbyNew: 'New Hobby',
      hobbyListLabel: 'Hobbies',
      hobbySelect: 'Select a hobby to edit',
      hobbyPublishedLabel: 'Published',
      hobbySortLabel: 'Sort order',
      hobbyTitle: 'Title',
      hobbyContent: 'Content',
      hobbyRichToolbar: 'Rich text formatting',
      hobbyRichParagraph: 'Paragraph',
      hobbyRichBold: 'Bold',
      hobbyRichItalic: 'Italic',
      hobbyRichBullet: 'Bulleted list',
      hobbyRichNumber: 'Numbered list',
      hobbyRichLink: 'Link',
      hobbyLinkPrompt: 'Enter a link (https:// or mailto:)',
      hobbyMedia: 'Photos and videos',
      hobbyMediaHint: 'Up to 20 images and 3 videos; images 8 MB, videos 50 MB',
      hobbyAddImages: 'Add images',
      hobbyAddVideos: 'Add videos',
      hobbyDelete: 'Delete hobby',
      hobbySave: 'Save hobby',
      hobbyDetailMedia: 'Photos and videos',
      hobbyDetailText: 'About this hobby',
      hobbyNoMedia: 'No photos or videos yet',
      hobbyContentEmpty: 'Written content is being prepared',
      hobbyEmpty: 'Hobby content is being prepared',
      hobbyLoadError: 'Could not load hobbies',
      hobbyRetry: 'Retry',
      hobbyEditorError: 'Could not load hobby manager',
      hobbySaved: 'Hobby saved',
      hobbySaveError: 'Could not save hobby',
      hobbyDeleted: 'Hobby deleted',
      hobbyDeleteConfirm: 'Delete this hobby and all of its media?',
      hobbyDeleteMediaConfirm: 'Delete this media file?',
      hobbyTitleRequired: 'Chinese title is required',
      hobbyNeedSave: 'Save the hobby before uploading media',
      hobbyImageLimit: 'Up to 20 images per hobby',
      hobbyVideoLimit: 'Up to 3 videos per hobby',
      hobbyImageType: 'Only JPEG, PNG, or WebP images are supported',
      hobbyVideoType: 'Only MP4 or WebM videos are supported',
      hobbyImageTooLarge: 'Each image must be 8 MB or less',
      hobbyVideoTooLarge: 'Each video must be 50 MB or less',
      hobbyUploading: 'Uploading media...',
      hobbyUploaded: 'Media uploaded',
      hobbyUploadError: 'Could not upload media',
      hobbyMediaDeleted: 'Media deleted',
      hobbyMediaSaved: 'Media order saved',
      hobbyDraft: 'Draft',
      hobbyPublished: 'Published',
      hobbyUntitled: 'Untitled hobby',
      hobbyNoHobbies: 'No hobbies yet',
      hobbyImageTypeLabel: 'Image',
      hobbyVideoTypeLabel: 'Video',
      contactTitle: 'Contact Me',
      contactHint: 'Feel free to contact me',
      emailLabel: 'Email: ',
      sendEmailBtn: 'Send Email',
      boardTitle: 'Message Board',
      nickLabel: 'Nickname',
      msgLabel: 'Message',
      msgPlaceholder: 'Write something...',
      anonLabel: 'Anonymous',
      msgColorLabel: 'Bubble color',
      colorCoral: 'Coral',
      colorAmber: 'Amber',
      colorSky: 'Sky blue',
      colorMint: 'Mint',
      colorLilac: 'Lilac',
      relLabel: 'Relation to me',
      relClassmate: 'Classmate',
      relFriend: 'Friend',
      relFamily: 'Family',
      relTeacher: 'Teacher',
      relOther: 'Other',
      adminOpen: 'Admin',
      adminTitle: 'Admin sign in',
      adminIntro: 'Sign in to manage messages, projects, and hobbies',
      adminEmail: 'Email',
      adminPass: 'Password',
      adminLogin: 'Sign in',
      adminClear: 'Clear all messages',
      adminSignOut: 'Sign out',
      adminHide: 'Hide',
      adminAuthFail: 'Sign in failed. Check email and password',
      adminSignedIn: 'Admin mode on',
      adminClearConfirm: 'Clear all messages?',
      sendBtn: 'Send',
      clearBtn: 'Clear messages',
      anonymousName: 'Anonymous',
      emptyMsg: 'No messages yet',
      msgSending: 'Sending...',
      msgSent: 'Sent. Thank you for your message',
      msgError: 'Failed to send. Please try again',
      msgEmpty: 'Please write a message first',
      msgLimit: 'Too many messages. Please try again later',
      themeLabel: 'Theme',
      themeSystem: 'System',
      themeLight: 'Light',
      themeDark: 'Dark',
      footerNote: 'Feedback and messages are sent to Supabase and used only to improve this page'
    }
  };

  var relKeys = {
    classmate: 'relClassmate',
    friend: 'relFriend',
    family: 'relFamily',
    teacher: 'relTeacher',
    other: 'relOther'
  };
  var STORE_KEY = 'site_messages';
  var THEME_KEY = 'theme';
  var LIGHT_KEY = 'lang';
  var current = 'zh';
  var themeMode = 'system';
  var themeMenuOpen = false;
  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  var SUPABASE_URL = 'https://nntyiphwrxwxffiqwqle.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_D6bM1TurtNQgilXkBbZdbg_ldDxZzSW';
  var MESSAGE_COOLDOWN_MS = 10000;
  var AGENT_COOLDOWN_MS = 5000;

  var adminToken = null;
  var ADMIN_KEY = 'admin_token';
  try { adminToken = sessionStorage.getItem(ADMIN_KEY); } catch (e) { adminToken = null; }

  var FALLBACK_PROJECTS = [
    {
      id: 'static',
      sort_order: 1,
      is_published: true,
      kicker_zh: '基于 Vibe Coding 构建',
      kicker_en: 'Built with Vibe Coding',
      title_zh: '何欣蔚个人主页',
      title_en: 'Xinwei He’s Personal Homepage',
      summary_zh: '一次通过 Vibe Coding（AI 辅助编程）独立完成的现代 Web 实践，从产品构思到工程落地均由我主导。',
      summary_en: 'A modern web practice independently completed through Vibe Coding (AI-assisted programming), from product concept to engineering delivery.',
      highlights_zh: [
        { label: '产品设计', text: '构思包括“数字分身”对话、动态留言板和暗黑模式在内的整体产品逻辑。' },
        { label: 'Prompt 架构', text: '通过自然语言精准引导 AI 生成纯原生 HTML/CSS/JS 高质量代码，不依赖臃肿的前端框架。' },
        { label: '工程把控', text: '审查并整合 AI 生成代码，确保语义化、无障碍访问（a11y）和响应式体验。' }
      ],
      highlights_en: [
        { label: 'Product Design', text: 'Defined the overall product logic, including digital-twin conversations, a dynamic message board, and dark mode.' },
        { label: 'Prompt Architecture', text: 'Used precise natural-language prompts to guide AI in generating high-quality vanilla HTML/CSS/JS without bulky frameworks.' },
        { label: 'Engineering Oversight', text: 'Reviewed and integrated AI-generated code to ensure semantic markup, accessibility (a11y), and a responsive experience.' }
      ],
      reflection_zh: '比起成为“写程序的人”，Vibe Coding 让我更像一个“产品经理 + 架构师”。这个主页是我向 AI 时代迈出的第一步；未来，我希望把这种能力应用到智能医学工程的专业领域。',
      reflection_en: 'More than being someone who writes programs, Vibe Coding made me feel more like a product manager and architect. This homepage is my first step into the age of AI; I hope to apply this capability to intelligent medical engineering.',
      tags: ['Vibe Coding', 'HTML / CSS / JS', '独立开发'],
      project_images: []
    }
  ];
  var publicProjects = [];
  var adminProjects = [];
  var projectsReady = false;
  var detailProject = null;
  var detailReturnFocus = null;
  var editorProjectId = null;
  var editorImages = [];
  var editorUploading = false;
  var editorReturnFocus = null;

  var FALLBACK_HOBBIES = [
    { id: '1f8d0d48-7f0b-4a5c-9a3d-000000000001', sort_order: 1, is_published: true, title_zh: '二胡', title_en: 'Erhu', content_zh: '', content_en: '', hobby_media: [] },
    { id: '1f8d0d48-7f0b-4a5c-9a3d-000000000002', sort_order: 2, is_published: true, title_zh: '篆刻', title_en: 'Seal Carving', content_zh: '', content_en: '', hobby_media: [] }
  ];
  var publicHobbies = [];
  var adminHobbies = [];
  var hobbiesReady = false;
  var detailHobby = null;
  var detailHobbyReturnFocus = null;
  var editorHobbyId = null;
  var editorHobbyMedia = [];
  var editorHobbyUploading = false;
  var hobbyEditorReturnFocus = null;
  var lightboxReturnFocus = null;

  function updateAdminUI() {
    var bar = document.getElementById('adminBar');
    var adminNodes = document.querySelectorAll('[data-admin-only]');
    for (var i = 0; i < adminNodes.length; i++) {
      if (adminToken) { adminNodes[i].removeAttribute('hidden'); }
      else { adminNodes[i].setAttribute('hidden', ''); }
    }
    if (bar) {
      if (adminToken) { bar.removeAttribute('hidden'); }
      else { bar.setAttribute('hidden', ''); }
    }
  }

  function adminSignIn(email, password) {
    return fetch(SUPABASE_URL + '/auth/v1/token?grant_type=password', {
      method: 'POST',
      headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    }).then(function (res) {
      if (!res.ok) { throw new Error('auth'); }
      return res.json();
    }).then(function (data) {
      adminToken = data.access_token;
      try { sessionStorage.setItem(ADMIN_KEY, adminToken); } catch (e) {}
      updateAdminUI();
      return true;
    });
  }

  function adminSignOut() {
    adminToken = null;
    try { sessionStorage.removeItem(ADMIN_KEY); } catch (e) {}
    closeProjectEditor();
    if (typeof closeHobbyEditor === 'function') { closeHobbyEditor(); }
    updateAdminUI();
    renderProjects();
    return renderBoard();
  }

  function hideMessage(id) {
    return apiFetch('messages?id=eq.' + encodeURIComponent(id), {
      method: 'PATCH',
      prefer: 'return=minimal',
      body: { is_visible: false }
    }).then(function () { return renderBoard(); });
  }

  function clearAllMessages() {
    return apiFetch('messages?id=not.is.null', {
      method: 'DELETE',
      prefer: 'return=minimal'
    }).then(function () { return renderBoard(); });
  }

  function initAdmin() {
    var modal = document.getElementById('adminModal');
    var openBtn = document.getElementById('adminOpen');
    var closeBtn = document.getElementById('adminClose');
    var cancelBtn = document.getElementById('adminCancel');
    var form = document.getElementById('adminForm');
    var email = document.getElementById('adminEmail');
    var pass = document.getElementById('adminPass');
    var clearBtn = document.getElementById('adminClear');
    var outBtn = document.getElementById('adminSignOut');
    var list = document.getElementById('msgList');
    if (!modal || !openBtn) { return; }

    updateAdminUI();

    var openModal = function () { modal.removeAttribute('hidden'); syncModalLock(); if (email) { email.focus(); } };
    var closeModal = function () { modal.setAttribute('hidden', ''); syncModalLock(); };

    openBtn.addEventListener('click', openModal);
    if (closeBtn) { closeBtn.addEventListener('click', closeModal); }
    if (cancelBtn) { cancelBtn.addEventListener('click', closeModal); }
    modal.addEventListener('click', function (e) {
      if (e.target && e.target.getAttribute && e.target.getAttribute('data-admin-close')) { closeModal(); }
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var em = email ? email.value.trim() : '';
        var pw = pass ? pass.value : '';
        if (!em || !pw) { showToast(t('adminAuthFail'), 'error'); return; }
        adminSignIn(em, pw).then(function () {
          if (pass) { pass.value = ''; }
          closeModal();
          showToast(t('adminSignedIn'), 'success');
          return renderBoard();
        }).catch(function () {
          showToast(t('adminAuthFail'), 'error');
        });
      });
    }

    if (outBtn) { outBtn.addEventListener('click', function () { adminSignOut(); }); }

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (!adminToken) { return; }
        if (!window.confirm(t('adminClearConfirm'))) { return; }
        clearAllMessages().catch(function () { showToast(t('msgError'), 'error'); });
      });
    }

    if (list) {
      list.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('.msg-admin') : null;
        if (!btn || !adminToken) { return; }
        hideMessage(btn.getAttribute('data-id')).catch(function () { showToast(t('msgError'), 'error'); });
      });
    }
  }
  function apiFetch(path, options) {
    var opts = options || {};
    var headers = {
      apikey: SUPABASE_KEY,
      Authorization: 'Bearer ' + (adminToken || SUPABASE_KEY),
      'Content-Type': 'application/json'
    };
    if (opts.prefer) { headers.Prefer = opts.prefer; }
    return fetch(SUPABASE_URL + '/rest/v1/' + path, {
      method: opts.method || 'GET',
      headers: headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined
    }).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (txt) {
          throw new Error('HTTP ' + res.status + ' ' + txt);
        });
      }
      var ct = res.headers.get('content-type') || '';
      if (ct.indexOf('application/json') > -1) { return res.json(); }
      return true;
    });
  }

  function edgeFetch(name, body) {
    return fetch(SUPABASE_URL + '/functions/v1/' + name, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: 'Bearer ' + SUPABASE_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(function (res) {
      if (res.status === 429) {
        var retry = Number(res.headers.get('retry-after') || 60);
        var rateError = new Error('rate');
        rateError.retryAfter = isFinite(retry) && retry > 0 ? retry : 60;
        throw rateError;
      }
      if (!res.ok) {
        return res.text().then(function (txt) {
          throw new Error('HTTP ' + res.status + ' ' + txt);
        });
      }
      return res.json();
    });
  }

  function deviceLabel() {
    var ua = navigator.userAgent || '';
    var os = /Windows/i.test(ua) ? 'Windows'
      : /Macintosh|Mac OS X/i.test(ua) ? 'macOS'
      : /Android/i.test(ua) ? 'Android'
      : /iPhone|iPad|iPod/i.test(ua) ? 'iOS'
      : /Linux/i.test(ua) ? 'Linux' : '其他';
    var br = /Edg\//i.test(ua) ? 'Edge'
      : /Chrome\//i.test(ua) ? 'Chrome'
      : /Firefox\//i.test(ua) ? 'Firefox'
      : /Safari\//i.test(ua) ? 'Safari' : '浏览器';
    return os + ' · ' + br;
  }

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
    return apiFetch('messages?select=*&is_visible=eq.true&order=created_at.desc&limit=50');
  }
  function sendMessage(data) {
    return edgeFetch('post-message', data);
  }
  function layoutBoard() {
    var ul = document.getElementById('msgList');
    if (!ul) { return; }
    var items = ul.querySelectorAll('.msg-item');
    if (!items.length) { return; }
    if (ul.offsetHeight === 0) { return; }
    var isDesk = !!(window.matchMedia && window.matchMedia('(min-width: 640px)').matches);
    var isWide = !!(window.matchMedia && window.matchMedia('(min-width: 900px)').matches);
    var cols = isWide ? 3 : (isDesk ? 2 : 1);
    var rowH = 1;
    for (var i = 0; i < items.length; i++) {
      var el = items[i];
      el.style.gridRowEnd = '';
      el.style.gridColumn = '';
      el.classList.remove('msg-w-sm', 'msg-w-md', 'msg-w-lg', 'msg-right');
      var len = parseInt(el.getAttribute('data-len') || '0', 10);
      if (!isDesk) {
        if (len <= 12) { el.classList.add('msg-w-sm'); }
        else if (len <= 40) { el.classList.add('msg-w-md'); }
        else { el.classList.add('msg-w-lg'); }
        if (i % 2 === 1) { el.classList.add('msg-right'); }
        continue;
      }
      if (cols > 1 && el.getAttribute('data-wide') === '1') {
        el.style.gridColumn = 'span 2';
      }
      var h = el.offsetHeight;
      var rows = Math.max(1, Math.ceil(h / rowH));
      el.style.gridRowEnd = 'span ' + rows;
    }
  }

  function initBoardLayout() {
    var timer = null;
    window.addEventListener('resize', function () {
      if (timer) { window.clearTimeout(timer); }
      timer = window.setTimeout(function () { timer = null; layoutBoard(); }, 150);
    });
    if (document.fonts && document.fonts.ready && document.fonts.ready.then) {
      document.fonts.ready.then(function () { layoutBoard(); });
    }
  }
  function renderBoard() {
    var ul = document.getElementById('msgList');
    if (!ul) { return; }
    return loadMessages().then(function (list) {
      ul.textContent = '';
      if (!list || list.length === 0) {
        var empty = document.createElement('li');
        empty.className = 'msg-empty';
        empty.textContent = t('emptyMsg');
        ul.appendChild(empty);
        return;
      }
      var palette = ['coral', 'amber', 'sky', 'mint', 'lilac'];
      for (var i = 0; i < list.length; i++) {
        var m = list[i];
        var li = document.createElement('li');
        var tone = palette.indexOf(m.color) > -1 ? m.color : 'coral';
        li.className = 'msg-item color-' + tone;
        var rawText = String(m.content || '');
        li.setAttribute('data-len', String(rawText.length));
        var idStr = String(m.id || '');
        var hash = 0;
        for (var hi = 0; hi < idStr.length; hi++) { hash = (hash * 31 + idStr.charCodeAt(hi)) % 997; }
        li.setAttribute('data-wide', (hash % 3 === 0) ? '1' : '0');
        var head = document.createElement('div');
        head.className = 'msg-head';
        var name = document.createElement('span');
        name.className = 'msg-name';
        name.textContent = (m.nickname && String(m.nickname).trim()) ? String(m.nickname).trim() : t('anonymousName');
        var time = document.createElement('time');
        time.className = 'msg-time';
        time.textContent = (m.created_at ? new Date(m.created_at) : new Date()).toLocaleString();
        head.appendChild(name);
        if (m.relation && relKeys[m.relation]) {
          var relTag = document.createElement('span');
          relTag.className = 'msg-rel-tag';
          relTag.textContent = t(relKeys[m.relation]);
          head.appendChild(relTag);
        }
        head.appendChild(time);
        if (adminToken && m.id) {
          var hideBtn = document.createElement('button');
          hideBtn.type = 'button';
          hideBtn.className = 'msg-admin';
          hideBtn.setAttribute('data-id', m.id);
          hideBtn.textContent = t('adminHide');
          head.appendChild(hideBtn);
        }
        var body = document.createElement('p');
        body.className = 'msg-body';
        body.textContent = String(m.content || '');
        li.appendChild(head);
        li.appendChild(body);
        ul.appendChild(li);
      }
      layoutBoard();
    }).catch(function () {
      ul.textContent = '';
      var err = document.createElement('li');
      err.className = 'msg-empty';
      err.textContent = t('boardError') + ' ';
      var retryBtn = document.createElement('button');
      retryBtn.type = 'button';
      retryBtn.className = 'clear-btn';
      retryBtn.textContent = t('retry');
      retryBtn.addEventListener('click', function () { renderBoard(); });
      err.appendChild(retryBtn);
      ul.appendChild(err);
    });
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
  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function escapeAttr(value) { return escapeHtml(value); }
  function projectField(project, base) {
    var preferred = project[base + '_' + current];
    var fallback = project[base + '_' + (current === 'zh' ? 'en' : 'zh')];
    return preferred || fallback || '';
  }
  function projectHighlights(project) {
    var preferred = project['highlights_' + current];
    var fallback = project['highlights_' + (current === 'zh' ? 'en' : 'zh')];
    return Array.isArray(preferred) && preferred.length ? preferred : (Array.isArray(fallback) ? fallback : []);
  }
  function projectImages(project) {
    var list = project && Array.isArray(project.project_images) ? project.project_images.slice() : [];
    list.sort(function (a, b) {
      var ac = a && a.is_cover ? 1 : 0;
      var bc = b && b.is_cover ? 1 : 0;
      if (ac !== bc) { return bc - ac; }
      return (Number(a && a.sort_order) || 0) - (Number(b && b.sort_order) || 0);
    });
    return list;
  }
  function projectCover(project) {
    var images = projectImages(project);
    for (var i = 0; i < images.length; i++) {
      if (images[i].is_cover) { return images[i]; }
    }
    return images[0] || null;
  }
  function projectImageAlt(image, project) {
    var fallback = projectField(project, 'title') || t('projectUntitled');
    if (!image) { return fallback; }
    return image['alt_' + current] || image['alt_' + (current === 'zh' ? 'en' : 'zh')] || fallback;
  }
  function projectImageUrl(path) {
    var raw = String(path || '').trim();
    if (!raw) { return ''; }
    if (/^https?:\/\//i.test(raw)) { return raw; }
    var safePath = raw.replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/');
    return SUPABASE_URL + '/storage/v1/object/public/project-images/' + safePath;
  }
  function displayProjectTag(tag) {
    var value = String(tag || '').trim();
    if (value === '独立开发' || /^independent$/i.test(value)) { return t('projectIndependent'); }
    return value;
  }
  function syncModalLock() {
    var ids = ['feedbackModal', 'adminModal', 'projectDetailModal', 'projectEditorModal', 'hobbyDetailModal', 'hobbyEditorModal'];
    var open = false;
    for (var i = 0; i < ids.length; i++) {
      var node = document.getElementById(ids[i]);
      if (node && !node.hasAttribute('hidden')) { open = true; break; }
    }
    var lightbox = document.getElementById('imageLightbox');
    if (lightbox && !lightbox.hasAttribute('hidden')) { open = true; }
    document.documentElement.classList.toggle('feedback-open', open);
  }
  function trapFocus(container, event) {
    if (event.key !== 'Tab' || !container) { return; }
    var nodes = container.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])');
    var focusable = [];
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].offsetParent !== null) { focusable.push(nodes[i]); }
    }
    if (!focusable.length) { return; }
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  function loadPublicProjects() {
    var list = document.getElementById('projectList');
    if (!list) { return Promise.resolve(); }
    return apiFetch('projects?select=*,project_images(*)&is_published=eq.true&order=sort_order.asc').then(function (rows) {
      publicProjects = Array.isArray(rows) && rows.length ? rows : FALLBACK_PROJECTS.slice();
      projectsReady = true;
      renderProjects();
    }).catch(function () {
      publicProjects = FALLBACK_PROJECTS.slice();
      projectsReady = true;
      renderProjects();
      var retry = document.createElement('button');
      retry.type = 'button';
      retry.className = 'project-retry';
      retry.textContent = t('projectRetry');
      retry.addEventListener('click', function () { loadPublicProjects(); });
      list.appendChild(retry);
    });
  }
  function renderProjectCover(project, index, lazy) {
    var cover = projectCover(project);
    var src = cover ? projectImageUrl(cover.storage_path) : '';
    if (!src) {
      return '<div class="project-cover-art" aria-hidden="true"><span>VIBE</span><strong>' + String(index + 1).padStart(2, '0') + '</strong></div>';
    }
    return '<div class="project-cover-art" aria-hidden="true"><span>VIBE</span><strong>' + String(index + 1).padStart(2, '0') + '</strong></div>' +
      '<img class="js-project-image project-cover-image" src="' + escapeAttr(src) + '" alt="' + escapeAttr(projectImageAlt(cover, project)) + '"' + (lazy ? ' loading="lazy"' : '') + ' />';
  }
  function renderProjectEntry(project, index) {
    var projectId = String(project.id || '');
    var title = projectField(project, 'title') || t('projectUntitled');
    var kicker = projectField(project, 'kicker');
    var summary = projectField(project, 'summary');
    var highlights = projectHighlights(project);
    var tags = Array.isArray(project.tags) ? project.tags : [];
    var tagHtml = '';
    for (var ti = 0; ti < tags.length; ti++) {
      tagHtml += '<li>' + escapeHtml(displayProjectTag(tags[ti])) + '</li>';
    }
    var highlightHtml = '';
    for (var hi = 0; hi < highlights.length; hi++) {
      if (highlights[hi] && highlights[hi].label) { highlightHtml += '<li>' + escapeHtml(highlights[hi].label) + '</li>'; }
    }
    return '<article class="project-entry" data-project-id="' + escapeAttr(projectId) + '">' +
      '<div class="project-cover">' + renderProjectCover(project, index, true) + '</div>' +
      '<div class="project-content">' +
        (kicker ? '<p class="project-kicker">' + escapeHtml(kicker) + '</p>' : '') +
        '<h3>' + escapeHtml(title) + '</h3>' +
        (summary ? '<p class="project-summary">' + escapeHtml(summary) + '</p>' : '') +
        (tagHtml ? '<ul class="project-tags" aria-label="' + escapeAttr(t('projectTagsLabel')) + '">' + tagHtml + '</ul>' : '') +
        (highlightHtml ? '<ul class="project-highlights" aria-label="' + escapeAttr(t('projectHighlightsLabel')) + '">' + highlightHtml + '</ul>' : '') +
        '<button class="project-link" type="button" data-project-detail="' + escapeAttr(projectId) + '">' + escapeHtml(t('projectViewDetail')) + '</button>' +
      '</div>' +
    '</article>';
  }
  function bindProjectImages(root) {
    var images = root.querySelectorAll('.js-project-image');
    for (var i = 0; i < images.length; i++) {
      (function (img) {
        var loaded = function () { img.classList.add('is-loaded'); };
        var failed = function () { img.classList.add('is-error'); };
        img.addEventListener('load', loaded);
        img.addEventListener('error', failed);
        if (img.complete) {
          if (img.naturalWidth) { loaded(); }
          else { failed(); }
        }
      })(images[i]);
    }
  }
  function renderProjects() {
    var list = document.getElementById('projectList');
    if (!list || !projectsReady) { return; }
    if (!publicProjects.length) {
      list.innerHTML = '<p class="project-empty">' + escapeHtml(t('projectEmpty')) + '</p>';
      return;
    }
    var html = '';
    for (var i = 0; i < publicProjects.length; i++) { html += renderProjectEntry(publicProjects[i], i); }
    list.innerHTML = html;
    bindProjectImages(list);
  }
  function getPublicProject(id) {
    for (var i = 0; i < publicProjects.length; i++) {
      if (String(publicProjects[i].id) === String(id)) { return publicProjects[i]; }
    }
    return null;
  }
  function renderProjectDetail(project) {
    if (!project) { return; }
    detailProject = project;
    var title = projectField(project, 'title') || t('projectUntitled');
    var kicker = projectField(project, 'kicker');
    var summary = projectField(project, 'summary');
    var reflection = projectField(project, 'reflection');
    var highlights = projectHighlights(project);
    var tags = Array.isArray(project.tags) ? project.tags : [];
    var images = projectImages(project);
    var tagHtml = '';
    for (var ti = 0; ti < tags.length; ti++) { tagHtml += '<li>' + escapeHtml(displayProjectTag(tags[ti])) + '</li>'; }
    var highlightHtml = '';
    for (var hi = 0; hi < highlights.length; hi++) {
      var item = highlights[hi] || {};
      highlightHtml += '<li><strong>' + escapeHtml(item.label || '') + '</strong><p>' + escapeHtml(item.text || '') + '</p></li>';
    }
    var galleryHtml = '';
    for (var ii = 0; ii < images.length; ii++) {
      var image = images[ii];
      var src = projectImageUrl(image.storage_path);
      if (!src) { continue; }
      var alt = projectImageAlt(image, project);
      galleryHtml += '<li><button class="project-gallery-item" type="button" data-lightbox-src="' + escapeAttr(src) + '" data-lightbox-alt="' + escapeAttr(alt) + '">' +
        '<span class="project-cover-art" aria-hidden="true"></span><img class="js-project-image" src="' + escapeAttr(src) + '" alt="' + escapeAttr(alt) + '" loading="lazy" /></button></li>';
    }
    var content = document.getElementById('projectDetailContent');
    if (!content) { return; }
    content.innerHTML =
      '<div class="project-detail-head">' +
        (kicker ? '<p class="project-kicker">' + escapeHtml(kicker) + '</p>' : '') +
        '<h2 id="projectDetailTitle">' + escapeHtml(title) + '</h2>' +
        (tagHtml ? '<ul class="project-tags" aria-label="' + escapeAttr(t('projectTagsLabel')) + '">' + tagHtml + '</ul>' : '') +
      '</div>' +
      (summary ? '<p class="project-detail-summary">' + escapeHtml(summary) + '</p>' : '') +
      (highlightHtml ? '<section class="project-detail-section"><h3>' + escapeHtml(t('projectDetailContrib')) + '</h3><ol class="project-detail-contrib">' + highlightHtml + '</ol></section>' : '') +
      (reflection ? '<section class="project-detail-section project-insight"><h3>' + escapeHtml(t('projectDetailInsight')) + '</h3><p>' + escapeHtml(reflection) + '</p></section>' : '') +
      (galleryHtml ? '<section class="project-detail-section"><h3>' + escapeHtml(t('projectGallery')) + '</h3><ul class="project-gallery">' + galleryHtml + '</ul></section>' : '');
    bindProjectImages(content);
  }
  function openProjectDetail(id, trigger) {
    var project = getPublicProject(id);
    var modal = document.getElementById('projectDetailModal');
    if (!project || !modal) { return; }
    detailReturnFocus = trigger || document.activeElement;
    renderProjectDetail(project);
    modal.removeAttribute('hidden');
    syncModalLock();
    var close = document.getElementById('projectDetailClose');
    if (close) { close.focus(); }
  }
  function closeProjectDetail() {
    var modal = document.getElementById('projectDetailModal');
    if (!modal || modal.hasAttribute('hidden')) { return; }
    modal.setAttribute('hidden', '');
    detailProject = null;
    syncModalLock();
    if (detailReturnFocus && detailReturnFocus.focus) { detailReturnFocus.focus(); }
  }
  function openImageLightbox(src, alt, trigger) {
    var box = document.getElementById('imageLightbox');
    var img = document.getElementById('imageLightboxImg');
    if (!box || !img || !src) { return; }
    lightboxReturnFocus = trigger || document.activeElement;
    img.src = src;
    img.alt = alt || '';
    box.removeAttribute('hidden');
    syncModalLock();
    var close = document.getElementById('imageLightboxClose');
    if (close) { close.focus(); }
  }
  function closeImageLightbox() {
    var box = document.getElementById('imageLightbox');
    var img = document.getElementById('imageLightboxImg');
    if (!box || box.hasAttribute('hidden')) { return; }
    box.setAttribute('hidden', '');
    if (img) { img.removeAttribute('src'); img.alt = ''; }
    syncModalLock();
    if (lightboxReturnFocus && lightboxReturnFocus.focus) { lightboxReturnFocus.focus(); }
    else {
      var detailClose = document.getElementById('projectDetailClose');
      if (detailClose && detailProject) { detailClose.focus(); }
    }
    lightboxReturnFocus = null;
  }
  function initProjectDetail() {
    var list = document.getElementById('projectList');
    var modal = document.getElementById('projectDetailModal');
    var close = document.getElementById('projectDetailClose');
    var box = document.getElementById('imageLightbox');
    var lightboxClose = document.getElementById('imageLightboxClose');
    if (list) {
      list.addEventListener('click', function (e) {
        var trigger = e.target.closest ? e.target.closest('[data-project-detail]') : null;
        if (!trigger) { return; }
        openProjectDetail(trigger.getAttribute('data-project-detail'), trigger);
      });
    }
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target && e.target.getAttribute && e.target.getAttribute('data-project-detail-close')) { closeProjectDetail(); }
        var gallery = e.target.closest ? e.target.closest('.project-gallery-item') : null;
        if (gallery) {
          openImageLightbox(gallery.getAttribute('data-lightbox-src'), gallery.getAttribute('data-lightbox-alt'));
        }
      });
    }
    if (close) { close.addEventListener('click', closeProjectDetail); }
    if (lightboxClose) { lightboxClose.addEventListener('click', closeImageLightbox); }
    if (box) {
      box.addEventListener('click', function (e) {
        if (e.target === box || (e.target && e.target.id === 'imageLightboxClose')) { closeImageLightbox(); }
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box && !box.hasAttribute('hidden')) { closeImageLightbox(); return; }
      if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) { closeProjectDetail(); return; }
      if (!modal || modal.hasAttribute('hidden')) { return; }
      trapFocus(modal.querySelector('.project-detail-dialog'), e);
    });
  }
  function cloneProjectImage(image) {
    return { id: image.id, project_id: image.project_id, storage_path: image.storage_path || '', alt_zh: image.alt_zh || '', alt_en: image.alt_en || '', sort_order: Number(image.sort_order) || 0, is_cover: !!image.is_cover };
  }
  function randomStorageId() {
    if (window.crypto && window.crypto.randomUUID) { return window.crypto.randomUUID(); }
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12);
  }
  function storageObjectUrl(path) {
    return SUPABASE_URL + '/storage/v1/object/project-images/' + String(path || '').split('/').map(encodeURIComponent).join('/');
  }
  function storageAuthHeaders(contentType) {
    var headers = { apikey: SUPABASE_KEY, Authorization: 'Bearer ' + (adminToken || '') };
    if (contentType) { headers['Content-Type'] = contentType; }
    return headers;
  }
  function deleteStorageFile(path) {
    if (!path || !adminToken) { return Promise.resolve(); }
    return fetch(storageObjectUrl(path), { method: 'DELETE', headers: storageAuthHeaders() }).then(function (res) {
      if (!res.ok && res.status !== 404) { throw new Error('storage delete'); }
      return true;
    });
  }
  function editorProject() {
    for (var i = 0; i < adminProjects.length; i++) { if (String(adminProjects[i].id) === String(editorProjectId)) { return adminProjects[i]; } }
    return null;
  }
  function loadAdminProjects(preferredId) {
    return apiFetch('projects?select=*,project_images(*)&order=sort_order.asc,created_at.asc').then(function (rows) {
      adminProjects = Array.isArray(rows) ? rows : [];
      renderProjectEditorList();
      var wanted = preferredId || editorProjectId || (adminProjects[0] && adminProjects[0].id);
      if (wanted) { selectEditorProject(wanted); } else { startNewEditorProject(false); }
      return adminProjects;
    });
  }
  function renderProjectEditorList() {
    var list = document.getElementById('projectEditorList');
    if (!list) { return; }
    list.innerHTML = '';
    if (!adminProjects.length) {
      var empty = document.createElement('li'); empty.className = 'project-editor-list-empty'; empty.textContent = t('projectNoProjects'); list.appendChild(empty); return;
    }
    for (var i = 0; i < adminProjects.length; i++) {
      var project = adminProjects[i]; var li = document.createElement('li'); var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'project-editor-list-item'; btn.setAttribute('data-edit-project', String(project.id));
      if (String(project.id) === String(editorProjectId)) { btn.classList.add('is-active'); }
      var title = document.createElement('strong'); title.textContent = projectField(project, 'title') || t('projectUntitled');
      var state = document.createElement('small'); state.textContent = project.is_published ? t('projectPublished') : t('projectDraft');
      btn.appendChild(title); btn.appendChild(state); li.appendChild(btn); list.appendChild(li);
    }
  }
  function renderContributionEditors(lang, items) {
    var root = document.getElementById(lang === 'zh' ? 'projectContribZh' : 'projectContribEn');
    if (!root) { return; }
    root.innerHTML = '';
    var list = Array.isArray(items) ? items : [];
    for (var i = 0; i < list.length; i++) { addContributionEditor(lang, list[i]); }
  }
  function addContributionEditor(lang, item) {
    var root = document.getElementById(lang === 'zh' ? 'projectContribZh' : 'projectContribEn');
    if (!root || root.children.length >= 6) { return; }
    var row = document.createElement('div'); row.className = 'contribution-editor-row'; row.setAttribute('data-contrib-lang', lang);
    var label = document.createElement('input'); label.type = 'text'; label.maxLength = 50; label.setAttribute('data-contrib-label', '1');
    label.placeholder = lang === 'zh' ? '名称，例如：产品设计' : 'Label, e.g. Product Design'; label.value = item && item.label ? item.label : '';
    var text = document.createElement('textarea'); text.rows = 2; text.maxLength = 400; text.setAttribute('data-contrib-text', '1');
    text.placeholder = lang === 'zh' ? '简要说明你的具体工作' : 'Describe the work briefly'; text.value = item && item.text ? item.text : '';
    var remove = document.createElement('button'); remove.type = 'button'; remove.className = 'contribution-remove'; remove.setAttribute('data-remove-contrib', '1');
    remove.setAttribute('aria-label', t('projectDeleteImage')); remove.textContent = '×';
    row.appendChild(label); row.appendChild(text); row.appendChild(remove); root.appendChild(row);
  }
  function readContributionEditors(lang) {
    var root = document.getElementById(lang === 'zh' ? 'projectContribZh' : 'projectContribEn');
    if (!root) { return []; }
    var rows = root.querySelectorAll('.contribution-editor-row'); var result = [];
    for (var i = 0; i < rows.length; i++) {
      var label = rows[i].querySelector('[data-contrib-label]'); var text = rows[i].querySelector('[data-contrib-text]');
      var labelValue = label ? label.value.trim() : ''; var textValue = text ? text.value.trim() : '';
      if (labelValue || textValue) { result.push({ label: labelValue, text: textValue }); }
    }
    return result;
  }
  function renderEditorImages() {
    var root = document.getElementById('projectImagesList'); var addLabel = document.getElementById('projectAddImageLabel');
    if (addLabel) { addLabel.classList.toggle('is-disabled', !editorProjectId || editorUploading); addLabel.setAttribute('aria-disabled', (!editorProjectId || editorUploading) ? 'true' : 'false'); }
    if (!root) { return; }
    root.innerHTML = '';
    if (!editorImages.length) { var empty = document.createElement('p'); empty.className = 'project-images-empty'; empty.textContent = t('projectNoImage'); root.appendChild(empty); return; }
    for (var i = 0; i < editorImages.length; i++) {
      var image = editorImages[i]; var row = document.createElement('article'); row.className = 'project-image-row'; row.setAttribute('data-image-index', String(i));
      var thumb = document.createElement('div'); thumb.className = 'project-image-thumb project-cover-art';
      var img = document.createElement('img'); img.className = 'js-project-image'; img.loading = 'lazy'; img.src = projectImageUrl(image.storage_path); img.alt = projectImageAlt(image, editorProject() || {}); thumb.appendChild(img);
      var fields = document.createElement('div'); fields.className = 'project-image-fields';
      var altZh = document.createElement('input'); altZh.type = 'text'; altZh.maxLength = 160; altZh.setAttribute('data-image-alt-zh', '1'); altZh.placeholder = t('projectAltZh'); altZh.value = image.alt_zh || '';
      var altEn = document.createElement('input'); altEn.type = 'text'; altEn.maxLength = 160; altEn.setAttribute('data-image-alt-en', '1'); altEn.placeholder = t('projectAltEn'); altEn.value = image.alt_en || '';
      var actions = document.createElement('div'); actions.className = 'project-image-actions';
      var up = document.createElement('button'); up.type = 'button'; up.setAttribute('data-image-action', 'up'); up.setAttribute('data-image-index', String(i)); up.textContent = t('projectMoveUp'); if (i === 0) { up.disabled = true; }
      var down = document.createElement('button'); down.type = 'button'; down.setAttribute('data-image-action', 'down'); down.setAttribute('data-image-index', String(i)); down.textContent = t('projectMoveDown'); if (i === editorImages.length - 1) { down.disabled = true; }
      var cover = document.createElement('button'); cover.type = 'button'; cover.setAttribute('data-image-action', 'cover'); cover.setAttribute('data-image-index', String(i)); cover.textContent = image.is_cover ? t('projectCover') : t('projectSetCover'); if (image.is_cover) { cover.disabled = true; cover.classList.add('is-cover'); }
      var del = document.createElement('button'); del.type = 'button'; del.className = 'is-danger'; del.setAttribute('data-image-action', 'delete'); del.setAttribute('data-image-index', String(i)); del.textContent = t('projectDeleteImage');
      actions.appendChild(up); actions.appendChild(down); actions.appendChild(cover); actions.appendChild(del); fields.appendChild(altZh); fields.appendChild(altEn); fields.appendChild(actions); row.appendChild(thumb); row.appendChild(fields); root.appendChild(row);
    }
    bindProjectImages(root);
  }
  function readEditorImages() {
    var root = document.getElementById('projectImagesList'); if (!root) { return; }
    var rows = root.querySelectorAll('.project-image-row');
    for (var i = 0; i < rows.length; i++) {
      var index = parseInt(rows[i].getAttribute('data-image-index'), 10); if (!editorImages[index]) { continue; }
      var zh = rows[i].querySelector('[data-image-alt-zh]'); var en = rows[i].querySelector('[data-image-alt-en]');
      editorImages[index].alt_zh = zh ? zh.value.trim() : ''; editorImages[index].alt_en = en ? en.value.trim() : ''; editorImages[index].sort_order = i + 1;
    }
  }
  function persistEditorImages() {
    readEditorImages(); if (!editorProjectId || !editorImages.length) { return Promise.resolve(); }
    var chain = Promise.resolve();
    for (var i = 0; i < editorImages.length; i++) {
      (function (image) {
        chain = chain.then(function () {
          return apiFetch('project_images?id=eq.' + encodeURIComponent(image.id), { method: 'PATCH', prefer: 'return=minimal', body: { is_cover: false } });
        });
      })(editorImages[i]);
    }
    for (var j = 0; j < editorImages.length; j++) {
      (function (image) {
        chain = chain.then(function () {
          return apiFetch('project_images?id=eq.' + encodeURIComponent(image.id), { method: 'PATCH', prefer: 'return=minimal', body: { alt_zh: image.alt_zh || '', alt_en: image.alt_en || '', sort_order: image.sort_order, is_cover: !!image.is_cover } });
        });
      })(editorImages[j]);
    }
    return chain;
  }
  function startNewEditorProject(focusTitle) {
    editorProjectId = null; editorImages = [];
    var fields = document.getElementById('projectEditorFields'); var empty = document.getElementById('projectEditorEmpty'); var form = document.getElementById('projectEditorForm'); var deleteBtn = document.getElementById('projectDelete');
    if (empty) { empty.hidden = true; } if (fields) { fields.hidden = false; } if (form) { form.reset(); } if (deleteBtn) { deleteBtn.hidden = true; }
    updateEditorMoveButtons();
    var published = document.getElementById('projectPublished'); if (published) { published.checked = true; }
    var order = document.getElementById('projectSortOrder'); if (order) { order.value = String(adminProjects.length + 1); }
    renderContributionEditors('zh', []); renderContributionEditors('en', []); addContributionEditor('zh'); addContributionEditor('en'); renderEditorImages();
    if (focusTitle) { var title = document.getElementById('projectTitleZh'); if (title) { title.focus(); } }
  }
  function selectEditorProject(id) {
    var project = null;
    for (var i = 0; i < adminProjects.length; i++) { if (String(adminProjects[i].id) === String(id)) { project = adminProjects[i]; break; } }
    if (!project) { return; }
    editorProjectId = project.id; editorImages = projectImages(project).map(cloneProjectImage);
    var fields = document.getElementById('projectEditorFields'); var empty = document.getElementById('projectEditorEmpty'); var deleteBtn = document.getElementById('projectDelete');
    if (empty) { empty.hidden = true; } if (fields) { fields.hidden = false; } if (deleteBtn) { deleteBtn.hidden = false; }
    updateEditorMoveButtons();
    document.getElementById('projectTitleZh').value = project.title_zh || ''; document.getElementById('projectKickerZh').value = project.kicker_zh || '';
    document.getElementById('projectSummaryZh').value = project.summary_zh || ''; document.getElementById('projectReflectionZh').value = project.reflection_zh || '';
    document.getElementById('projectTitleEn').value = project.title_en || ''; document.getElementById('projectKickerEn').value = project.kicker_en || '';
    document.getElementById('projectSummaryEn').value = project.summary_en || ''; document.getElementById('projectReflectionEn').value = project.reflection_en || '';
    document.getElementById('projectTags').value = Array.isArray(project.tags) ? project.tags.join(', ') : '';
    document.getElementById('projectPublished').checked = !!project.is_published; document.getElementById('projectSortOrder').value = String(Number(project.sort_order) || 0);
    renderContributionEditors('zh', project.highlights_zh || []); renderContributionEditors('en', project.highlights_en || []); renderEditorImages(); renderProjectEditorList();
  }
  function updateEditorMoveButtons() {
    var up = document.getElementById('projectMoveUp');
    var down = document.getElementById('projectMoveDown');
    if (!up || !down) { return; }
    if (!editorProjectId) {
      up.hidden = true; down.hidden = true;
      return;
    }
    var index = -1;
    for (var i = 0; i < adminProjects.length; i++) { if (String(adminProjects[i].id) === String(editorProjectId)) { index = i; break; } }
    up.hidden = false; down.hidden = false;
    up.disabled = index <= 0;
    down.disabled = index < 0 || index >= adminProjects.length - 1;
  }  function parseProjectTags(value) {
    var seen = {}; var tags = String(value || '').replace(/，/g, ',').replace(/；/g, ';').split(/[,;]+/); var result = [];
    for (var i = 0; i < tags.length; i++) { var tag = tags[i].trim(); if (tag && !seen[tag] && result.length < 8) { seen[tag] = true; result.push(tag); } }
    return result;
  }
  function saveEditorProject() {
    readEditorImages(); var titleZh = document.getElementById('projectTitleZh').value.trim();
    if (!titleZh) { showToast(t('projectTitleRequired'), 'error'); document.getElementById('projectTitleZh').focus(); return Promise.resolve(); }
    var payload = {
      title_zh: titleZh, title_en: document.getElementById('projectTitleEn').value.trim(), kicker_zh: document.getElementById('projectKickerZh').value.trim(), kicker_en: document.getElementById('projectKickerEn').value.trim(),
      summary_zh: document.getElementById('projectSummaryZh').value.trim(), summary_en: document.getElementById('projectSummaryEn').value.trim(),
      highlights_zh: readContributionEditors('zh'), highlights_en: readContributionEditors('en'),
      reflection_zh: document.getElementById('projectReflectionZh').value.trim(), reflection_en: document.getElementById('projectReflectionEn').value.trim(),
      tags: parseProjectTags(document.getElementById('projectTags').value), is_published: document.getElementById('projectPublished').checked, sort_order: parseInt(document.getElementById('projectSortOrder').value, 10) || 0
    };
    var saveBtn = document.getElementById('projectSave'); if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = t('feedbackSending'); }
    var request = editorProjectId ? apiFetch('projects?id=eq.' + encodeURIComponent(editorProjectId), { method: 'PATCH', prefer: 'return=representation', body: payload }) : apiFetch('projects', { method: 'POST', prefer: 'return=representation', body: payload });
    return request.then(function (saved) {
      var row = Array.isArray(saved) ? saved[0] : saved; if (!editorProjectId && row && row.id) { editorProjectId = row.id; }
      return persistEditorImages();
    }).then(function () { return loadAdminProjects(editorProjectId); }).then(function () { showToast(t('projectSaved'), 'success'); return loadPublicProjects(); }).catch(function () {
      showToast(t('projectSaveError'), 'error');
    }).then(function () { if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = t('projectSave'); } renderEditorImages(); });
  }
  function deleteEditorProject() {
    if (!editorProjectId || !window.confirm(t('projectDeleteConfirm'))) { return; }
    var images = editorImages.slice(); var id = editorProjectId;
    apiFetch('projects?id=eq.' + encodeURIComponent(id), { method: 'DELETE', prefer: 'return=minimal' }).then(function () {
      var jobs = [];
      for (var i = 0; i < images.length; i++) { if (images[i].storage_path) { jobs.push(deleteStorageFile(images[i].storage_path).catch(function () {})); } }
      return Promise.all(jobs);
    }).then(function () { editorProjectId = null; editorImages = []; showToast(t('projectDeleted'), 'success'); return loadAdminProjects(); }).then(function () { return loadPublicProjects(); }).catch(function () { showToast(t('projectSaveError'), 'error'); });
  }
  function moveEditorProject(id, direction) {
    if (!adminProjects.length) { return; }
    var index = -1; for (var i = 0; i < adminProjects.length; i++) { if (String(adminProjects[i].id) === String(id)) { index = i; break; } }
    var target = index + direction; if (index < 0 || target < 0 || target >= adminProjects.length) { return; }
    var moved = adminProjects.slice(); var item = moved.splice(index, 1)[0]; moved.splice(target, 0, item); var jobs = [];
    for (var j = 0; j < moved.length; j++) { jobs.push(apiFetch('projects?id=eq.' + encodeURIComponent(moved[j].id), { method: 'PATCH', prefer: 'return=minimal', body: { sort_order: j + 1 } })); }
    Promise.all(jobs).then(function () { return loadAdminProjects(id); }).then(function () { return loadPublicProjects(); }).catch(function () { showToast(t('projectSaveError'), 'error'); });
  }
  function deleteEditorImage(index) {
    var image = editorImages[index]; if (!image || !window.confirm(t('projectDeleteImageConfirm'))) { return; }
    apiFetch('project_images?id=eq.' + encodeURIComponent(image.id), { method: 'DELETE', prefer: 'return=minimal' }).then(function () {
      var wasCover = !!image.is_cover; editorImages.splice(index, 1); if (wasCover && editorImages[0]) { editorImages[0].is_cover = true; }
      for (var i = 0; i < editorImages.length; i++) { editorImages[i].sort_order = i + 1; }
      return persistEditorImages();
    }).then(function () { return deleteStorageFile(image.storage_path).catch(function () {}); }).then(function () {
      showToast(t('projectImageDeleted'), 'success'); return loadAdminProjects(editorProjectId);
    }).then(function () { return loadPublicProjects(); }).catch(function () { showToast(t('projectUploadError'), 'error'); });
  }
  function setEditorCover(index) {
    if (!editorImages[index]) { return; }
    for (var i = 0; i < editorImages.length; i++) { editorImages[i].is_cover = i === index; }
    renderEditorImages(); persistEditorImages().then(function () { showToast(t('projectCoverSet'), 'success'); return loadPublicProjects(); }).catch(function () { showToast(t('projectSaveError'), 'error'); });
  }
  function moveEditorImage(index, direction) {
    var target = index + direction; if (!editorImages[index] || !editorImages[target]) { return; }
    var item = editorImages.splice(index, 1)[0]; editorImages.splice(target, 0, item);
    for (var i = 0; i < editorImages.length; i++) { editorImages[i].sort_order = i + 1; }
    renderEditorImages(); persistEditorImages().then(function () { showToast(t('projectImageSaved'), 'success'); return loadPublicProjects(); }).catch(function () { showToast(t('projectSaveError'), 'error'); });
  }
  function compressProjectImage(file) {
    return new Promise(function (resolve, reject) {
      var source = URL.createObjectURL(file); var image = new Image();
      image.onload = function () {
        var maxEdge = 1600; var scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
        var canvas = document.createElement('canvas'); canvas.width = Math.max(1, Math.round(image.naturalWidth * scale)); canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height); URL.revokeObjectURL(source);
        canvas.toBlob(function (blob) { if (blob) { resolve(blob); } else { reject(new Error('compress')); } }, 'image/webp', 0.82);
      };
      image.onerror = function () { URL.revokeObjectURL(source); reject(new Error('image')); }; image.src = source;
    });
  }
  function uploadProjectImage(file) {
    var path = String(editorProjectId) + '/' + randomStorageId() + '.webp'; var uploaded = false;
    return compressProjectImage(file).then(function (blob) {
      return fetch(storageObjectUrl(path), { method: 'POST', headers: storageAuthHeaders('image/webp'), body: blob }).then(function (res) {
        if (!res.ok) { return res.text().then(function (txt) { throw new Error('upload ' + res.status + ' ' + txt); }); }
        uploaded = true; return blob;
      });
    }).then(function () {
      return apiFetch('project_images', { method: 'POST', prefer: 'return=representation', body: { project_id: editorProjectId, storage_path: path, alt_zh: file.name.replace(/\.[^.]+$/, ''), alt_en: file.name.replace(/\.[^.]+$/, ''), sort_order: editorImages.length + 1, is_cover: editorImages.length === 0 } });
    }).then(function (row) {
      var saved = Array.isArray(row) ? row[0] : row; if (!saved) { throw new Error('database'); } return saved;
    }).catch(function (error) {
      if (!uploaded) { throw error; } return deleteStorageFile(path).catch(function () {}).then(function () { throw error; });
    });
  }
  function handleSelectedProjectImages(files) {
    if (!editorProjectId) { showToast(t('projectNeedSave'), 'error'); return; }
    var selected = Array.prototype.slice.call(files || []); if (!selected.length || editorUploading) { return; }
    var slots = 6 - editorImages.length; if (slots <= 0) { showToast(t('projectImageLimit'), 'error'); return; }
    if (selected.length > slots) { selected = selected.slice(0, slots); showToast(t('projectImageLimit'), 'error'); }
    for (var i = 0; i < selected.length; i++) {
      if (['image/jpeg', 'image/png', 'image/webp'].indexOf(selected[i].type) < 0) { showToast(t('projectFileType'), 'error'); return; }
      if (selected[i].size > 8 * 1024 * 1024) { showToast(t('projectFileTooLarge'), 'error'); return; }
    }
    editorUploading = true; renderEditorImages(); showToast(t('projectUploading'), 'success');
    var next = function (index) {
      if (index >= selected.length) { return Promise.resolve(); }
      return uploadProjectImage(selected[index]).then(function (row) { editorImages.push(cloneProjectImage(row)); renderEditorImages(); return next(index + 1); });
    };
    next(0).then(function () { editorUploading = false; renderEditorImages(); showToast(t('projectUploaded'), 'success'); return loadAdminProjects(editorProjectId); }).then(function () { return loadPublicProjects(); }).catch(function () { editorUploading = false; renderEditorImages(); showToast(t('projectUploadError'), 'error'); });
  }
  function openProjectEditor() {
    if (!adminToken) { return; }
    var modal = document.getElementById('projectEditorModal'); if (!modal) { return; }
    editorReturnFocus = document.activeElement; modal.removeAttribute('hidden'); syncModalLock(); loadAdminProjects(editorProjectId).catch(function () { showToast(t('projectEditorError'), 'error'); });
  }
  function closeProjectEditor() {
    var modal = document.getElementById('projectEditorModal'); if (!modal || modal.hasAttribute('hidden')) { return; }
    modal.setAttribute('hidden', ''); editorProjectId = null; editorImages = []; syncModalLock();
    if (editorReturnFocus && editorReturnFocus.focus) { editorReturnFocus.focus(); }
  }
  function initProjectEditor() {
    var modal = document.getElementById('projectEditorModal'); var open = document.getElementById('projectManage'); if (!modal || !open) { return; }
    open.addEventListener('click', openProjectEditor);
    var close = document.getElementById('projectEditorClose'); if (close) { close.addEventListener('click', closeProjectEditor); }
    modal.addEventListener('click', function (e) { if (e.target && e.target.getAttribute && e.target.getAttribute('data-project-editor-close')) { closeProjectEditor(); } });
    var newBtn = document.getElementById('projectNew'); if (newBtn) { newBtn.addEventListener('click', function () { startNewEditorProject(true); renderProjectEditorList(); }); }
    var list = document.getElementById('projectEditorList');
    if (list) { list.addEventListener('click', function (e) { var btn = e.target.closest ? e.target.closest('[data-edit-project]') : null; if (btn) { selectEditorProject(btn.getAttribute('data-edit-project')); } }); }
    var form = document.getElementById('projectEditorForm');
    if (form) {
      form.addEventListener('submit', function (e) { e.preventDefault(); saveEditorProject(); });
      form.addEventListener('click', function (e) {
        var add = e.target.closest ? e.target.closest('[data-add-contrib]') : null; if (add) { addContributionEditor(add.getAttribute('data-add-contrib')); return; }
        var remove = e.target.closest ? e.target.closest('[data-remove-contrib]') : null; if (remove && remove.parentNode) { remove.parentNode.remove(); }
      });
    }
    var imagesList = document.getElementById('projectImagesList');
    if (imagesList) {
      imagesList.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('[data-image-action]') : null; if (!btn) { return; }
        var index = parseInt(btn.getAttribute('data-image-index'), 10); var action = btn.getAttribute('data-image-action');
        if (action === 'up') { moveEditorImage(index, -1); } else if (action === 'down') { moveEditorImage(index, 1); } else if (action === 'cover') { setEditorCover(index); } else if (action === 'delete') { deleteEditorImage(index); }
      });
    }
    var imageInput = document.getElementById('projectImageInput'); var imageLabel = document.getElementById('projectAddImageLabel');
    if (imageInput) { imageInput.addEventListener('change', function () { handleSelectedProjectImages(imageInput.files); imageInput.value = ''; }); }
    if (imageLabel) { imageLabel.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (editorProjectId && imageInput && !editorUploading) { imageInput.click(); } } }); }
    var deleteBtn = document.getElementById('projectDelete'); if (deleteBtn) { deleteBtn.addEventListener('click', deleteEditorProject); }
    var moveUp = document.getElementById('projectMoveUp'); if (moveUp) { moveUp.addEventListener('click', function () { moveEditorProject(editorProjectId, -1); }); }
    var moveDown = document.getElementById('projectMoveDown'); if (moveDown) { moveDown.addEventListener('click', function () { moveEditorProject(editorProjectId, 1); }); }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) { closeProjectEditor(); return; }
      if (!modal.hasAttribute('hidden')) { trapFocus(modal.querySelector('.project-editor-dialog'), e); }
    });
    renderEditorImages();
  }
  function initProjects() {
    initProjectDetail();
    return loadPublicProjects();
  }
  function hobbyField(hobby, base) {
    var preferred = hobby[base + '_' + current];
    var fallback = hobby[base + '_' + (current === 'zh' ? 'en' : 'zh')];
    return preferred || fallback || '';
  }
  function hobbyMediaItems(hobby) {
    var list = hobby && Array.isArray(hobby.hobby_media) ? hobby.hobby_media.slice() : [];
    list.sort(function (a, b) { return (Number(a && a.sort_order) || 0) - (Number(b && b.sort_order) || 0); });
    return list;
  }
  function hobbyMediaUrl(path) {
    var raw = String(path || '').trim();
    if (!raw) { return ''; }
    if (/^https?:\/\//i.test(raw)) { return raw; }
    var safePath = raw.replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/');
    return SUPABASE_URL + '/storage/v1/object/public/hobby-media/' + safePath;
  }
  function hobbyMediaAlt(media, hobby) {
    var fallback = hobbyField(hobby, 'title') || t('hobbyUntitled');
    if (!media) { return fallback; }
    return media['alt_' + current] || media['alt_' + (current === 'zh' ? 'en' : 'zh')] || fallback;
  }
  function loadPublicHobbies() {
    var list = document.getElementById('hobbyList');
    if (!list) { return Promise.resolve(); }
    return apiFetch('hobbies?select=*,hobby_media(*)&is_published=eq.true&order=sort_order.asc').then(function (rows) {
      publicHobbies = Array.isArray(rows) ? rows : [];
      hobbiesReady = true;
      renderHobbyTags();
    }).catch(function () {
      publicHobbies = FALLBACK_HOBBIES.slice();
      hobbiesReady = true;
      renderHobbyTags();
      var retry = document.createElement('button');
      retry.type = 'button'; retry.className = 'project-retry'; retry.textContent = t('hobbyRetry');
      retry.addEventListener('click', function () { loadPublicHobbies(); });
      var item = document.createElement('li'); item.className = 'hobby-retry-item'; item.appendChild(retry);
      list.appendChild(item);
    });
  }
  function renderHobbyTags() {
    var list = document.getElementById('hobbyList');
    if (!list || !hobbiesReady) { return; }
    if (!publicHobbies.length) {
      list.innerHTML = '<li class="hobby-empty-item">' + escapeHtml(t('hobbyEmpty')) + '</li>';
      return;
    }
    var html = '';
    for (var i = 0; i < publicHobbies.length; i++) {
      var hobby = publicHobbies[i];
      if (!hobby || !hobby.is_published) { continue; }
      var id = String(hobby.id || '');
      var title = hobbyField(hobby, 'title') || t('hobbyUntitled');
      html += '<li><button class="hobby-tag" type="button" data-hobby-id="' + escapeAttr(id) + '">' + escapeHtml(title) + '</button></li>';
    }
    list.innerHTML = html || '<li class="hobby-empty-item">' + escapeHtml(t('hobbyEmpty')) + '</li>';
  }
  function getPublicHobby(id) {
    for (var i = 0; i < publicHobbies.length; i++) {
      if (String(publicHobbies[i].id) === String(id)) { return publicHobbies[i]; }
    }
    return null;
  }
  function renderHobbyDetail(hobby) {
    if (!hobby) { return; }
    detailHobby = hobby;
    var title = hobbyField(hobby, 'title') || t('hobbyUntitled');
    var contentHtml = sanitizeRichHtml(hobbyField(hobby, 'content'));
    var media = hobbyMediaItems(hobby);
    var mediaHtml = '';
    for (var i = 0; i < media.length; i++) {
      var item = media[i] || {};
      var src = hobbyMediaUrl(item.storage_path);
      if (!src) { continue; }
      var alt = hobbyMediaAlt(item, hobby);
      if (item.media_type === 'video') {
        mediaHtml += '<li class="hobby-media-item hobby-media-video"><video controls playsinline preload="metadata" src="' + escapeAttr(src) + '" aria-label="' + escapeAttr(alt) + '"></video></li>';
      } else {
        mediaHtml += '<li class="hobby-media-item"><button class="hobby-media-image" type="button" data-hobby-lightbox-src="' + escapeAttr(src) + '" data-hobby-lightbox-alt="' + escapeAttr(alt) + '">' +
          '<img class="js-project-image" src="' + escapeAttr(src) + '" alt="' + escapeAttr(alt) + '" loading="lazy" /></button></li>';
      }
    }
    var content = document.getElementById('hobbyDetailContent');
    if (!content) { return; }
    content.innerHTML =
      '<div class="hobby-detail-head"><p class="project-kicker">' + escapeHtml(t('interestLabel')) + '</p><h2 id="hobbyDetailTitle">' + escapeHtml(title) + '</h2></div>' +
      '<section class="hobby-media-section"><h3 class="hobby-section-title">' + escapeHtml(t('hobbyDetailMedia')) + '</h3>' +
        (mediaHtml ? '<ul class="hobby-media-grid">' + mediaHtml + '</ul>' : '<p class="hobby-media-empty">' + escapeHtml(t('hobbyNoMedia')) + '</p>') +
      '</section>' +
      '<section class="hobby-text-section"><h3 class="hobby-section-title">' + escapeHtml(t('hobbyDetailText')) + '</h3>' +
        (contentHtml ? '<div class="hobby-rich-content">' + contentHtml + '</div>' : '<p class="hobby-content-empty">' + escapeHtml(t('hobbyContentEmpty')) + '</p>') +
      '</section>';
    bindProjectImages(content);
    bindHobbyVideos(content);
  }
  function bindHobbyVideos(root) {
    if (!root) { return; }
    var videos = root.querySelectorAll('video');
    for (var i = 0; i < videos.length; i++) {
      (function (video) {
        video.addEventListener('play', function () {
          for (var j = 0; j < videos.length; j++) {
            if (videos[j] !== video && !videos[j].paused) { videos[j].pause(); }
          }
        });
      })(videos[i]);
    }
  }
  function openHobbyDetail(id, trigger) {
    var hobby = getPublicHobby(id);
    var modal = document.getElementById('hobbyDetailModal');
    if (!hobby || !modal) { return; }
    detailHobbyReturnFocus = trigger || document.activeElement;
    renderHobbyDetail(hobby);
    modal.removeAttribute('hidden');
    syncModalLock();
    var close = document.getElementById('hobbyDetailClose');
    if (close) { close.focus(); }
  }
  function closeHobbyDetail() {
    var modal = document.getElementById('hobbyDetailModal');
    if (!modal || modal.hasAttribute('hidden')) { return; }
    var videos = modal.querySelectorAll('video');
    for (var i = 0; i < videos.length; i++) { videos[i].pause(); }
    modal.setAttribute('hidden', '');
    detailHobby = null;
    syncModalLock();
    if (detailHobbyReturnFocus && detailHobbyReturnFocus.focus) { detailHobbyReturnFocus.focus(); }
    detailHobbyReturnFocus = null;
  }
  function initHobbies() {
    var list = document.getElementById('hobbyList');
    var modal = document.getElementById('hobbyDetailModal');
    var close = document.getElementById('hobbyDetailClose');
    if (list) {
      list.addEventListener('click', function (e) {
        var trigger = e.target.closest ? e.target.closest('[data-hobby-id]') : null;
        if (trigger) { openHobbyDetail(trigger.getAttribute('data-hobby-id'), trigger); }
      });
    }
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target && e.target.getAttribute && e.target.getAttribute('data-hobby-detail-close')) { closeHobbyDetail(); }
        var image = e.target.closest ? e.target.closest('[data-hobby-lightbox-src]') : null;
        if (image) { openImageLightbox(image.getAttribute('data-hobby-lightbox-src'), image.getAttribute('data-hobby-lightbox-alt'), image); }
      });
    }
    if (close) { close.addEventListener('click', closeHobbyDetail); }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) { closeHobbyDetail(); return; }
      if (modal && !modal.hasAttribute('hidden')) { trapFocus(modal.querySelector('.hobby-detail-dialog'), e); }
    });
    return loadPublicHobbies();
  }
  function sanitizeRichHtml(html) {
    var value = String(html == null ? '' : html);
    if (!value) { return ''; }
    var template = document.createElement('template');
    template.innerHTML = value;
    var allowed = { P: true, DIV: true, BR: true, STRONG: true, B: true, EM: true, I: true, UL: true, OL: true, LI: true, A: true };
    var cleanNode = function (node) {
      if (node.nodeType === 3) { return document.createTextNode(node.nodeValue || ''); }
      if (node.nodeType !== 1) { return document.createDocumentFragment(); }
      var tag = node.tagName.toUpperCase();
      if (!allowed[tag]) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < node.childNodes.length; i++) { fragment.appendChild(cleanNode(node.childNodes[i])); }
        return fragment;
      }
      var output = document.createElement(tag.toLowerCase());
      if (tag === 'A') {
        var href = String(node.getAttribute('href') || '').trim();
        if (/^(https?:\/\/|mailto:)/i.test(href)) {
          output.setAttribute('href', href);
          if (/^https?:\/\//i.test(href)) {
            output.setAttribute('target', '_blank');
            output.setAttribute('rel', 'noopener noreferrer');
          }
        }
      }
      for (var j = 0; j < node.childNodes.length; j++) { output.appendChild(cleanNode(node.childNodes[j])); }
      return output;
    };
    var holder = document.createElement('div');
    for (var k = 0; k < template.content.childNodes.length; k++) { holder.appendChild(cleanNode(template.content.childNodes[k])); }
    return holder.innerHTML.trim();
  }
  function setRichEditor(id, html) {
    var editor = document.getElementById(id);
    if (editor) { editor.innerHTML = sanitizeRichHtml(html); }
  }
  function readRichEditor(id) {
    var editor = document.getElementById(id);
    if (!editor) { return ''; }
    var html = sanitizeRichHtml(editor.innerHTML);
    var probe = document.createElement('div'); probe.innerHTML = html;
    if (!String(probe.textContent || '').trim() && !probe.querySelector('li,br')) { return ''; }
    return html;
  }
  function runRichCommand(command, value) {
    if (!command) { return; }
    try { document.execCommand(command, false, value || null); } catch (e) {}
  }
  function initRichTextEditor() {
    var modal = document.getElementById('hobbyEditorModal');
    if (!modal || modal.getAttribute('data-rich-bound') === '1') { return; }
    modal.setAttribute('data-rich-bound', '1');
    modal.addEventListener('mousedown', function (e) {
      var button = e.target.closest ? e.target.closest('.rich-toolbar button') : null;
      if (button) { e.preventDefault(); }
    });
    modal.addEventListener('click', function (e) {
      var button = e.target.closest ? e.target.closest('.rich-toolbar button') : null;
      if (!button) { return; }
      var command = button.getAttribute('data-rich-command');
      var value = button.getAttribute('data-rich-value') || '';
      if (command === 'createLink') {
        var entered = window.prompt(t('hobbyLinkPrompt'), 'https://');
        if (!entered) { return; }
        entered = entered.trim();
        if (!/^(https?:\/\/|mailto:)/i.test(entered)) { entered = 'https://' + entered; }
        value = entered;
      }
      runRichCommand(command, value);
    });
    modal.addEventListener('paste', function (e) {
      var area = e.target.closest ? e.target.closest('.rich-editor-area') : null;
      if (!area) { return; }
      e.preventDefault();
      var text = e.clipboardData ? e.clipboardData.getData('text/plain') : '';
      if (text) { runRichCommand('insertText', text); }
    });
  }
  function cloneHobbyMedia(media) {
    return {
      id: media.id, hobby_id: media.hobby_id, media_type: media.media_type === 'video' ? 'video' : 'image',
      storage_path: media.storage_path || '', alt_zh: media.alt_zh || '', alt_en: media.alt_en || '',
      sort_order: Number(media.sort_order) || 0, created_at: media.created_at || ''
    };
  }
  function hobbyEditorHobby() {
    for (var i = 0; i < adminHobbies.length; i++) {
      if (String(adminHobbies[i].id) === String(editorHobbyId)) { return adminHobbies[i]; }
    }
    return null;
  }
  function loadAdminHobbies(preferredId) {
    return apiFetch('hobbies?select=*,hobby_media(*)&order=sort_order.asc,created_at.asc').then(function (rows) {
      adminHobbies = Array.isArray(rows) ? rows : [];
      renderHobbyEditorList();
      var wanted = preferredId || editorHobbyId || (adminHobbies[0] && adminHobbies[0].id);
      if (wanted) { selectEditorHobby(wanted); }
      else { startNewEditorHobby(false); }
      return adminHobbies;
    });
  }
  function renderHobbyEditorList() {
    var list = document.getElementById('hobbyEditorList');
    if (!list) { return; }
    list.innerHTML = '';
    if (!adminHobbies.length) {
      var empty = document.createElement('li'); empty.className = 'project-editor-list-empty';
      empty.textContent = t('hobbyNoHobbies'); list.appendChild(empty); return;
    }
    for (var i = 0; i < adminHobbies.length; i++) {
      var hobby = adminHobbies[i]; var li = document.createElement('li'); var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'project-editor-list-item'; btn.setAttribute('data-edit-hobby', String(hobby.id));
      if (String(hobby.id) === String(editorHobbyId)) { btn.classList.add('is-active'); }
      var title = document.createElement('strong'); title.textContent = hobbyField(hobby, 'title') || t('hobbyUntitled');
      var state = document.createElement('small'); state.textContent = hobby.is_published ? t('hobbyPublished') : t('hobbyDraft');
      btn.appendChild(title); btn.appendChild(state); li.appendChild(btn); list.appendChild(li);
    }
  }
  function setHobbyEditorForm(hobby) {
    var empty = document.getElementById('hobbyEditorEmpty'); var fields = document.getElementById('hobbyEditorFields');
    if (empty) { empty.hidden = true; }
    if (fields) { fields.hidden = false; }
    document.getElementById('hobbyPublished').checked = hobby ? hobby.is_published !== false : true;
    document.getElementById('hobbySortOrder').value = hobby ? (Number(hobby.sort_order) || 0) : adminHobbies.length + 1;
    document.getElementById('hobbyTitleZh').value = hobby ? (hobby.title_zh || '') : '';
    document.getElementById('hobbyTitleEn').value = hobby ? (hobby.title_en || '') : '';
    setRichEditor('hobbyContentZh', hobby ? (hobby.content_zh || '') : '');
    setRichEditor('hobbyContentEn', hobby ? (hobby.content_en || '') : '');
    updateHobbyEditorMoveButtons();
  }
  function startNewEditorHobby(focusTitle) {
    editorHobbyId = null; editorHobbyMedia = [];
    setHobbyEditorForm(null); renderHobbyEditorList(); renderHobbyMediaEditor();
    if (focusTitle) { var input = document.getElementById('hobbyTitleZh'); if (input) { input.focus(); } }
  }
  function selectEditorHobby(id) {
    var hobby = null;
    for (var i = 0; i < adminHobbies.length; i++) { if (String(adminHobbies[i].id) === String(id)) { hobby = adminHobbies[i]; break; } }
    if (!hobby) { return; }
    editorHobbyId = hobby.id;
    editorHobbyMedia = [];
    var media = hobbyMediaItems(hobby);
    for (var j = 0; j < media.length; j++) { editorHobbyMedia.push(cloneHobbyMedia(media[j])); }
    setHobbyEditorForm(hobby); renderHobbyEditorList(); renderHobbyMediaEditor();
  }
  function updateHobbyEditorMoveButtons() {
    var index = -1;
    for (var i = 0; i < adminHobbies.length; i++) { if (String(adminHobbies[i].id) === String(editorHobbyId)) { index = i; break; } }
    var up = document.getElementById('hobbyMoveUp'); var down = document.getElementById('hobbyMoveDown');
    if (up) { up.disabled = index <= 0; }
    if (down) { down.disabled = index < 0 || index >= adminHobbies.length - 1; }
  }
  function saveEditorHobby() {
    if (!adminToken || !editorHobbyId && document.getElementById('hobbyEditorFields').hidden) { return Promise.resolve(); }
    var titleZh = document.getElementById('hobbyTitleZh').value.trim();
    if (!titleZh) { showToast(t('hobbyTitleRequired'), 'error'); document.getElementById('hobbyTitleZh').focus(); return Promise.resolve(); }
    var payload = {
      title_zh: titleZh,
      title_en: document.getElementById('hobbyTitleEn').value.trim(),
      content_zh: readRichEditor('hobbyContentZh'),
      content_en: readRichEditor('hobbyContentEn'),
      is_published: document.getElementById('hobbyPublished').checked,
      sort_order: parseInt(document.getElementById('hobbySortOrder').value, 10) || 0
    };
    var saveBtn = document.getElementById('hobbySave');
    if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = t('feedbackSending'); }
    var request = editorHobbyId
      ? apiFetch('hobbies?id=eq.' + encodeURIComponent(editorHobbyId), { method: 'PATCH', prefer: 'return=representation', body: payload })
      : apiFetch('hobbies', { method: 'POST', prefer: 'return=representation', body: payload });
    return request.then(function (saved) {
      var row = Array.isArray(saved) ? saved[0] : saved;
      if (!editorHobbyId && row && row.id) { editorHobbyId = row.id; }
      return persistHobbyMediaOrder();
    }).then(function () { return loadAdminHobbies(editorHobbyId); }).then(function () {
      showToast(t('hobbySaved'), 'success'); return loadPublicHobbies();
    }).catch(function () {
      showToast(t('hobbySaveError'), 'error');
    }).then(function () {
      if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = t('hobbySave'); }
      renderHobbyMediaEditor();
    });
  }
  function deleteEditorHobby() {
    if (!editorHobbyId || !window.confirm(t('hobbyDeleteConfirm'))) { return; }
    var media = editorHobbyMedia.slice(); var id = editorHobbyId;
    apiFetch('hobbies?id=eq.' + encodeURIComponent(id), { method: 'DELETE', prefer: 'return=minimal' }).then(function () {
      var jobs = [];
      for (var i = 0; i < media.length; i++) {
        if (media[i].storage_path) { jobs.push(deleteHobbyStorageFile(media[i].storage_path).catch(function () {})); }
      }
      return Promise.all(jobs);
    }).then(function () {
      editorHobbyId = null; editorHobbyMedia = [];
      showToast(t('hobbyDeleted'), 'success'); return loadAdminHobbies();
    }).then(function () { return loadPublicHobbies(); }).catch(function () { showToast(t('hobbySaveError'), 'error'); });
  }
  function moveEditorHobby(id, direction) {
    if (!adminHobbies.length) { return; }
    var index = -1;
    for (var i = 0; i < adminHobbies.length; i++) { if (String(adminHobbies[i].id) === String(id)) { index = i; break; } }
    var target = index + direction;
    if (index < 0 || target < 0 || target >= adminHobbies.length) { return; }
    var moved = adminHobbies.slice(); var item = moved.splice(index, 1)[0]; moved.splice(target, 0, item); var jobs = [];
    for (var j = 0; j < moved.length; j++) {
      jobs.push(apiFetch('hobbies?id=eq.' + encodeURIComponent(moved[j].id), { method: 'PATCH', prefer: 'return=minimal', body: { sort_order: j + 1 } }));
    }
    Promise.all(jobs).then(function () { return loadAdminHobbies(id); }).then(function () { return loadPublicHobbies(); }).catch(function () { showToast(t('hobbySaveError'), 'error'); });
  }
  function openHobbyEditor() {
    if (!adminToken) { return; }
    var modal = document.getElementById('hobbyEditorModal');
    if (!modal) { return; }
    hobbyEditorReturnFocus = document.activeElement;
    modal.removeAttribute('hidden'); syncModalLock();
    loadAdminHobbies(editorHobbyId).catch(function () { showToast(t('hobbyEditorError'), 'error'); });
  }
  function closeHobbyEditor() {
    var modal = document.getElementById('hobbyEditorModal');
    if (!modal || modal.hasAttribute('hidden')) { return; }
    modal.setAttribute('hidden', ''); editorHobbyId = null; editorHobbyMedia = []; syncModalLock();
    if (hobbyEditorReturnFocus && hobbyEditorReturnFocus.focus) { hobbyEditorReturnFocus.focus(); }
    hobbyEditorReturnFocus = null;
  }
  function renderHobbyMediaEditor() {
    var root = document.getElementById('hobbyMediaList');
    var imageLabel = document.getElementById('hobbyAddImageLabel');
    var videoLabel = document.getElementById('hobbyAddVideoLabel');
    var disabled = !editorHobbyId || editorHobbyUploading;
    if (imageLabel) { imageLabel.classList.toggle('is-disabled', disabled); imageLabel.setAttribute('aria-disabled', disabled ? 'true' : 'false'); }
    if (videoLabel) { videoLabel.classList.toggle('is-disabled', disabled); videoLabel.setAttribute('aria-disabled', disabled ? 'true' : 'false'); }
    if (!root) { return; }
    root.innerHTML = '';
    if (!editorHobbyMedia.length) {
      var empty = document.createElement('p'); empty.className = 'project-images-empty'; empty.textContent = t('hobbyNoMedia'); root.appendChild(empty); return;
    }
    for (var i = 0; i < editorHobbyMedia.length; i++) {
      var media = editorHobbyMedia[i]; var src = hobbyMediaUrl(media.storage_path);
      var row = document.createElement('div'); row.className = 'project-image-row hobby-media-row'; row.setAttribute('data-media-id', String(media.id || ''));
      var thumb = document.createElement('div'); thumb.className = 'hobby-media-thumb';
      if (media.media_type === 'video') {
        var video = document.createElement('video'); video.src = src; video.muted = true; video.playsInline = true; video.preload = 'metadata'; thumb.appendChild(video);
      } else {
        var img = document.createElement('img'); img.src = src; img.alt = hobbyMediaAlt(media, hobbyEditorHobby() || { title_zh: '', title_en: '' }); thumb.appendChild(img);
      }
      var fields = document.createElement('div'); fields.className = 'project-image-fields';
      var meta = document.createElement('div'); meta.className = 'hobby-media-meta';
      var type = document.createElement('span'); type.className = 'hobby-media-type'; type.textContent = media.media_type === 'video' ? t('hobbyVideoTypeLabel') : t('hobbyImageTypeLabel');
      var name = document.createElement('span'); name.className = 'hobby-media-name'; name.textContent = String(media.storage_path || '').split('/').pop() || '';
      meta.appendChild(type); meta.appendChild(name);
      var actions = document.createElement('div'); actions.className = 'project-image-actions';
      var up = document.createElement('button'); up.type = 'button'; up.setAttribute('data-hobby-media-action', 'up'); up.setAttribute('data-media-index', String(i)); up.textContent = t('projectMoveUp'); up.disabled = i === 0;
      var down = document.createElement('button'); down.type = 'button'; down.setAttribute('data-hobby-media-action', 'down'); down.setAttribute('data-media-index', String(i)); down.textContent = t('projectMoveDown'); down.disabled = i === editorHobbyMedia.length - 1;
      var remove = document.createElement('button'); remove.type = 'button'; remove.className = 'is-danger'; remove.setAttribute('data-hobby-media-action', 'delete'); remove.setAttribute('data-media-index', String(i)); remove.textContent = t('projectDeleteImage');
      actions.appendChild(up); actions.appendChild(down); actions.appendChild(remove);
      fields.appendChild(meta); fields.appendChild(actions); row.appendChild(thumb); row.appendChild(fields); root.appendChild(row);
    }
  }
  function persistHobbyMediaOrder() {
    var jobs = [];
    for (var i = 0; i < editorHobbyMedia.length; i++) {
      var media = editorHobbyMedia[i];
      media.sort_order = i + 1;
      if (media.id) {
        jobs.push(apiFetch('hobby_media?id=eq.' + encodeURIComponent(media.id), { method: 'PATCH', prefer: 'return=minimal', body: { sort_order: media.sort_order } }));
      }
    }
    return Promise.all(jobs);
  }
  function deleteEditorHobbyMedia(index) {
    var media = editorHobbyMedia[index];
    if (!media || !window.confirm(t('hobbyDeleteMediaConfirm'))) { return; }
    apiFetch('hobby_media?id=eq.' + encodeURIComponent(media.id), { method: 'DELETE', prefer: 'return=minimal' }).then(function () {
      editorHobbyMedia.splice(index, 1); return persistHobbyMediaOrder();
    }).then(function () { return deleteHobbyStorageFile(media.storage_path).catch(function () {}); }).then(function () {
      showToast(t('hobbyMediaDeleted'), 'success'); renderHobbyMediaEditor(); return loadPublicHobbies();
    }).catch(function () { showToast(t('hobbyUploadError'), 'error'); });
  }
  function moveEditorHobbyMedia(index, direction) {
    var target = index + direction;
    if (!editorHobbyMedia[index] || !editorHobbyMedia[target]) { return; }
    var item = editorHobbyMedia.splice(index, 1)[0]; editorHobbyMedia.splice(target, 0, item);
    renderHobbyMediaEditor();
    persistHobbyMediaOrder().then(function () {
      showToast(t('hobbyMediaSaved'), 'success'); return loadPublicHobbies();
    }).catch(function () { showToast(t('hobbySaveError'), 'error'); });
  }
  function hobbyStorageObjectUrl(path) {
    return SUPABASE_URL + '/storage/v1/object/hobby-media/' + String(path || '').split('/').map(encodeURIComponent).join('/');
  }
  function deleteHobbyStorageFile(path) {
    if (!path || !adminToken) { return Promise.resolve(); }
    return fetch(hobbyStorageObjectUrl(path), { method: 'DELETE', headers: storageAuthHeaders() }).then(function (res) {
      if (!res.ok && res.status !== 404) { throw new Error('storage delete'); }
      return true;
    });
  }
  function uploadHobbyMediaWithProgress(path, blob, contentType, onProgress) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', hobbyStorageObjectUrl(path), true);
      var headers = storageAuthHeaders(contentType);
      for (var key in headers) { if (Object.prototype.hasOwnProperty.call(headers, key)) { xhr.setRequestHeader(key, headers[key]); } }
      xhr.upload.onprogress = function (event) {
        if (onProgress && event.lengthComputable) { onProgress(Math.round(event.loaded / event.total * 100)); }
      };
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) { resolve(true); return; }
        reject(new Error('upload ' + xhr.status + ' ' + xhr.responseText));
      };
      xhr.onerror = function () { reject(new Error('upload network')); };
      xhr.send(blob);
    });
  }
  function hobbyMediaKind(file) {
    var name = String(file && file.name || '').toLowerCase();
    if (/^(image\/jpeg|image\/png|image\/webp)$/.test(file && file.type || '') || /\.(jpe?g|png|webp)$/.test(name)) { return 'image'; }
    if (/^(video\/mp4|video\/webm)$/.test(file && file.type || '') || /\.(mp4|webm)$/.test(name)) { return 'video'; }
    return '';
  }
  function uploadHobbyMedia(file, mediaType, onProgress) {
    var isVideo = mediaType === 'video';
    var lowerName = String(file.name || '').toLowerCase();
    var extension = isVideo ? (/\.webm$/.test(lowerName) || file.type === 'video/webm' ? 'webm' : 'mp4') : 'webp';
    var contentType = isVideo ? (extension === 'webm' ? 'video/webm' : 'video/mp4') : 'image/webp';
    var path = String(editorHobbyId) + '/' + randomStorageId() + '.' + extension;
    var uploaded = false;
    var source = isVideo ? Promise.resolve(file) : compressProjectImage(file);
    return source.then(function (blob) {
      return uploadHobbyMediaWithProgress(path, blob, contentType, onProgress).then(function () { uploaded = true; return blob; });
    }).then(function () {
      var base = file.name.replace(/\.[^.]+$/, '');
      return apiFetch('hobby_media', {
        method: 'POST', prefer: 'return=representation',
        body: { hobby_id: editorHobbyId, media_type: mediaType, storage_path: path, alt_zh: base, alt_en: base, sort_order: editorHobbyMedia.length + 1 }
      });
    }).then(function (row) {
      var saved = Array.isArray(row) ? row[0] : row;
      if (!saved) { throw new Error('database'); }
      return saved;
    }).catch(function (error) {
      if (!uploaded) { throw error; }
      return deleteHobbyStorageFile(path).catch(function () {}).then(function () { throw error; });
    });
  }
  function setHobbyUploadProgress(current, total, percent) {
    var box = document.getElementById('hobbyUploadProgress');
    var status = document.getElementById('hobbyUploadStatus');
    var bar = document.getElementById('hobbyUploadBar');
    if (!box || !status || !bar) { return; }
    box.hidden = false;
    status.textContent = t('hobbyUploading') + ' ' + current + '/' + total + ' · ' + Math.max(0, Math.min(100, Math.round(percent))) + '%';
    bar.value = Math.max(0, Math.min(100, percent));
  }
  function hideHobbyUploadProgress() {
    var box = document.getElementById('hobbyUploadProgress');
    var bar = document.getElementById('hobbyUploadBar');
    if (box) { box.hidden = true; }
    if (bar) { bar.value = 0; }
  }
  function handleSelectedHobbyMedia(files, mediaType) {
    if (!editorHobbyId) { showToast(t('hobbyNeedSave'), 'error'); return; }
    var selected = Array.prototype.slice.call(files || []);
    if (!selected.length || editorHobbyUploading) { return; }
    var existing = 0;
    for (var e = 0; e < editorHobbyMedia.length; e++) { if (editorHobbyMedia[e].media_type === mediaType) { existing++; } }
    var limit = mediaType === 'video' ? 3 : 20;
    var slots = limit - existing;
    if (slots <= 0) { showToast(t(mediaType === 'video' ? 'hobbyVideoLimit' : 'hobbyImageLimit'), 'error'); return; }
    if (selected.length > slots) { selected = selected.slice(0, slots); showToast(t(mediaType === 'video' ? 'hobbyVideoLimit' : 'hobbyImageLimit'), 'error'); }
    for (var i = 0; i < selected.length; i++) {
      if (hobbyMediaKind(selected[i]) !== mediaType) { showToast(t(mediaType === 'video' ? 'hobbyVideoType' : 'hobbyImageType'), 'error'); return; }
      if (mediaType === 'image' && selected[i].size > 8 * 1024 * 1024) { showToast(t('hobbyImageTooLarge'), 'error'); return; }
      if (mediaType === 'video' && selected[i].size > 50 * 1024 * 1024) { showToast(t('hobbyVideoTooLarge'), 'error'); return; }
    }
    editorHobbyUploading = true; renderHobbyMediaEditor(); setHobbyUploadProgress(1, selected.length, 0);
    var next = function (index) {
      if (index >= selected.length) { return Promise.resolve(); }
      return uploadHobbyMedia(selected[index], mediaType, function (filePercent) {
        var overall = ((index + filePercent / 100) / selected.length) * 100;
        setHobbyUploadProgress(index + 1, selected.length, overall);
      }).then(function (row) {
        editorHobbyMedia.push(cloneHobbyMedia(row)); renderHobbyMediaEditor(); return next(index + 1);
      });
    };
    next(0).then(function () {
      editorHobbyUploading = false; renderHobbyMediaEditor(); hideHobbyUploadProgress();
      showToast(t('hobbyUploaded'), 'success'); return loadAdminHobbies(editorHobbyId);
    }).then(function () { return loadPublicHobbies(); }).catch(function () {
      editorHobbyUploading = false; renderHobbyMediaEditor(); hideHobbyUploadProgress(); showToast(t('hobbyUploadError'), 'error');
    });
  }
  function initHobbyEditor() {
    var modal = document.getElementById('hobbyEditorModal');
    var open = document.getElementById('hobbyManage');
    if (!modal || !open) { return; }
    open.addEventListener('click', openHobbyEditor);
    var close = document.getElementById('hobbyEditorClose'); if (close) { close.addEventListener('click', closeHobbyEditor); }
    modal.addEventListener('click', function (e) {
      if (e.target && e.target.getAttribute && e.target.getAttribute('data-hobby-editor-close')) { closeHobbyEditor(); }
    });
    var newBtn = document.getElementById('hobbyNew');
    if (newBtn) { newBtn.addEventListener('click', function () { startNewEditorHobby(true); }); }
    var list = document.getElementById('hobbyEditorList');
    if (list) { list.addEventListener('click', function (e) { var btn = e.target.closest ? e.target.closest('[data-edit-hobby]') : null; if (btn) { selectEditorHobby(btn.getAttribute('data-edit-hobby')); } }); }
    var form = document.getElementById('hobbyEditorForm');
    if (form) { form.addEventListener('submit', function (e) { e.preventDefault(); saveEditorHobby(); }); }
    var mediaList = document.getElementById('hobbyMediaList');
    if (mediaList) {
      mediaList.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('[data-hobby-media-action]') : null; if (!btn) { return; }
        var index = parseInt(btn.getAttribute('data-media-index'), 10); var action = btn.getAttribute('data-hobby-media-action');
        if (action === 'up') { moveEditorHobbyMedia(index, -1); }
        else if (action === 'down') { moveEditorHobbyMedia(index, 1); }
        else if (action === 'delete') { deleteEditorHobbyMedia(index); }
      });
    }
    var imageInput = document.getElementById('hobbyImageInput'); var imageLabel = document.getElementById('hobbyAddImageLabel');
    if (imageInput) { imageInput.addEventListener('change', function () { handleSelectedHobbyMedia(imageInput.files, 'image'); imageInput.value = ''; }); }
    if (imageLabel) { imageLabel.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (editorHobbyId && imageInput && !editorHobbyUploading) { imageInput.click(); } } }); }
    var videoInput = document.getElementById('hobbyVideoInput'); var videoLabel = document.getElementById('hobbyAddVideoLabel');
    if (videoInput) { videoInput.addEventListener('change', function () { handleSelectedHobbyMedia(videoInput.files, 'video'); videoInput.value = ''; }); }
    if (videoLabel) { videoLabel.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (editorHobbyId && videoInput && !editorHobbyUploading) { videoInput.click(); } } }); }
    var deleteBtn = document.getElementById('hobbyDelete'); if (deleteBtn) { deleteBtn.addEventListener('click', deleteEditorHobby); }
    var moveUp = document.getElementById('hobbyMoveUp'); if (moveUp) { moveUp.addEventListener('click', function () { moveEditorHobby(editorHobbyId, -1); }); }
    var moveDown = document.getElementById('hobbyMoveDown'); if (moveDown) { moveDown.addEventListener('click', function () { moveEditorHobby(editorHobbyId, 1); }); }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) { closeHobbyEditor(); return; }
      if (!modal.hasAttribute('hidden')) { trapFocus(modal.querySelector('.hobby-editor-dialog'), e); }
    });
    initRichTextEditor(); renderHobbyMediaEditor();
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
    if (projectsReady) { renderProjects(); }
    if (detailProject) { renderProjectDetail(detailProject); }
    if (editorProjectId) { renderProjectEditorList(); }
    if (hobbiesReady) { renderHobbyTags(); }
    if (detailHobby) { renderHobbyDetail(detailHobby); }
    if (editorHobbyId) { renderHobbyEditorList(); renderHobbyMediaEditor(); }
    if (agentGreeting) { agentGreeting.textContent = dict[lang].agentHello; }
  }
  function initBoard() {
    var form = document.getElementById('msgForm');
    var anonBox = document.getElementById('msgAnon');
    var nickInput = document.getElementById('msgNick');
    var colorRow = document.getElementById('colorRow');
    var msgColor = 'coral';
    var more = document.getElementById('msgMore');
    var relRow = document.getElementById('relRow');
    var textInput = document.getElementById('msgText');
    var msgRel = '';
    var messageSubmitting = false;
    var messageAllowAt = 0;

    if (anonBox && nickInput) {
      anonBox.addEventListener('change', function () { nickInput.disabled = anonBox.checked; });
    }

    var openMore = function () {
      if (!more || !more.hidden) { return; }
      more.hidden = false;
      more.classList.add('is-open');
      window.setTimeout(function () { more.classList.remove('is-open'); }, 300);
    };
    if (textInput) {
      textInput.addEventListener('focus', openMore);
      textInput.addEventListener('input', openMore);
      textInput.addEventListener('blur', function () {
        window.setTimeout(function () {
          if (!more) { return; }
          var active = document.activeElement;
          if (active && more.contains(active)) { return; }
          if (textInput.value.trim() === '') { more.hidden = true; }
        }, 160);
      });
    }
    if (relRow) {
      relRow.addEventListener('click', function (e) {
        var chip = e.target.closest ? e.target.closest('.rel-chip') : null;
        if (!chip) { return; }
        var value = chip.getAttribute('data-rel') || '';
        msgRel = (msgRel === value) ? '' : value;
        var chips = relRow.querySelectorAll('.rel-chip');
        for (var i = 0; i < chips.length; i++) {
          chips[i].classList.toggle('is-on', chips[i].getAttribute('data-rel') === msgRel);
        }
      });
    }
    if (colorRow) {
      colorRow.addEventListener('click', function (e) {
        var dot = e.target.closest ? e.target.closest('.color-dot') : null;
        if (!dot) { return; }
        msgColor = dot.getAttribute('data-color') || 'coral';
        var dots = colorRow.querySelectorAll('.color-dot');
        for (var i = 0; i < dots.length; i++) {
          dots[i].setAttribute('aria-pressed', dots[i] === dot ? 'true' : 'false');
        }
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (messageSubmitting) { return; }
        var now = Date.now();
        if (now < messageAllowAt) { showToast(t('msgLimit'), 'error'); return; }
        var submitBtn = form.querySelector('button[type="submit"]');
        var nick = (anonBox && anonBox.checked) ? '' : (nickInput ? nickInput.value.trim() : '');
        var textArea = document.getElementById('msgText');
        var text = textArea ? textArea.value.trim() : '';
        if (!text) { showToast(t('msgEmpty'), 'error'); return; }
        messageSubmitting = true;
        messageAllowAt = now + MESSAGE_COOLDOWN_MS;
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = t('msgSending'); }
        sendMessage({ nickname: nick, content: text, color: msgColor, relation: msgRel }).then(function () {
          form.reset();
          msgRel = '';
          if (relRow) {
            var relChips = relRow.querySelectorAll('.rel-chip');
            for (var rc = 0; rc < relChips.length; rc++) { relChips[rc].classList.remove('is-on'); }
          }
          if (more) { more.hidden = true; }
          if (anonBox && nickInput) { nickInput.disabled = anonBox.checked; }
          return renderBoard();
        }).then(function () {
          showToast(t('msgSent'), 'success');
        }).catch(function (err) {
          if (err && err.message === 'rate') {
            messageAllowAt = Math.max(messageAllowAt, Date.now() + Number(err.retryAfter || 60) * 1000);
            showToast(t('msgLimit'), 'error');
          } else {
            showToast(t('msgError'), 'error');
          }
        }).then(function () {
          messageSubmitting = false;
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = t('sendBtn'); }
        });
      });
    }
  }
  function initPointerEffects() {
    var finePointer = !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    if (!finePointer || reduceMotion) { return; }

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
    document.addEventListener('pointerleave', function () { glow.classList.remove('is-on'); });
    window.addEventListener('blur', function () { glow.classList.remove('is-on'); });

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
        currentX += (targetX - currentX) * EASE;
        currentY += (targetY - currentY) * EASE;
        var settled = Math.abs(targetX - currentX) < 0.01 && Math.abs(targetY - currentY) < 0.01;
        if (settled) { currentX = targetX; currentY = targetY; }
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
      card.addEventListener('pointerenter', function () { hovering = true; card.classList.add('is-tilting'); start(); });
      card.addEventListener('pointermove', function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        targetY = px * MAX_TILT * 2;
        targetX = -py * MAX_TILT * 2;
        hovering = true;
        start();
      });
      card.addEventListener('pointerleave', function () { hovering = false; targetX = 0; targetY = 0; start(); });
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
    window.scrollTo(0, 0);

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
    var isMobile = !!(window.matchMedia && window.matchMedia('(max-width: 640px)').matches);
    var leadDelay = isMobile ? 80 : 140;
    var leadTime = isMobile ? 360 : 560;
    var unlockTime = isMobile ? 560 : 820;
    var touchSlack = isMobile ? 70 : 4;

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
        if (from) { from.classList.remove('is-active', 'is-entered', 'is-leaving', 'is-leaving-down', 'is-armed', 'is-armed-down', 'is-up'); }
        target.classList.add('is-active');
        if (target.id === 'page3') {
          layoutBoard();
          window.setTimeout(layoutBoard, 700);
        }
        var allArrows = document.querySelectorAll('.page-next');
        for (var ai = 0; ai < allArrows.length; ai++) { allArrows[ai].classList.remove('is-pulling'); }
        setArrow(to);
        var newArrow = document.querySelector('.page-next.is-active');
        if (newArrow) {
          newArrow.classList.add('is-arriving');
          window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () { newArrow.classList.remove('is-arriving'); });
          });
        }
        document.documentElement.setAttribute('data-page', target.id);
        var footer = document.querySelector('footer');
        var safeMax = footer ? Math.max(0, footer.offsetTop - window.innerHeight) : 0;
        var activeArrow = document.querySelector('.page-next.is-active');
        if (activeArrow) { safeMax = Math.min(safeMax, Math.max(0, activeArrow.offsetTop - window.innerHeight)); }
        var targetPos = to === 0 ? 0 : (memo[to] || 0);
        window.scrollTo(0, Math.min(targetPos, safeMax));
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            target.classList.add('is-entered');
            window.setTimeout(function () { animating = false; }, unlockTime);
          });
        });
        idx = to;
      };

      if (from) {
        var down = to > idx;
        target.classList.toggle('is-up', !down);
        var oldArrow = document.querySelector('.page-next.is-active');
        if (oldArrow) { oldArrow.classList.add('is-pulling'); }
        from.classList.add(down ? 'is-armed' : 'is-armed-down');
        window.setTimeout(function () { from.classList.add(down ? 'is-leaving' : 'is-leaving-down'); }, leadDelay);
        window.setTimeout(finish, leadTime);
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

    var wheelAccum = 0;
    var wheelAt = 0;

    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey || animating || document.documentElement.classList.contains('feedback-open')) { return; }
      var node = e.target;
      if (node && node.closest && node.closest('.chat-log')) { return; }
      var atTop = window.pageYOffset <= 4;
      var atBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 4);
      var delta = e.deltaY * (e.deltaMode === 1 ? 16 : (e.deltaMode === 2 ? window.innerHeight : 1));
      var absDelta = Math.abs(delta);

      /* 向上：立即翻页，和以前一样 */
      if (delta < 0 && atTop) {
        e.preventDefault();
        wheelAccum = 0;
        wheelAt = 0;
        swap(idx - 1);
        return;
      }

      /* 向下到底：快速立即，慢速需要累积（方便点反馈） */
      if (!(delta > 0 && atBottom)) { wheelAccum = 0; wheelAt = 0; return; }
      e.preventDefault();
      if (absDelta >= 50) {
        wheelAccum = 0;
        wheelAt = 0;
        swap(idx + 1);
        return;
      }
      var now = Date.now();
      if (now - wheelAt > 400) { wheelAccum = 0; }
      wheelAt = now;
      wheelAccum += absDelta;
      if (wheelAccum >= 160) {
        wheelAccum = 0;
        wheelAt = 0;
        swap(idx + 1);
      }
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

    var canScroll = function (node, dir) {
      var el = node;
      while (el && el !== document.body && el !== document.documentElement) {
        var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
        var oy = style ? style.overflowY : '';
        if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) {
          if (dir > 0 ? (el.scrollTop + el.clientHeight < el.scrollHeight - 1) : (el.scrollTop > 1)) { return true; }
        }
        el = el.parentElement;
      }
      return false;
    };

    var touchStartX = 0;
    var touchStartY = 0;
    var touchNode = null;
    var touching = false;

    window.addEventListener('touchstart', function (e) {
      if (animating || e.touches.length !== 1) { touching = false; return; }
      touching = true;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchNode = e.target;
    }, { passive: true });

    window.addEventListener('touchend', function (e) {
      if (!touching || animating) { return; }
      touching = false;
      var t = e.changedTouches && e.changedTouches[0];
      if (!t) { return; }
      var dx = t.clientX - touchStartX;
      var dy = t.clientY - touchStartY;
      if (Math.abs(dy) < 30 || Math.abs(dy) < Math.abs(dx) * 1.1) { return; }
      var atTop = window.pageYOffset <= touchSlack;
      var atBottom = (window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - touchSlack);
      if (dy < 0) {
        if (atBottom && !canScroll(touchNode, 1)) { swap(idx + 1); }
      } else {
        if (atTop && !canScroll(touchNode, -1)) { swap(idx - 1); }
      }
    }, { passive: true });
    return { swap: swap, index: function () { return idx; }, pages: pages };
  }

  var agentQA = {
    zh: [
      { keys: ['贝贝', '小狗', '狗', '宠物'], a: '贝贝是我家的小狗，名字来自旺旺仙贝，活泼聪慧，最爱打滚' },
      { keys: ['二胡'], a: '二胡我学了十二年，最喜欢《三门峡畅想曲》，每次演出都很难忘' },
      { keys: ['篆刻', '刻章', '印章'], a: '我刻过很多章，欢迎大家找我刻章，一刀一刀雕出作品特别有成就感' },
      { keys: ['音乐', '歌手', 'coldplay', '听歌'], a: '最喜欢 Coldplay，心情不好会听 Welcome Home Son' },
      { keys: ['贵州菜', '粽子', '吃', '菜'], a: '啥都爱吃，最喜欢贵州菜；粽子必须是咸的，灰粽！' },
      { keys: ['脑机接口', '研究方向'], a: '我最感兴趣的是非侵入式脑机接口' },
      { keys: ['羽毛球'], a: '我喜欢看羽毛球比赛' },
      { keys: ['你是谁', '介绍一下', '自我介绍', '名字', '谁'], a: '我是何欣蔚，天津大学智能医学工程专业本科生' },
      { keys: ['学校', '专业', '天津大学', '学什么', '就读'], a: '我在天津大学读智能医学工程' },
      { keys: ['特长', '技能', '会什么', '二胡', '篆刻'], a: '我的特长是二胡和篆刻' },
      { keys: ['爱好', '兴趣', '喜欢什么', '音乐', '小狗', '狗'], a: '我喜欢探索新鲜事物，也喜欢音乐，还特别偏爱小狗' },
      { keys: ['项目', '作品', '做过什么', '学习与探索'], a: '我的首个项目是何欣蔚个人主页，通过 Vibe Coding 完成，包含数字分身、留言板和暗黑模式' },
      { keys: ['联系', '邮箱', '邮件', '怎么找'], a: '可以发邮件到 xinwei_he@tju.edu.cn' },
      { keys: ['留言', '留言板'], a: '第三屏是留言板，欢迎留言' },
      { keys: ['你好', '您好', '嗨', '在吗'], a: '你好，我是何欣蔚的数字分身，问点你感兴趣的' }
    ],
    en: [
      { keys: ['dog', 'pet', 'beibei'], a: 'Beibei is my dog. Her name comes from a rice-cracker brand. She is lively and smart and loves rolling around' },
      { keys: ['erhu'], a: 'I have played the erhu for 12 years. My favourite piece is Sanmenxia Capriccio' },
      { keys: ['seal carving', 'seal', 'carving'], a: 'I have carved many seals and I am happy to carve one for you' },
      { keys: ['music', 'singer', 'coldplay'], a: 'My favourite band is Coldplay. When I feel down I listen to Welcome Home Son' },
      { keys: ['food', 'eat', 'guizhou'], a: 'I love all kinds of food, especially Guizhou cuisine. And zongzi must be savoury' },
      { keys: ['brain', 'bci', 'research'], a: 'My main interest is non-invasive brain-computer interfaces' },
      { keys: ['badminton'], a: 'I enjoy watching badminton matches' },
      { keys: ['who are you', 'your name', 'introduce', 'who'], a: 'I am He Xinwei, an undergraduate in Intelligent Medical Engineering at Tianjin University' },
      { keys: ['school', 'major', 'university', 'study'], a: 'I study Intelligent Medical Engineering at Tianjin University' },
      { keys: ['skill', 'specialty', 'erhu', 'seal'], a: 'My specialties are the erhu and seal carving' },
      { keys: ['hobby', 'interest', 'music', 'dog'], a: 'I like exploring new things and music, and I am especially fond of dogs' },
      { keys: ['project', 'work', 'portfolio'], a: 'My first project is my personal homepage, built through Vibe Coding with a digital twin, message board, and dark mode' },
      { keys: ['contact', 'email', 'reach'], a: 'You can email me at xinwei_he@tju.edu.cn' },
      { keys: ['message', 'board', 'comment'], a: 'The third screen has a message board' },
      { keys: ['hello', 'hey', 'hi there'], a: 'Hi, I am the digital twin of He Xinwei. Ask me what you like' }
    ]
  };

  function localAnswer(text) {
    var q = String(text || '').toLowerCase();
    var list = agentQA[current] || agentQA.zh;
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      for (var k = 0; k < item.keys.length; k++) {
        if (q.indexOf(item.keys[k].toLowerCase()) > -1) { return item.a; }
      }
    }
    return null;
  }

  function askModel(text) {
    return edgeFetch('ask-agent', { question: String(text).slice(0, 60), lang: current }).then(function (data) {
      if (!data || !data.answer) { throw new Error('empty'); }
      return String(data.answer).trim();
    });
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

    var agentBusy = false;
    var agentAllowAt = 0;
    var quickButtons = quick ? quick.querySelectorAll('.chip') : [];
    var setAgentBusy = function (busy) {
      agentBusy = busy;
      if (form) {
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) { submitBtn.disabled = busy; }
      }
      for (var i = 0; i < quickButtons.length; i++) { quickButtons[i].disabled = busy; }
    };

    var respond = function (text, done) {
      var bubble = addBubble('···', 'bot');
      bubble.classList.add('chat-typing');

      var local = localAnswer(text);
      if (local) {
        window.setTimeout(function () {
          bubble.classList.remove('chat-typing');
          typeOut(bubble, local);
          if (done) { done(); }
        }, reduceMotion ? 0 : 400);
        return;
      }

      var finished = false;
      var guard = null;
      var show = function (answer) {
        if (finished) { return; }
        finished = true;
        if (guard) { window.clearTimeout(guard); }
        bubble.classList.remove('chat-typing');
        typeOut(bubble, answer);
        if (done) { done(); }
      };
      guard = window.setTimeout(function () { show(t('agentOffline')); }, 30000);

      askModel(text).then(function (answer) {
        show(answer);
      }).catch(function (err) {
        if (err && err.message === 'rate') {
          agentAllowAt = Math.max(agentAllowAt, Date.now() + Number(err.retryAfter || 60) * 1000);
          show(t('agentLimit'));
        } else {
          show(t('agentOffline'));
        }
      });
    };

    var send = function (text) {
      var value = String(text || '').trim().slice(0, 60);
      if (!value || agentBusy) { return; }
      var now = Date.now();
      if (now < agentAllowAt) { showToast(t('agentLimit'), 'error'); return; }
      agentAllowAt = now + AGENT_COOLDOWN_MS;
      setAgentBusy(true);
      addBubble(value, 'me');
      respond(value, function () { setAgentBusy(false); });
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
    return apiFetch('feedback', {
      method: 'POST',
      prefer: 'return=minimal',
      body: {
        rating: data.score || null,
        device: data.device || deviceLabel(),
        content: data.text,
        contact: data.contact || null
      }
    });
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
    var deviceRow = document.getElementById('deviceRow');
    if (!modal || !openBtn) { return; }

    var lastFocus = null;
    var score = 0;
    var device = '';

    var openModal = function () {
      lastFocus = document.activeElement;
      modal.removeAttribute('hidden');
      syncModalLock();
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

    if (deviceRow) {
      deviceRow.addEventListener('click', function (e) {
        var chip = e.target.closest ? e.target.closest('.device-chip') : null;
        if (!chip) { return; }
        var value = chip.getAttribute('data-device') || '';
        device = (device === value) ? '' : value;
        var chips = deviceRow.querySelectorAll('.device-chip');
        for (var i = 0; i < chips.length; i++) {
          chips[i].classList.toggle('is-on', chips[i].getAttribute('data-device') === device);
        }
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var submitBtn = form.querySelector('button[type="submit"]');
        var text = textArea ? textArea.value.trim() : '';
        if (!text) { showToast(t('feedbackEmpty'), 'error'); return; }
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = t('feedbackSending'); }
        submitFeedback({
          score: score,
          device: device,
          text: text,
          contact: contact ? contact.value.trim() : ''
        }).then(function () {
          showToast(t('feedbackSent'), 'success');
          form.reset();
          score = 0;
          device = '';
          if (deviceRow) {
            var chips2 = deviceRow.querySelectorAll('.device-chip');
            for (var d = 0; d < chips2.length; d++) { chips2[d].classList.remove('is-on'); }
          }
          if (ratingRow) {
            var dots2 = ratingRow.querySelectorAll('.rating-dot');
            for (var k = 0; k < dots2.length; k++) { dots2[k].classList.remove('is-on'); }
          }
          closeModal();
        }).catch(function () {
          showToast(t('feedbackError'), 'error');
        }).then(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = t('feedbackSubmit'); }
        });
      });
    }
  }
  function initCursor() {
    var finePointer = !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    if (!finePointer || reduceMotion) { return; }

    var ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var rx = x;
    var ry = y;
    var pressed = false;
    var started = false;
    var running = false;

    var draw = function () {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
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
      var textField = node && node.closest ? node.closest('input, textarea, [contenteditable="true"]') : null;
      var hit = node && node.closest ? node.closest('a, button, input, textarea, select, label, summary, [role="option"], [role="radio"], [role="button"]') : null;
      ring.classList.toggle('is-hover', !!hit);
      document.documentElement.classList.toggle('cursor-text', !!textField);
    });
  }
  var initial = detectLang();
  initBoard();
  initProjects();
  initProjectEditor();
  initHobbies();
  initHobbyEditor();
  initBoardLayout();
  applyLang(initial);
  initTheme();
  initPointerEffects();
  var pager = initPager();
  initAgent(pager);
  initFeedback();
  initAdmin();
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