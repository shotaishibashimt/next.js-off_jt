# React Hooks入門（useState / useEffect）

## 🎯 目的

React の関数コンポーネントに「動き（状態）」や「副作用（初回実行・タイミング処理）」を加えるための基本機能である  
`useState` と `useEffect` を理解し、シンプルな状態管理やデータ取得処理が書けるようになる。

---

## 🎯 今週のゴール

- `useState` を使って状態を管理し、UIを動的に変えることができる
- `useEffect` を使って副作用処理（初期処理やデータ取得）を実装できる
- 依存配列によって `useEffect` のタイミングを制御できる

---

## ✅ useState の基本

[リンク](useState%20の仕組みと使い方.md)  

---

## ✅ useEffect の基本

[リンク](useEffect%20の仕組みと使い方.md) 

---

## ✅ よくある使い方の例

[リンク](useState%20+%20useEffect%20のよくある使い方と応用例.md)  

---

## 🔹 課題①：カウントアプリ（useState）

### 🔧 内容

- ボタンを押すたびに数値が増えるカウント機能を作成
- `+1` ボタンと `-1` ボタンを両方実装

### 💡 例

```tsx
const [count, setCount] = useState(0);
```

---

## 🔹 課題②：現在の時刻を表示（useEffect）

### 🔧 内容

- 現在の日時を画面に表示する
- 1秒ごとに更新する（`setInterval` を使用）
- `useEffect` の return で `clearInterval()` を忘れずに

### 💡 例

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    setNow(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

---

## ✅ 実装条件

- 2つの課題をそれぞれ `components/Counter.tsx`, `components/Clock.tsx` に分けて作成
- `page.tsx` から呼び出して並べて表示
- TypeScript で型注釈を明示する
