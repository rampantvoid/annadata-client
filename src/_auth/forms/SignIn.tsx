import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Credentials {
  email: string;
  password: string;
}

const SignIn = () => {
  const [creds, setCreds] = useState<Credentials>({ email: "", password: "" });

  const onType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    // TODO: Send auth request
  };
  return (
    <div className="w-full flex flex-col">
      <p className="font-bold text-4xl">
        Welcome <br /> Back!
      </p>
      <p className="text-muted-foreground font-semibold text-lg mt-2">
        {" "}
        <span className="text-primary">Sign in</span> to your account
      </p>

      <div className="w-full flex flex-col mt-5 gap-3">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="focus:!ring-0 focus:!ring-offset-0 py-6 border-secondary transition-shadow focus:shadow-primary focus:shadow-md"
          value={creds.email}
          onChange={onType}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="focus:!ring-0 focus:!ring-offset-0 py-6 border-secondary transition-shadow focus:shadow-primary focus:shadow-md"
          value={creds.password}
          onChange={onType}
        />
        <Button className="py-6 text-lg hover:bg-secondary" onClick={onSubmit}>
          Sign in
        </Button>
      </div>
      <div className="mt-3 flex w-full items-center gap-2">
        <div className="h-[2px] bg-secondary w-full"></div>
        OR
        <div className="h-[2px] bg-secondary w-full"></div>
      </div>
      <p className="italic text-center">
        Don't have an account?
        <Link to="/register">
          <span className="text-primary"> Register Now</span>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
