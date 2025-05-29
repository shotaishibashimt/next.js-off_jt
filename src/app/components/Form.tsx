import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  age: number;
};

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("送信されたデータ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="name">名前</label>
        <input
          id="name"
          className="border-2"
          {...register("name", { required: "名前は必須です" })}
          placeholder="名前を入力"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          className="border-2"
          type="email"
          {...register("email", {
            required: "メールアドレスは必須です",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "無効なメールアドレス形式です",
            },
          })}
          placeholder="メールアドレスを入力"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="age">年齢</label>
        <input
          id="age"
          type="number"
          className="border-2"
          {...register("age", {
            required: "年齢は必須です",
            valueAsNumber: true,
            min: {
              value: 18,
              message: "18歳以上で入力してください",
            },
            max: {
              value: 100,
              message: "100歳以下で入力してください",
            },
            validate: (value) =>
              !Number.isNaN(value) || "数値で入力してください",
          })}
          placeholder="年齢を入力"
        />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}
      </div>

      <button type="submit">送信</button>
    </form>
  );
}

export default MyForm;
