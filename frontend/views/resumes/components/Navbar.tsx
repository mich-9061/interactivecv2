import { useSlug } from "Frontend/SlugContext";
import { NavLink, Outlet } from "react-router-dom"

export const Navbar = () => {
    const { slug } = useSlug();
    return(
        <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-7xl">
                <div className="w-full flex flex-row justify-between py-1 px-28 bg-gray-100">
                    <NavLink className="lowercase font-title lg:text-xl font-thin hover:underline" to={`/resume/${slug}`}>
                        Interactive CV
                    </NavLink>
                    <NavLink className="lowercase font-title lg:text-xl font-thin hover:underline" to='/about'>
                        about
                    </NavLink>
                </div>
                <Outlet />
                <div className='w-full h-9 bg-orange-600 px-6 py-2' />
            </div>
        </div>
)}