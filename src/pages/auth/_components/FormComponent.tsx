import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock } from "lucide-react";
import { Input } from '@/components/ui/input'
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator'
import googleIcon from '@/assets/g.svg'
const FormComponent = () => {

    const formSchema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
    })

    type SignUpFormValues = z.infer<typeof formSchema>;

    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: SignUpFormValues) => {
        console.log('Form ', values)
    }

    return (
        <>

            <div className="my-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 font-ubuntu">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <User className="w-[22px] h-[22px] absolute top-[12px] left-3 text-gray-400" />
                                    <FormControl>
                                        <Input placeholder="Name" {...field} className="h-[45px] pl-10 rounded-xl" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <Mail className="w-[22px] h-[22px] absolute top-[12px] left-3 text-gray-400" />
                                    <FormControl>
                                        <Input placeholder="Enter Email" {...field} className="h-[45px] pl-10 rounded-xl" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <Lock className="w-[22px] h-[22px] absolute top-[12px] left-3 text-gray-400" />
                                    <FormControl>
                                        <Input placeholder="Enter Password" {...field} className="h-[45px] pl-10 rounded-xl" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between my-7 ">
                            <div className="remember flex items-center">
                                <Checkbox className="mr-1" /> <span className="text-gray-400 text-sm">Remember me</span>
                            </div>
                            <Link to="/auth/login">
                                <p className="text-gray-400 text-sm">Already have an account? <span className="text-blue-500 cursor-pointer">Login</span></p>
                            </Link>
                        </div>
                        <div>
                            <Button type="submit" className="w-full h-[45px] cursor-pointer">Sign Up</Button>
                        </div>
    
                            <div className="relative my-5">
                                <Separator/>
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2">
                                OR
                                </span>
                            </div>
                    </form>
                </Form>
                <Button type="submit" variant="outline" className="w-full h-[45px] cursor-pointer d-flex items-center"><img className="h-[35px]" src={googleIcon} alt="Goo icon" /></Button>
            </div>
        </>
    )
};

export default FormComponent;