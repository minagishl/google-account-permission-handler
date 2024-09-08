type Locale = {
  translation: {
    [key: string]: string;
  };
};

const ja: Locale = {
  translation: {
    'Please enter URL': 'URL を入力してください',
    'Open account switching screen': 'アカウント切り替え画面を開く',
    'Automatically opens in an authorized account':
      '認証されたアカウントで自動的に開く',
    'Browse GitHub for usage instructions': '使い方を GitHub で閲覧する',
  },
};

export default ja;
