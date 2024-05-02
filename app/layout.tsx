import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MemeGPT",
  description: "ChatGPT of LLC, Meme",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={notojp.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/logo.png" alt="Meme Logo" />
      </body>
    </html>
  );
}
