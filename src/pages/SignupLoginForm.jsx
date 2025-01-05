import './CSS/SignupLogin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CategoryProducts } from '../context/Context';

function SignupLoginForm() {
    const { setlogin } = useContext(CategoryProducts);
    const [userstatus, setstatus] = useState("Sign Up");
    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    //handle form submission
    const onSubmit = async (data) => {
        console.log("form data is:", data);

        // Simulate an API call or async operation
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setlogin(true); // Update the login state
        alert('Login successful! You can now add products to the cart.');
        reset(); // Reset the form after completion
    };


    return (
        <>
            <form action="" data-aos="flip-right" onSubmit={handleSubmit(onSubmit)} className='flex-center'>
                <div className="form-container">
                    <h2>{userstatus === "Sign Up" ? "Sign Up" : "Login"}</h2>
                    {userstatus === "Sign Up" && <div className="input-fields">
                        <input className='input' type="text" placeholder="Enter Name" {...register("name", {
                            required: "Name is required",
                            minLength: { value: 5, message: "Name should be 5 characters long" },
                            maxLength: { value: 20, message: "Name must be less than 20 characters." }
                        })} />
                        {errors.name && <p className="error-msg">{errors.name.message}</p>}
                    </div>}

                    <div className="input-fields">
                        <input className='input' type="email" placeholder="Enter Email" {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Enter a valid email address"
                            }
                        })} />
                        {errors.email && <p className="error-msg">{errors.email.message}</p>}
                    </div>

                    <div className="input-fields">
                        <input className='input' type="password" placeholder="Enter password" {...register("password", {
                            required: "password is required",
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Password must include at least 8 characters, one uppercase, one lowercase, one number, and one special character"
                            }
                        })} />
                        {errors.password && <p className="error-msg">{errors.password.message}</p>}
                    </div>

                    <div className="btn-signup">
                        <button>{isSubmitting ? "Submitting...." : userstatus === "Sign Up" ? "Register" : "Login"}</button>
                    </div>

                    {userstatus === "Sign Up" &&
                        <div className="acount">
                            <p>Already have an acount? <span onClick={() => setstatus("Login")}>Login here</span></p>
                        </div>
                    }

                    {userstatus === "Login" && <div className="acount">
                        <p>Create a new acount? <span onClick={() => setstatus("Sign Up")}>click here</span></p>
                    </div>}

                </div>
            </form>
        </>
    )
}
export default SignupLoginForm;