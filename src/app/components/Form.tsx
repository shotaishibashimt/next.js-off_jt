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
      <div>
        <label htmlFor="name">名前</label>
        <input
          id="name"
          {...register("name", { required: "名前は必須です" })}
          placeholder="名前"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "メールアドレスは必須です",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "無効なメールアドレス形式です",
            },
          })}
          placeholder="メールアドレス"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="age">年齢</label>
        <input
          id="age"
          type="number"
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
              Number.isNaN(value) || "数値で入力してください",
          })}
          placeholder="年齢"
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">送信</button>
    </form>
  );
}

export default MyForm;
