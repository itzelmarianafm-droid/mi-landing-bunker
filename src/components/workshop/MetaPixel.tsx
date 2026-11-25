import Script from 'next/script';

export const WORKSHOP_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_WORKSHOP || '1485085930254919';

export type MetaPixelProps = {
  pixelId?: string;
  purchaseValue?: number;
  currency?: string;
};

export default function MetaPixel({
  pixelId = WORKSHOP_PIXEL_ID,
  purchaseValue,
  currency = 'USD',
}: MetaPixelProps) {
  return (
    <>
      {/* Facebook Pixel Base Code */}
      <Script id={`meta-pixel-base-${pixelId}`} strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Purchase Event (solo en páginas de gracias con candado sessionStorage) */}
      {purchaseValue !== undefined && (
        <Script id={`meta-pixel-purchase-${pixelId}`} strategy="afterInteractive">
          {`if (!sessionStorage.getItem('purchase_fired')) {
  fbq('track', 'Purchase', {value: ${purchaseValue.toFixed(2)}, currency: '${currency}'});
  sessionStorage.setItem('purchase_fired', '1');
}`}
        </Script>
      )}
    </>
  );
}
