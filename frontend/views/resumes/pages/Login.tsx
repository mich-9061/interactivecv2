import { IntegerField } from "@hilla/react-components/IntegerField.js";
import { LoginForm, LoginFormElement } from "@hilla/react-components/LoginForm.js";
import { LoginOverlay } from "@hilla/react-components/LoginOverlay.js";
// import { useAuth } from "Frontend/auth";
import { LoginController } from "Frontend/generated/endpoints";
import { useState } from "react";
import { Navigate, redirect } from "react-router-dom";

export default function Login() {
    // const { state, login } = useAuth();
    const [ error, setError] = useState<string>();
    const [url, setUrl] = useState<string>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [slug, setSlug] = useState('');

    // if (state.user && url) {
    //     const path = new URL(url, document.baseURI).pathname;
    //     return <Navigate to={path} replace />;
    // }

    const handleSubmit = () => {
        LoginController.login(username, password, slug).then(response => {
            console.log("RESPONSE: ", response);   
            if (response?.startsWith("LoginError")) {
                console.error(response);
                setError("Wrong username or password");
            } else {
                console.log("TRY TO REDIRECT: "); 
                redirect('resume/gmandolino' ?? '/' );
            }
        }).catch(error => {
            console.error("Error calling LoginController: ", error);
            setError("Something went wrong.");
        }).finally(() => {
            LoginController.getAuthenticatedUser().then(response => {
                console.log("RESPONSE: ", response);
            }).catch(error => {
                console.error("Error calling LoginController: ", error);
                setError("Something went wrong.");
            });
        })
    };

    // const handleSubmit = () => {
    //     LoginController.login(username, password, slug).then(response => {
    //         if (response?.statusCodeValue === 400) {
    //             console.error(response);
    //             setError("Wrong username or password");
    //         } else {
    //             redirect(slug ? `/resume/${slug}` : '/');
    //         }
    //     }).catch(error => {
    //         console.error("Error calling LoginController: ", error);
    //         setError("Something went wrong.");
    //     });
    // };

    return(
        <div className="bg-gray-100 w-full h-[700px]" 
            // action="login" method="post" onSubmit={handleSubmit}
            >
            <div className="bg-orange-600 text-white text-center font-title lowercase px-6 py-2 text-2xl">
                Welcome to interactivecv
            </div>
            <div className="p-8 font-paragraph lowercase grid grid-cols-2 content-center place-content-evenly gap-x-3 gap-y-1">
                <label className="justify-self-end py-2 px-3" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-paragraph lowercase"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    required 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="justify-self-end py-2 px-3" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-paragraph lowercase"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    required 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className="justify-self-end py-2 px-3" htmlFor="slug">
                    Candidate code
                </label>
                <input
                    className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-paragraph lowercase"
                    id="slug"
                    name="slug"
                    type="text"
                    placeholder="Enter candidate code"
                    value={slug}
                    required 
                    onChange={(e) => setSlug(e.target.value)}
                />
                <button
                    className="font-title mt-5 uppercase col-span-2 w-1/2 justify-self-center bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    // type="submit"
                    onClick={handleSubmit}
                    value="login"
                >
                    Log In
                </button>
            </div>
        </div>
        // <div className="bg-gray-100 w-full h-[700px]">
        //     <div className="bg-orange-600 text-white text-center font-title lowercase px-6 py-2 text-2xl">
        //         Welcome to interactivecv
        //     </div>
        //     <div className="p-8 font-paragraph lowercase grid grid-cols-2 content-center place-content-evenly gap-x-3 gap-y-1">
        //         <LoginOverlay opened noAutofocus noForgotPassword title="Welcome to interactivecv" color="red">
        //             <IntegerField slot="custom-form-area" name="slug" label="Candidate code" />
        //         < Overlay>
        //     </div>
        // </div>
    )
}