import React from "react";
import Options from "../Options/index.jsx";
import { postData } from "../../services/postInfo.js";
import { useState } from "react";
import Input from "../Input/index.jsx";
import LottiePlayer from "../LottiePlayer/index.jsx";

const Form = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    formClassName,
    btnSubmitClassName,
    optionItemClassName,
    titleClassName,
    showToastNotification,
  } = props;
  const [isLoading, setIsloading] = useState(false);
  let isVisible = true;
  let isDisabled = !isLoading && (!email.value || !password.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.isValid) {
      showToastNotification("فرمت ایمیل صحیح نیست.", "warning");
      return;
    }
    const info = {
      UserName: email.value,
      password: password.value,
    };
    setIsloading(true);
    postData(info)
      .then((data) => {
        const { error, succeeded } = data;
        setIsloading(false);
        if (!succeeded) {
          const { code } = error;
          if (code === 10002) {
            showToastNotification("فرمت ایمیل صحیح نیست.", "warning");
          } else if (code === 10602) {
            showToastNotification(
              "نام کاربری یا رمز ورودی صحیح نمی باشد.",
              "warning"
            );
          }
          return;
        }
        showToastNotification("با موفقیت انجام شد!", "success");
      })
      .catch((error) => {
        showToastNotification(
          "استفاده بیش از اندازه از این امکان به صورت متوالی مجاز نیست. این امکان تا لحظاتی دیگر برای شما فراهم می شود!"
        );
        console.log(error.message);
      });
  };

  return (
    <>
      <div className={titleClassName}>
        <h3>ورود از طریق ایمیل</h3>
        <span>لطفا ایمیل و رمز عبور خود را وارد کنید.</span>
      </div>
      <form className={formClassName} onSubmit={handleSubmit}>
        <Input
          name="ایمیل"
          id="email"
          typeInput="text"
          state={email}
          setState={setEmail}
          isVisible={!isVisible}
        />
        <Input
          name="رمز عبور"
          id="password"
          typeInput="password"
          state={password}
          setState={setPassword}
        />
        <button className={btnSubmitClassName} disabled={isDisabled}>
          {isLoading ? <LottiePlayer /> : <span>ورود</span>}
        </button>
        <Options classNameOptionItem={optionItemClassName} />
      </form>
    </>
  );
};

export default Form;
