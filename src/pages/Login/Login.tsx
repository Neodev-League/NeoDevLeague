import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import MacNavbar from "../../components/macNavbar";
import Modal from "../../components/Login/Modal/Modal";
import { MagicCard } from "../../components/Login/magicCard";
import ClientTweetCard from "../../components/Login/tweet";
import { motion } from "framer-motion";
import { CircleCheck, SendHorizontal } from "lucide-react";
import logo from "../../assets/blackLogo.png";
import logo180 from "../../assets/blackLogo180.png";

const helpModalFAQ = [
  {
    question: "What's in the dashboard?",
    answer:
      "Everything! Everyone can signup for an account but only once you get verified and selected by your school's representative you get access to most of the features!",
  },
  {
    question: "Why am I unable to log in to my account?",
    answer:
      "Ensure your email and password are correct. If you're still having trouble, try resetting your password or clearing your browser's cache.",
  },
  {
    question: "How do I reset my password if I forget it?",
    answer: "Just message James on our discord and he will update it manually",
  },
  {
    question: "Where can I receive further assistance?",
    answer: (
      <>
        You can always shoot an email to{" "}
        <a href="mailto:neodevleague@gmail.com">neodevleague@gmail.com</a> if
        you have any questions or problems.
      </>
    ),
  },
  {
    question: "Click outside to close",
    answer: "",
  },
];

