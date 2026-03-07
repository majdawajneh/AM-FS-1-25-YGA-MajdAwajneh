
import { title } from 'process';
import {CartProvider} from './CartContext';

//medadata used in SEO
export const metadata = {
  title : "Next Arch Demo"
}


export default function RootLayout({children}: {children: React.ReactNode}){
  return (
    <html lang='en'>
      <body style={{fontFamily: "Arial, sans-serif", padding: 20}}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}