type Locale = {
  translation: {
    [key: string]: string;
  };
};

const en: Locale = {
  translation: {
    'Please enter URL': 'Please enter URL',
    'Open account switching screen': 'Open account switching screen',
    'Automatically opens in an authorized account':
      'Automatically opens in an authorized account',
    'Browse GitHub for usage instructions':
      'Browse GitHub for usage instructions',
  },
};

const ja: Locale = {
  translation: {
    'Please enter URL': 'URLを入力してください',
    'Open account switching screen': 'アカウント切り替え画面を開く',
    'Automatically opens in an authorized account':
      '承認されたアカウントで自動的に開きます',
    'Browse GitHub for usage instructions':
      '使用方法についてはGitHubを参照してください',
  },
};

const fr: Locale = {
  translation: {
    'Please enter URL': "Veuillez entrer l'URL",
    'Open account switching screen': "Ouvrir l'écran de changement de compte",
    'Automatically opens in an authorized account':
      "S'ouvre automatiquement dans un compte autorisé",
    'Browse GitHub for usage instructions':
      "Consultez GitHub pour les instructions d'utilisation",
  },
};

const de: Locale = {
  translation: {
    'Please enter URL': 'Bitte geben Sie die URL ein',
    'Open account switching screen':
      'Öffnen Sie den Bildschirm zum Wechseln des Kontos',
    'Automatically opens in an authorized account':
      'Öffnet sich automatisch in einem autorisierten Konto',
    'Browse GitHub for usage instructions':
      'Durchsuchen Sie GitHub nach Verwendungshinweisen',
  },
};

const zh: Locale = {
  translation: {
    'Please enter URL': '请输入网址',
    'Open account switching screen': '打开账户切换界面',
    'Automatically opens in an authorized account': '自动在授权账户中打开',
    'Browse GitHub for usage instructions': '浏览GitHub以获取使用说明',
  },
};

const es: Locale = {
  translation: {
    'Please enter URL': 'Por favor ingrese la URL',
    'Open account switching screen': 'Abrir la pantalla de cambio de cuenta',
    'Automatically opens in an authorized account':
      'Se abre automáticamente en una cuenta autorizada',
    'Browse GitHub for usage instructions':
      'Consulte GitHub para obtener instrucciones de uso',
  },
};

const ru: Locale = {
  translation: {
    'Please enter URL': 'Пожалуйста, введите URL',
    'Open account switching screen':
      'Открыть экран переключения учетных записей',
    'Automatically opens in an authorized account':
      'Автоматически открывается в авторизованной учетной записи',
    'Browse GitHub for usage instructions':
      'Посмотрите GitHub для получения инструкций по использованию',
  },
};

const locale = { en, ja, fr, de, zh, es, ru };

export default locale;
