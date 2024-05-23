import { useSlug } from "Frontend/SlugContext";
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { LeftArrow } from "../icons/LeftArrow";

export const Navbar = () => {
    const { slug } = useSlug();
    const location = useLocation();
    return(
        <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-7xl">
                <div className="w-full py-1 px-3 bg-gray-100">
                    {location.pathname.includes("/about") ? (
                        <NavLink className="flex flex-row items-center group relative" to={`/resume/${slug}`}>
                            <div className="absolute left-[14px] group-hover:animate-bounceLeft transition-all flex items-center">
                                <LeftArrow/>
                            </div>
                            <div className="lowercase font-title lg:text-xl font-thin group-hover:underline ml-12 transition-all duration-300">
                                back
                            </div> 
                        </NavLink>
                    ) : (
                        <NavLink className="ml-12 lowercase font-title lg:text-xl font-thin hover:underline" to='/about'>
                            about
                        </NavLink>
                    )}
                </div>
                <Outlet />
                <div className='w-full h-9 bg-orange-600 px-6 py-2' />
            </div>
        </div>
)}