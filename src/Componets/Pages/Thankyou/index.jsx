import { useContext } from "react";
import checkImg from "../../assets/icon-thank-you.svg";
import { Context } from "../../Hooks/Hook";
import loading from "../../assets/loading.gif";
import { useSpring, animated } from "@react-spring/web";
const ThankYou = () => {
  const context = useContext(Context);
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 250,
  });

  setTimeout(context.handleTimeOut, 3000);

  return (
    <animated.div
      style={animationProps}
      className="flex items-center justify-center h-full"
    >
      {context.isLoading ? (
        <div className="flex justify-center items-center h-full">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <section className="flex flex-col h-full items-center justify-center">
          <img src={checkImg} alt="Ready picture" />
          <span className="text-4xl text-MarineBlue font-bold mt-10 mb-6">
            Thank you!
          </span>
          <p className="text-CoolGray text-lg font-semibold text-center">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </section>
      )}
    </animated.div>
  );
};

export default ThankYou;
