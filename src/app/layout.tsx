import "./globals.css";

import { Header } from "./components/Header";
import { UserProvider } from "./context/UserContext";

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <UserProvider>
          <Header />
          <main>{children}</main>
        </UserProvider>
        <footer className="bg-blue-500 hover:bg-blue-700 text-white p-4">
          <p>© 2025 My Meomo APP</p>
        </footer>
      </body>
    </html>
  );
}
