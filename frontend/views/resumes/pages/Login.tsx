import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [slug, setSlug] = useState('');

    const handleLogin = () => {
        // Qui puoi gestire la logica di autenticazione, ad esempio inviare una richiesta API al tuo backend
        console.log('Username:', username);
        console.log('Password:', password);
      };

    return(
        <div className="bg-gray-100 w-full h-[700px]">
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
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label className="justify-self-end py-2 px-3" htmlFor="password">
                Password
            </label>
            <input
                className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-paragraph lowercase"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={username}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label className="justify-self-end py-2 px-3" htmlFor="slug">
                Candidate code
            </label>
            <input
                className="shadow border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-paragraph lowercase"
                id="slug"
                type="text"
                placeholder="Enter candidate code"
                value={username}
                onChange={(e) => setSlug(e.target.value)}
            />
            <button
                className="font-title mt-5 uppercase col-span-2 w-1/2 justify-self-center bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleLogin}
            >
                Log In
            </button>
        </div>
      </div>
    )
}