"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { mutate } from "swr";
import { z } from "zod";
import { schema } from "../memos/new/schema";
import { Modal } from "./Modal";

type FormValues = {
  title: string;
  text?: string;
  email?: string;
  age?: string;
  agree: boolean;
};

const Form: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      text: "",
      email: "",
      age: "",
      agree: false,
    },
    mode: "onChange",
  });

  const onValid: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/memos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      const newMemo = await res.json();
      mutate(
        "/api/memos",
        (currentData: FormValues[] = []) => [...currentData, newMemo.memo],
        false,
      );
      setShowModal(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="border p-3 mb-4 rounded">
          タイトル：
          <input {...register("title")} placeholder="タイトルを入力" />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="border p-3 mb-4 rounded">
          本文：
          <input {...register("text")} placeholder="本文を入力" />
          {errors.text && <p>{errors.text.message}</p>}
        </div>

        <div className="border p-3 mb-4 rounded">
          email：
          <input {...register("email")} placeholder="メールアドレスを入力" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="border p-3 mb-4 rounded">
          年齢：
          <input {...register("age")} placeholder="年齢を入力" />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div className="border p-3 mb-4 rounded">
          <input type="checkbox" {...register("agree")} />
          利用規約に同意する
          {errors.agree && <p>{errors.agree.message}</p>}
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "送信中..." : "送信"}
        </button>
        <div>
          <Link
            href="/memos"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            メモ一覧画面へ
          </Link>
        </div>
      </form>

      {showModal && (
        <Modal
          message="登録が完了しました！"
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};
export default Form;
