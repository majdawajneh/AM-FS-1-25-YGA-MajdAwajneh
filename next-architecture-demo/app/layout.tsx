import { title } from 'process';
import {CartProvider} from './CartContext';

//medadata used in SEO
export const metadata = {
  title: "Next Architecture Demo",
};

export default function RootLayout({children}){
  return (
    <html lang='en'>
      <body style={{fontFamily: "Arial, sans-serif", padding: 20}}>
        
      </body>
    </html>
  )
}