import { Form } from "react-router-dom";

// library
import { FaUserPlus } from "react-icons/fa6";

//  assets
import illustration from "../assets/illustration.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className="accent">Your money</span>
                </h1>
                <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
                <Form method="post">
                    <input type="hidden" name="_action" value="newUser" />
                    <input type="text" name="userName" maxLength={32} required placeholder="What is your name?" aria-label="Your name" autoComplete="given-name" />
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <FaUserPlus width={10} />
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="Person with money" width={600} />
        </div>
    );
}

export default Intro;