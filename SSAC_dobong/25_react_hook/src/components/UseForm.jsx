import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   console.log("email invalid msg", errors.email?.message);
  //   console.log("watch username", watch("username"));
  //   console.log("entire info", watch()); // 객체 형태를 리턴 {}
  
  const onValid = (data) => {
    console.log("valid: ", data);
  };
  const onInvalid = (data) => {
    console.log("invalid: ", data);
    console.log(data.username?.message);
  };

  //   console.log("단축평가:: ||", true || "hello");
  //   console.log("단축평가:: ||", false || "hello");
  //   console.log("단축평가:: &&", true && "hello");
  //   console.log("단축평가:: &&", false && "hello");

  return (
    <>
      <h2>useForm 사용해보기</h2>
      {/* 
        handleSubmit(func1[, func2]): 인자로 두개의 함수를 받을 수 있음
        - func1: 필수, 유효할 때 실행
        - fucn2: 선택, 유효하지 않을 때 실행(유효성 검사 실패 시) 
      */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름을 입력해주세요",
            minLength: {
              value: 2,
              message: "이름은 최소 두 글자 이상 작성해주세요",
            },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "이메일을 입력해주세요",
            validate: {
              useGmail: (value) => {
                // value: input.value
                // gamil.com이 포함되면 true, 포함되지 않으면 string 리턴
                // &&: 여러 조건 중에 하나라도 false라면 전체 값 false
                // ||: 여러 조건 중에 하나라도 true라면 전체 값 true
                return (
                  value.includes("gmail.com") || "gmail로만 가입 가능합니다."
                );
              },
            },
          })}
        />
        {errors.email?.message}
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
