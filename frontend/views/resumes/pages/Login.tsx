import { useAuth } from "Frontend/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [slug, setSlug] = useState('');
    const [hasError, setHasError] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = async () => {
        console.log('handleLoginClick started');
        const { defaultUrl, error, redirectUrl } = await login(username, password);
        console.log('login result:', { defaultUrl, error, redirectUrl });
        if (error) {
            setHasError(Boolean(error));
        } else {
            const baseUrlPattern = /^(?:[a-z]+:)?\/\/[^/]+/i;
            let newUrl = '/login';
            if (slug !== '') {
                newUrl = `/resume/${slug}`;
            } else if (redirectUrl?.match(baseUrlPattern)) {
                newUrl = redirectUrl.replace(baseUrlPattern, '');
            } else if (defaultUrl?.match(baseUrlPattern)) {
                newUrl = defaultUrl.replace(baseUrlPattern, '');
            }
            navigate(newUrl);
        }
    };

    return(
        <div className="bg-gray-100 w-full h-[700px]">
            <div className="bg-orange-600 text-white text-center font-title lowercase px-6 py-2 text-2xl">
                Welcome to interactivecv
            </div>
            <div className="p-8 font-paragraph lowercase grid grid-cols-2 content-center place-content-evenly gap-x-3 gap-y-1">
                <label className="justify-self-end py-2 px-3" htmlFor="username">
                    Username*
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
                    Password*
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
                    Candidate code*
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
                    value="login"
                    onClick={handleLoginClick}
                >
                    Log In
                </button>
                <p className="text-sm text-red-700 uppercase place-self-center col-span-2 mt-4" hidden={!hasError}> Wrong username or password</p>
            </div>
        </div>
    )
}
