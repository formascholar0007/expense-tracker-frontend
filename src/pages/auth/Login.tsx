import AuthComponents from "./_components/AuthComponents";
import LoginFormComponent from "./_components/LoginFormComponent";


const LoginPage = () => {
    return (
        <>
            <AuthComponents
                title="Login"
                description="Login to your account"
                form={<LoginFormComponent/>}
            />
        </>
    )
};

export default LoginPage;