function Login() {
  const navigate = useNavigate();
  const { signInWithPassword, signUp, signInWithIdToken } = useAuth();
  const [loading, setLoading] = useState(0);
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [helpModalState, setHelpModalState] = useState(false);
  const [pageState, setPageState] = useState("Login");

  useEffect(() => {
    window.handleSignInWithGoogle = async (response: any) => {
      const { data, error } = await signInWithIdToken({
        provider: "google",
        token: response.credential,
      });
      if (data) {
        console.log("redirecting to dashboard");
        navigate("/dashboard");
      }

      if (error) {
        throw error;
      }
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      console.log("Google Identity Services script loaded");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [signInWithIdToken]);

  const handleSignUpPage = () => {
    setLoading(0);
    setTimeout(() => {
      setPageState("SignUp");
    }, 100);
  };

  const handleLoginPage = () => {
    setLoading(0);
    setTimeout(() => {
      setPageState("Login");
    }, 100);
  };

  const loginProcess = async (email: string, password: string) => {
    try {
      setLoading(1);
      // LOGIN supabase
      const { data, error } = await signInWithPassword({
        email: email,
        password: password,
      });
      console.log("data", data);
      if (error) {
        throw error;
      }

      if (data) {
        console.log("redirecting to dashboard");
        navigate("/Dashboard");
      }
    } catch (e: any) {
      alert(e.error_description || e.message);
      console.error("error in signin", e);
      setLoading(2);
    }
  };

  const signUpProcess = async (email: string, password: string) => {
    try {
      setLoading(1);
      console.log("signing up:", email, password);
      // SIGNUP supabase
      const { data, error } = await signUp({
        email: email,
        password: password,
      });
      console.log("data", data);
      if (error) {
        throw error;
      }
      setLoading(2);

      setTimeout(() => {
        handleLoginPage();
      }, 1000);
    } catch (e: any) {
      alert(e.error_description || e.message);
      console.error("error in signup", e);
      setLoading(3);
    }
  };

  const handleSubmit = async (email: string, password: string) => {
    if (pageState === "Login") {
      await loginProcess(email, password);
    } else {
      await signUpProcess(email, password);
    }
  };

  const loginDialogs = [
    "Login",
    "Logging In",
    "",
    "Login Failed Do You Have An account?",
  ];

  const signupDialogs = [
    "Sign Up",
    "",
    <p className="gradient flex items-center gap-2 justify-center">
      <CircleCheck /> Account Created! Now you can Login
    </p>,
    "Login Failed Do You Have An account?",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        id="login"
        className="h-screen md:overflow-hidden flex items-center justify-center bg-[url('../../assets/Neo-bg.jpg')] bg-cover bg-center overflow-auto md:overflow-hidden landscape:overflow-auto"
      >
        <div
          id="login-body"
          className="rounded-lg w-[97vw] md:w-[75vw] sm:mt-0 mt-auto landscape:mt-auto"
        >
          <MagicCard
            className="rounded-t-lg cursor-pointer items-center justify-center shadow-black-shadow2 bg-white/70 mt-[5vh] lg:mt-0 md:mt-[3vh] hover:cursor-default"
            gradientColor={"#ffffff50"}
          >
            <div
              id="login-container"
              className="flex justify-center items-center text-center"
            >
              <img
                src={logo}
                id="logo"
                className="block rounded-md md:h-[5rem] h-[3rem]"
              />
              <h1 className="mx-5 h-full text-centertext-md text-ms sm:text-md md:text-lg text-darkerGreen">
                Welcome to the Neodev League
              </h1>
              <img
                src={logo180}
                id="logo"
                className="block rounded-md md:h-[5rem] h-[3rem]"
              />
            </div>
          </MagicCard>
          <div
            id="login-form"
            className="flex flex-col justify-center items-center bg-white/70 pb-[2vh]"
          >
            <div className="md:w-[90%]">
              <p className="gradient mt-[3vh] flex justify-center text-md md:text-ml text-[1rem] p-2">
                {pageState === "Login"
                  ? "Login to Neo Developer League Dashboard"
                  : "Signup for Dashboard Access"}
              </p>
              <div
                id="google-auth"
                className="flex justify-center align-center mt-[3vh]"
              >
                <div
                  id="g_id_onload"
                  data-client_id="616931218260-d0a02g7psn4odefmok6h6rdlopoeojao.apps.googleusercontent.com"
                  data-context="signin"
                  data-ux_mode="popup"
                  data-callback="handleSignInWithGoogle"
                  data-auto_prompt="false"
                  data-use_fedcm_for_prompt="true"
                ></div>

                <div
                  className="g_id_signin"
                  data-type="standard"
                  data-shape="rectangular"
                  data-theme="outline"
                  data-text="continue_with"
                  data-size="large"
                  data-logo_alignment="left"
                ></div>
              </div>

              <form
                id="form"
                className="my-[1vh] flex items-center flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(email, password);
                }}
              >
                <div className="flex md:flex-row flex-col mb-1 h-[5vh]">
                  <input
                    type="email"
                    id="email"
                    className="md:p-5 p-2 md:w-[30vw] w-[80vw] placeholder-lighterGreen text-lighterGreen border border-lighterGreen shadow-button-green bg-white/70 transition duration-300 ease-in"
                    placeholder="email@"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    id="password"
                    className="md:p-5 p-2 md:w-[30vw] w-[80vw] placeholder-lighterGreen text-lighterGreen border border-lighterGreen shadow-button-green bg-white/70 transition duration-300 ease-in"
                    placeholder="password*"
                    value={password}
                    onChange={(e: any) => SetPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  id="submit"
                  className="bg-darkerGreen h-[5vh] border border-lighterGreen shadow-button-green bg-white/70 transition duration-300 ease-in px-10 md:mt-0 mt-[5vh] flex items-center"
                  disabled={loading === 1}
                  type="submit"
                >
                  <span className="p-1 gradient2 whitespace-pre-wrap text-center text-md text-lighterGreen font-medium leading-none tracking-tight">
                    {pageState == "Login"
                      ? loginDialogs[loading]
                      : signupDialogs[loading]}
                  </span>
                  <SendHorizontal style={{ color: "#34D399" }} />
                </button>

                <button
                  className="underline text-lighterGreen pt-3"
                  type="button"
                  onClick={
                    pageState == "Login" ? handleSignUpPage : handleLoginPage
                  }
                >
                  <span className="md:text-md text-[0.9rem]">
                    {pageState == "Login"
                      ? "No Account? Sign Up"
                      : "Existing Account? Log In"}
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div
            id="login-tweet"
            className="flex justify-center flex-col h-auto w-full rounded-b-lg bg-white/50 md:mb-0 mb-[3vh] text-black"
          >
            <ClientTweetCard
              id={
                pageState == "Login"
                  ? "1815155991035437404"
                  : "1832932409525875147"
              }
            />
            <div className="flex items-center flex-col">
              <button
                className="mb-[1vh] bg-darkerGreen h-[5vh] border p-1 px-5 border-lighterGreen shadow-button-green bg-white/70 ease-in"
                onClick={() => setHelpModalState(true)}
                type="submit"
              >
                <span className="gradient2 whitespace-pre-wrap text-center text-md font-medium leading-none tracking-tight">
                  Need Help?
                </span>
              </button>

              <Modal
                isOpened={helpModalState}
                setIsOpened={setHelpModalState}
                title="FAQ"
              >
                {helpModalFAQ.map(({ question, answer }, index) => (
                  <div key={index}>
                    <h3 className="flex justify-center font-bold text-lighterGreen ">
                      {question}
                    </h3>
                    <h5>{answer}</h5>
                    <hr className="border-lighterGreen border-2 mt-[1vh] mb-[1vh]" />
                  </div>
                ))}
              </Modal>
            </div>
          </div>
        </div>
        <MacNavbar />
      </div>
    </motion.div>
  );
}

export default Login;
