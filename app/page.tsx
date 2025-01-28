"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const MotionButton = motion(Button);
const MotionAvatar = motion(Avatar);
const MotionHeader = motion(CardHeader);
const MotionContent = motion(CardContent);

export default function Home() {
  const [isAvatarReduced, setIsAvatarReduced] = useState(false);
  const [showEmailCard, setShowEmailCard] = useState(false);

  const handleButtonClick = () => {
    setIsAvatarReduced(!isAvatarReduced);
    // Add a slight delay before showing the email card
    setTimeout(() => {
      setShowEmailCard(!showEmailCard);
    }, 300);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-6 bg-slate-800 relative p-4">
    <Card className="flex justify-center items-center bg-white w-full max-w-[500px] relative min-h-[400px]  p-4 sm:p-6 md:p-8">
    <MotionHeader
className={`flex justify-start items-center w-full absolute ${
  isAvatarReduced
    ? "top-0 left-0 flex-row"
    : "flex-col gap-6"
}`}
animate={{
  y: isAvatarReduced ? 0 : "50%",
  translateY: isAvatarReduced ? 0 : "-50%",
}}
transition={{ duration: 0.5 }}
>
<MotionAvatar
  className={`${
    isAvatarReduced
      ? "w-16 h-16 sm:size-20 md:size-24"
      : "w-32 h-32 sm:size-40 md:size-48"
  }`}
  animate={{
    scale: isAvatarReduced ? 0.9 : 1,
  }}
  transition={{ duration: 0.5 }}
>
  <AvatarImage src="assets/profile-pic.png" alt="Profile" />
  <AvatarFallback>AB</AvatarFallback>
</MotionAvatar>
<MotionContent
  className={`text-4xl font-bold flex justify-center items-center text-center ml-4 text-nowrap ${
    isAvatarReduced
      ? "text-2xl sm:text-3xl md:text-4xl"
      : "text-4xl mt-4 sm:text-5xl md:text-6xl"
  }`}
  animate={{
    scale: isAvatarReduced ? 0.7 : 1,
  }}
  transition={{ duration: 0.5 }}
>
  Check in
</MotionContent>
<CardFooter
  className={`${
    isAvatarReduced
      ? "ml-auto mt-2 sm:mt-0"
      : "mt-6 sm:mt-8 md:mt-10"
  }`}
>
  <MotionButton
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    variant="outline"
    onClick={handleButtonClick}
    className="text-sm sm:text-base md:text-lg"
  >
    {isAvatarReduced ? "Back" : "Login"}
  </MotionButton>
</CardFooter>
</MotionHeader>
  

        <AnimatePresence>
          {showEmailCard && (
            <motion.div
              className="flex justify-center items-center flex-col w-full h-3/5 absolute bottom-0 bg-white border-purple-700 border-t-2 rounded-t-lg p-1 sm:p-2"
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                duration: 0.5,
              }}
            >
              <MotionHeader className="text-2xl font-bold mb-4 sm:text-3xl">
                Enter your email
              </MotionHeader>
              <CardContent className="w-full">
                <Input
                  placeholder="your.email@example.com"
                  className="w-full text-sm sm:text-base"
                  type="email"
                />
              </CardContent>
              <CardFooter>
                <MotionButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="default"
                  className="w-full py-2 sm:py-3 text-sm sm:text-base"
                >
                  Continue
                </MotionButton>
              </CardFooter>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}
