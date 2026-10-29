import './globals.css';

export const metadata = {
  title: 'BELIKOV | Luxury Modern Architecture, Palatial Societies & Rowhouses in Vapi',
  description:
    'Experience the pinnacle of royal architectural living in Vapi by BELIKOV. Ultra-spacious 1, 2, 3 BHK luxury flats and sovereign triplex rowhouses with Italian marble, 11-ft ceilings, and 35+ five-star resort amenities across Chala, Gunjan, and VIP Daman Road.',
  keywords: [
    'belikov',
    'belikov infra',
    'belikov buildcon vapi',
    'luxury flats in vapi',
    '3 bhk in chala vapi',
    '2 bhk luxury flats vapi',
    '1 bhk flats vapi',
    'rowhouses in vapi',
    'villas in vapi',
    'societies in vapi',
    'real estate developer vapi',
    'architectural studio vapi',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#070a0f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
