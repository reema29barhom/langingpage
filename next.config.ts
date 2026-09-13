import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // هذا السطر يحل مشكلة الصور التي لا تظهر عبر ngrok
  images: {
    unoptimized: true, 
  },
  // تأكدي من عدم وجود أي شيء هنا يغير المسارات مثل basePath أو assetPrefix
};

export default withNextIntl(nextConfig);