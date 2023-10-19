import SignInButton from "@/components/SignInButton";
import { AnimatePresence, motion } from "framer-motion";
import { gradient } from "@/components/Gradient";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  Button
} from "@/components/ui/button";
import {
  Input
} from "@/components/ui/input";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import Link from "next/link";
import SquigglyLines from "../components/SquigglyLines";

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-black sm:text-7xl">
          Redefining AP practice {" "}
          <span className="relative whitespace-nowrap text-cyan-600">
            <SquigglyLines />
            <span className="relative">through AI solutions.</span>
          </span>{" "}
        </h1>
        <h2 className="mx-auto mt-20 mb-20 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          We help AP students achieve mastery and empower them to succeed through innovative and personalized study solutions.
        </h2>
        <div className="flex space-x-2 mb-20">
          <SignInButton text="Get started" />
          <Button variant="outline" type="button">Learn more</Button>
        </div>
        <div className="bg-black w-screen">
          <h1 className="mx-auto max-w-4xl mb-3 mt-20 font-display text-5xl font-bold sm:text-yellow-100">
            Designed to help your AP journey. Conquer all 38 AP courses with our AI-generated practice questions!
          </h1>
          {/*<Image className="mb-12" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/s.png" alt="swiggles" />*/}
        </div>
        <div className="bg-black w-screen flex space-x-5 outline-none p-20 justify-center">
          <Card className="bg-gray-500 max-w-sm outline-none p-5">
            <CardTitle className="sm:text-white text-5xl font-bold">1000+</CardTitle>
            <CardDescription className="sm:text-white text-xl">AP style questions</CardDescription>
          </Card>
          <Card className="bg-gray-500 max-w-sm outline-none p-5">
            <CardTitle className="sm:text-white text-5xl font-bold">38</CardTitle>
            <CardDescription className="sm:text-white text-xl">AP courses to study</CardDescription>
          </Card>
          <Card className="bg-gray-500 max-w-sm outline-none p-5">
            <CardTitle className="sm:text-white text-5xl font-bold">100+</CardTitle>
            <CardDescription className="sm:text-white text-xl">teachers ensuring accuracy</CardDescription>
          </Card>
          <Card className="bg-gray-500 max-w-sm outline-none p-5">
            <CardTitle className="sm:text-white text-5xl font-bold">1500+</CardTitle>
            <CardDescription className="sm:text-white text-xl">hours of development</CardDescription>
          </Card>
        </div>
        <div>
          <div className="flex space-x-12 mt-20">
            <div className="text-left max-w-sm">
              <h2 className="mx-auto mt-20 mb-5 max-w-xl text-3xl sm:text-black font-bold leading-7">Personalized Learning Plans Tailored to You</h2>
              <p>StudyAP uses advanced AI to identify your weak areas and craft a learning plan just for you.</p>
            </div>
            <Image className="mb-12" width={0} height={0} sizes="100vw" style={{ width: '50%', height: 'auto' }} src="/p1.png" alt="swiggles" />
          </div>
          <div className="flex space-x-5">
            <Image className="mb-12" width={0} height={0} sizes="100vw" style={{ width: '50%', height: 'auto' }} src="/p2.png" alt="swiggles" />
            <div className="text-left max-w-sm">
              <h2 className="mx-auto mt-20 mb-5 max-w-xl text-3xl sm:text-black font-bold leading-7">Teacher-Verified Content for Ultimate Reliability</h2>
              <p>Practice with confidence knowing that all questions are verified by expert AP teachers.</p>
            </div>
          </div>
        </div>
        <div className="bg-black w-screen">
          <h2 className="mx-auto mt-20 mb-6 font-bold max-w-xl text-2xl sm:text-cyan-200 text-cyan-200 leading-7">
            Stay in the loop
          </h2>
          <h2 className="mx-auto mb-6 max-w-xl text-l sm:text-white leading-7">
            Sign up for our newsletter to get the latest StudyAP updates, success stories, and more.
          </h2>
          <div className="flex max-w-sm mx-auto mb-20 space-x-2">
            <Input type="email" placeholder="Email" />
            <Button className="bg-cyan-200 sm:text-black hover:bg-cyan-100" type="submit">Subscribe</Button>
          </div>
        </div>
        <div className="bg-gray-600 w-screen flex space-x-5 outline-none p-10 justify-center">
          <Card className="bg-gray-500 max-w-sm outline-none p-5">
            <div className="flex space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="sm:text-white">Sirooi Cao</CardTitle>
                <CardDescription className="sm:text-white">AP Student</CardDescription>
              </div>
            </div>
            <CardContent className="sm:text-white mt-12">
              <p>
              "The AI-generated questions make me feel prepared for any challenge!"
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-500 max-w-sm outline-none p-5">
            <div className="flex space-x-2">
              <Avatar>
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="sm:text-white">Mr. Cao</CardTitle>
                <CardDescription className="sm:text-white">AP Teacher</CardDescription>
              </div>
            </div>
            <CardContent className="sm:text-white mt-12">
              <p>
              "StudyAP has been a game-changer for my AP students’ success."
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-500 max-w-sm outline-none p-5">
            <div className="flex space-x-2">
              <Avatar>
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="sm:text-white">Sirooi Cao Jr.</CardTitle>
                <CardDescription className="sm:text-white">AP Student</CardDescription>
              </div>
            </div>
            <CardContent className="sm:text-white mt-12">
              <p>
              "StudyAP's personalized learning plans have transformed my study approach"
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="bg-black w-screen text-left">
          <div className="flex space-x-2 justify-center mx-auto">
            <h2 className="mt-20 mb-6 font-bold max-w-xl text-2xl sm:text-yellow-50 text-cyan-600 leading-7">
              StudyAP FAQs
            </h2>
          </div>
          <div className="flex space-x-5 justify-center mx-auto">
            <div className="max-w-md">
              <h2 className="sm:text-yellow-50 font-bold">How does the AI generate questions?</h2>
              <h2 className="sm:text-cyan-200">Our AI leverages the OpenAI API and uses GPT-3.5 to create sample problems that are AP specialized. We then verify these questions with teachers to ensure accuracy!</h2>
            </div>
            <div className="max-w-md">
              <h2 className="sm:text-yellow-50 font-bold">Is AP Hub suitable for self-study?</h2>
              <h2 className="sm:text-cyan-200">Absolutely! AP Hub is designed to be a powerful resource for both classroom learning and self-study.</h2>
            </div>
          </div>
          <div className="flex space-x-5 justify-center mx-auto mt-12 mb-20">
            <div className="max-w-md">
              <h2 className="sm:text-yellow-50 font-bold">How does the AI generate questions?</h2>
              <h2 className="sm:text-cyan-200">Our AI analyzes course material and creates customized questions aligned with the AP curriculum.</h2>
            </div>
            <div className="max-w-md">
              <h2 className="sm:text-yellow-50 font-bold">Is AP Hub suitable for self-study?</h2>
              <h2 className="sm:text-cyan-200">Absolutely! AP Hub is designed to be a powerful resource for both classroom learning and self-study.</h2>
            </div>
          </div>
        </div>
        <div className="bg-cyan-200 w-screen flex justify-center space-x-5 pt-10 pb-3">
          <InstagramLogoIcon />
          <TwitterLogoIcon />
          <LinkedInLogoIcon />
        </div>
        <div className="bg-cyan-200 w-screen justify-center pb-10">
          <p>&copy; StudyAP 2023</p>
        </div>
      </main>
      
    </div>
  );
}
