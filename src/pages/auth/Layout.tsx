import { Outlet } from "react-router-dom";
import image from '../../assets/dummy.jpg';
const AuthLayout = () => {
    console.log("counter");
    return (
        <>
            <div className="flex h-screen overflow-hidden p-[5px] justify-between height-[100vh]">
                <div className="flex items-center justify-center xl:w-[50%] w-full">
                    <div className="md:w-[50%]">
                        <Outlet />
                    </div>
                </div>
                <div className="md:w-[50%] hidden xl:block">
                    <img src={image} className="w-[100%] rounded-xl object-cover h-full" alt="" />
                </div>
            </div>
        </>
    )
};

export default AuthLayout;
