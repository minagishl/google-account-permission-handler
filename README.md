# Google Account Permission Handler

This project can easily and automatically switch accounts when "You need permission" is displayed on Google Form, Google Drive, Google Spreadsheets, etc!

Click [here](https://youtu.be/7hDCUyQ6xiQ) to see a sample video.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> **Note:** while the `dev` script is optimal for local development you should preview your Pages application as well (periodically or before deployments) in order to make sure that it can properly work in the Pages environment (for more details see the [`@cloudflare/next-on-pages` recommended workflow](https://github.com/cloudflare/next-on-pages/blob/05b6256/internal-packages/next-dev/README.md#recommended-workflow))

## How to use

1. Copy the URL of the Google Form, Google Drive, Google Spreadsheet, etc. that displays "Permission Required" or "You need permission"

2. Paste the URL into the input field

3. Click on the "Open account switching screen" button.

> **Note:** If you are already signed in to an authorized Google Account, simply click the "Automatically opens in an authorized account" button

## Bookmark

This application can also be run from a bookmark (recommended).  
Click [here](https://google-account-permission-handler.pages.dev/bookmark) to go to the Add Bookmark page
