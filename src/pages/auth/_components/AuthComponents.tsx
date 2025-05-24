import Description from "@/components/custom/Description";
import Heading from "@/components/custom/Heading";
import type { AuthProps } from "@/interfaces/Auth.types";
const AuthComponents = ({title, description, form}: AuthProps) => {
    return (
        <>
            <div className="main-wrapper h-[90%] flex flex-col">
                <div className="heading space-y-1">
                    <Heading
                        title={title}
                        className="text-3xl font-[800] font-ubuntu"
                    />
                    <Description
                        description={description}
                        className="text-md text-gray-400 font-ubuntu"
                    />
                </div>
                <div className="form">
                   {form}
                </div>
            </div>
        </>
    )
};

export default AuthComponents;