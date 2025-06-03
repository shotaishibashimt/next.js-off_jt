"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "10文字以上で入力してください"),
});

type FormValues = z.infer<typeof schema>;

const NewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("送信されたデータ:", data);
  };

  type FormData = {
    title: string;
    content: string;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="name">タイトル</label>
        <input
          id="title"
          className="border-2"
          {...register("title")}
          placeholder="タイトルを入力"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="content">コメント</label>
        <input
          id="content"
          className="border-2"
          {...register("content")}
          placeholder="タイトルを入力"
        />
        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

export default NewForm;
