import styled from "styled-components";
import { useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../configs/firebase-config";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { realtimeDatabase } from "../../configs/firebase-config";
import { onValue, ref, set } from "firebase/database";
export const LoginForm = () => {
  const { setUser, login, createUser, logout, isEmailRegistered } = UserAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [page, setPage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const minCharacter = 6;
  const storeUser = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
  };
  const initiateUserDataBase = (userUID) => {
    // const obj = {
    //   orderHistory: [],
    //   firstName: "",
    //   lastName: "",
    //   email: email,
    //   emailPreference: {
    //     newsletterSubscription: false,
    //     language: "English",
    //     country: "Canada",
    //     emailNotification: false,
    //   },
    //   addresses: [],
    // };
    const userDatabaseRef = ref(realtimeDatabase, `users/${userUID}`);
    set(userDatabaseRef, {
      firstName: "",
      lastName: "",
      email: email,
      emailPreference: {
        newsletterSubscription: false,
        language: "English",
        country: "Canada",
        emailNotification: false,
      },
    });
  };
  const handleEmail = async () => {
    try {
      console.log(email);
      const result = await isEmailRegistered(email);
      console.log(result);
      if (result) {
        setPage(1);
      }
      if (!result) {
        setPage(2);
      }
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid email address");
      } else {
        console.log(error);
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };
  const register = async () => {
    try {
      const user = await createUser(email, password);
      console.log(user.user);
      storeUser(user.user);
      initiateUserDataBase(user.user.uid)
      navigate("/");
    } catch (error) {
      if (error.code === "auth/weak-password"){
        setErrorMessage("Password must be at least 6 characters long");
      } 
    }
  };

  const signin = async () => {
    try {
      // if (password.length > minCharacter) {
      const user = await login(email, password);
      console.log(user.user);
      storeUser(user.user);
      navigate("/");
      // } else {
      //   setErrorMessage(`Password must be at least ${minCharacter} characters long`)
      // }
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrorMessage("Invalid credentials");
      } else {
        console.log(error);
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <FormContainer>
      <Form>
        {page == 0 && (
          <div
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEmail();
              }
            }}
          >
            <div>
              <h1 className="m-0 text-[11px] leading-snug font-normal mb-[15px]">
                LOGIN OR CREATE ACCOUNT
              </h1>
            </div>
            <h2 className="m-0 text-[11px] leading-snug font-normal">
              Email address
            </h2>
            <div className="mb-[25px]">
              <input
                className="w-full border-black h-[30px] px-[6px] outline-none focus:border-black focus:ring-0 text-[11px]"
                type="email"
                placeholder={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              {errorMessage && (
                <p className="text-[11px] text-red-600">{errorMessage}</p>
              )}
            </div>

            <button
              onClick={handleEmail}
              className="block w-full min-h-[35px] min-w-[140px] text-[11px] text-center uppercase border bg-black text-white"
            >
              Continue
            </button>
          </div>
        )}
        {page == 1 && (
          <>
            <div
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  signin();
                }
              }}
            >
              <h1 className="m-0 text-[11px] leading-snug font-normal mb-[15px]">
                LOGIN
              </h1>
            </div>
            <h2 className="m-0 text-[11px] leading-snug font-normal">
              Email address
            </h2>
            <input
              className="w-full border border-black h-[30px] mb-[25px] px-[6px] focus:outline-none text-[11px] hover:cursor-not-allowed"
              type="email"
              value={email}
              disabled
            />
            <div className="mb-[25px]">
              <h2 className="m-0 text-[11px] leading-snug font-normal">
                Password
              </h2>
              <input
                className="w-full border-black h-[30px] px-[6px] outline-none focus:border-black focus:ring-0 text-[11px]"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              {errorMessage && (
                <p className="text-[11px] text-red-600">{errorMessage}</p>
              )}
            </div>

            <button
              onClick={signin}
              className="block w-full min-h-[35px] min-w-[140px] text-[11px] text-center uppercase border bg-black text-white"
            >
              Continue
            </button>
            <div>
              <button
                onClick={() => {
                  setPage(3);
                }}
                className="text-[11px] underline"
              >
                Forgot your password?
              </button>
              <button
                onClick={() => {
                  setPassword("");
                  setEmail("");
                  setPage(0);
                }}
                className="ml-3 text-[11px] underline"
              >
                Not your email?
              </button>
            </div>
          </>
        )}
        {page == 2 && (
            <div
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  register();
                }
              }}
            >
              <div>
                <h1 className="m-0 text-[11px] leading-snug font-normal mb-[15px]">
                  CREATE AN ACCOUNT
                </h1>
              </div>
              <h2 className="m-0 text-[11px] leading-snug font-normal">
                Email address
              </h2>
              <input
                className="w-full border border-black h-[30px] mb-[25px] px-[6px] focus:outline-none text-[11px] hover:cursor-not-allowed"
                type="email"
                placeholder={email}
                disabled
              />
              <h2 className="m-0 text-[11px] leading-snug font-normal">
                Password
              </h2>
              <input
                className="w-full border-black h-[30px] px-[6px] outline-none focus:border-black focus:ring-0 text-[11px]"
                type="password"
                placeholder={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {errorMessage && (
                <p className="text-[11px] text-red-600">{errorMessage}</p>
              )}
              <button
                onClick={register}
                className="block w-full min-h-[35px] min-w-[140px] mt-[25px] text-[11px] text-center uppercase border bg-black text-white"
              >
                Create an account
              </button>
              <button
                onClick={() => {
                  setEmail("");
                  setErrorMessage("")
                  setPage(0);
                }}
                className="block w-full min-h-[35px] min-w-[140px] text-[11px] text-center uppercase"
              >
                Back
              </button>
            </div>
        )}

        {page == 3 && (
          <>
            <div>
              <h1 className="m-0 text-[11px] leading-snug font-normal mb-[15px]">
                FORGOT PASSWORD
              </h1>
            </div>
            <p className="m-0 text-[11px] leading-snug font-normal mb-[15px]">
              Please enter the e-mail address you use to log in, and we’ll send
              you a link to reset your password.
            </p>
            <div className="mb-[25px]">
              <h2 className="m-0 text-[11px] leading-snug font-normal">
                Email address
              </h2>
              <input
                className="w-full border border-black h-[30px] px-[6px] focus:outline-none text-[11px]"
                type="email"
                placeholder={email}
                value={email}
                onChange={(event) => {
                  setErrorMessage("");
                  setEmail(event.target.value);
                }}
              />
              {errorMessage && (
                <p className="text-[11px] text-red-600">{errorMessage}</p>
              )}
            </div>
            <button className="block w-full min-h-[35px] min-w-[140px] text-[11px] text-center uppercase border bg-black text-white mb-[10px]">
              Reset Password
            </button>
            <button
              onClick={() => {
                setPage(1);
              }}
              className="block w-full min-h-[35px] min-w-[140px] text-[11px] text-center uppercase"
            >
              Back
            </button>
          </>
        )}
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 20px 42px 0 42px;
  margin-bottom: 100px;
  min-height: 70vh;
  flex: 1 0 auto;
`;

const Form = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    min-width: 380px;
    width: 30%;
  }
`;
