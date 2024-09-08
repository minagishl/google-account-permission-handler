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
      '承認されたアカウントで自動的に開く',
    'Browse GitHub for usage instructions': '使用方法についてGitHubを閲覧する',
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

const it: Locale = {
  translation: {
    'Please enter URL': "Si prega di inserire l'URL",
    'Open account switching screen': 'Aprire la schermata di cambio account',
    'Automatically opens in an authorized account':
      'Si apre automaticamente in un account autorizzato',
    'Browse GitHub for usage instructions':
      "Controlla GitHub per le istruzioni d'uso",
  },
};

const pt: Locale = {
  translation: {
    'Please enter URL': 'Por favor, insira a URL',
    'Open account switching screen': 'Abrir a tela de troca de conta',
    'Automatically opens in an authorized account':
      'Abre automaticamente em uma conta autorizada',
    'Browse GitHub for usage instructions':
      'Veja o GitHub para instruções de uso',
  },
};

const nl: Locale = {
  translation: {
    'Please enter URL': 'Voer de URL in',
    'Open account switching screen':
      'Open het scherm voor het wisselen van account',
    'Automatically opens in an authorized account':
      'Wordt automatisch geopend in een geautoriseerd account',
    'Browse GitHub for usage instructions':
      'Bekijk GitHub voor gebruiksaanwijzingen',
  },
};

const ko: Locale = {
  translation: {
    'Please enter URL': 'URL을 입력하십시오',
    'Open account switching screen': '계정 전환 화면 열기',
    'Automatically opens in an authorized account':
      '승인된 계정에서 자동으로 열립니다',
    'Browse GitHub for usage instructions':
      '사용 지침을 보려면 GitHub를 탐색하십시오',
  },
};

const locale = { en, ja, fr, de, zh, es, ru, it, pt, nl, ko };

export default locale;
