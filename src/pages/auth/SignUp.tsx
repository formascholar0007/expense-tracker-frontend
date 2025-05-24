import AuthComponents from "./_components/AuthComponents";
import SignUpFormComponent from "./_components/SignUpFormComponent";


const SignUpPage = () => {
    return (
        <>
            <AuthComponents
                title="Create Account"
                description="Enter your details to create a new account"
                form={<SignUpFormComponent />}
            />
        </>
    )
};

export default SignUpPage;