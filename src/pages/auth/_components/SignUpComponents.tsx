import Description from "@/components/custom/Description";
import Heading from "@/components/custom/Heading";
import FormComponent from "./FormComponent";

const SignUpComponents = () => {
    return (
        <>
            <div className="main-wrapper h-[90%] flex flex-col">
                <div className="heading space-y-1">
                    <Heading
                        title="Create an account."
                        className="text-4xl font-[500] font-ubuntu"
                    />
                    <Description
                        description="Enter your details to create an account."
                        className="text-lg text-gray-400 font-ubuntu"
                    />
                </div>
                <div className="form">
                    <FormComponent />
                </div>
            </div>
        </>
    )
};

export default SignUpComponents;