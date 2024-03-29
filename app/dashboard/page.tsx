import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Navbar from "@/components/Navbar"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
const DashboardPage = () => {
    return(
        <>
            <Navbar />
            <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
            <div>
                <div className="mb-6 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                    Dashboard
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                    Select a question type to begin practicing!
                    </p>
                </div>
                </div>
                {/* steps */}

                <div className="flex items-center justify-center">
                <div className="flex flex-col gap-6 md:flex-row">
                    <Link href="/mcq">
                        <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                            <CardTitle className="flex space-x-4">Multiple Choice <ArrowRightIcon className="pl-2"/></CardTitle>
                            <CardDescription className="mb-3 text-center">
                                Practice answering AP-stype multiple choice questions generated by specialized AI models.
                            </CardDescription>
                        </Card>
                    </Link>
                    <Link href="/frq">
                        <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                            <CardTitle className="flex space-x-4">Written Free Response <ArrowRightIcon className="pl-2"/></CardTitle>
                            <CardDescription className="mb-3 text-center">
                                Practice writing free response questions and have them graded by a custom-trained AI.
                            </CardDescription>
                        </Card>
                    </Link>
                    <Link href="/mcq">
                        <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                            <CardTitle className="flex space-x-4">Audio Free Response <ArrowRightIcon className="pl-2"/></CardTitle>
                            <CardDescription className="mb-3 text-center">
                                Practice speaking questions, a key component of language AP classes.
                            </CardDescription>
                        </Card>
                    </Link>
                </div>
            </div>
            <div className="mx-auto max-w-2xl sm:text-center mt-20">
                    <p className="mt-4 text-lg text-gray-600">
                    Progress
                    </p>
                </div>
          </div>
          </MaxWidthWrapper>
        </>
    )
}

export default DashboardPage