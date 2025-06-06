"use client";

import Link from "next/link";
import { useUserContext } from "../context/UserContext";

export const Header = () => {
  const { user, logout } = useUserContext();

  return (
    <header className="bg-blue-500 hover:bg-blue-700 text-white p-4">
      <Link href="/">トップ</Link>
      <div>
        {user ? (
          <>
            <span className="mr-2">{user.name} さん</span>
            <button type="button" onClick={logout}>
              ログアウト
            </button>
          </>
        ) : (
          <>
            <p>ゲスト</p>
          </>
        )}
      </div>
    </header>
  );
};
