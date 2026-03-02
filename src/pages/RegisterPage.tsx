import { AuroraBackground } from "@/components/lightswind/aurora-background";
import { Button } from "@/components/lightswind/button";
import { Input } from "@/components/lightswind/input";
import { motion } from "framer-motion";
import { Mail, Lock, Car, User } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen py-16"
      >
        <div className="w-full max-w-md mx-auto rounded-2xl p-8 shadow-input bg-black/40 backdrop-blur-sm border border-white/20">
          <div className="flex justify-center items-center mb-6">
            <Car className="w-12 h-12 text-white" />
            <h2 className="font-bold text-3xl text-white ml-2">AutoLux</h2>
          </div>
          <p className="text-neutral-300 text-sm max-w-sm text-center mb-8">
            Create an account to start your journey with the finest vehicles.
          </p>

          <form className="my-8" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <Input id="name" placeholder="John Doe" type="text" className="pl-10 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-blue-500"/>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <Input id="email" placeholder="you@company.com" type="email" className="pl-10 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-blue-500"/>
                </div>
            </div>
            <div className="mb-4">
                 <label htmlFor="password"className="block text-sm font-medium text-neutral-300 mb-2">Password</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <Input id="password" placeholder="••••••••" type="password" className="pl-10 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-blue-500"/>
                </div>
            </div>
            <div className="mb-8">
                 <label htmlFor="confirmPassword"className="block text-sm font-medium text-neutral-300 mb-2">Confirm Password</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                    <Input id="confirmPassword" placeholder="••••••••" type="password" className="pl-10 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-blue-500"/>
                </div>
            </div>

            <Button
              className="bg-gradient-to-br relative group/btn from-blue-600 to-indigo-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:from-blue-700 hover:to-indigo-700"
              type="submit"
            >
              Sign up &rarr;
              <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            </Button>
            
             <p className="text-center text-sm text-neutral-400 mt-8">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400 hover:underline">
                    Sign in
                </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default RegisterPage;
