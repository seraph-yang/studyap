"use client";
import { quizCreationSchema } from "@/schemas/forms/quiz";
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "../ui/separator";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import LoadingQuestions from "../LoadingQuestions";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const subjects = [
  {
    value: "ap human geography",
    label: "AP Human Geography",
  },
  {
    value: "ap psychology",
    label: "AP Psychology",
  },
  {
    value: "ap united states history",
    label: "AP United States History",
  },
  {
    value: "ap biology",
    label: "AP Biology",
  },
  {
    value: "ap chemistry",
    label: "AP Chemistry",
  },
  {
    value: "ap art history",
    label: "AP Art History",
  },
  {
    value: "ap computer science p",
    label: "AP Computer Science P",
  },
  {
    value: "ap computer science a",
    label: "AP Computer Science A",
  },
]

type Props = {
  topic: string;
};

type Input = z.infer<typeof quizCreationSchema>;

const QuizCreation = ({ topic: topicParam }: Props) => {
  const router = useRouter();
  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const { toast } = useToast();
  const { mutate: getQuestions, isLoading } = useMutation({
    mutationFn: async ({ amount, topic, type, unit }: Input) => {
      const response = await axios.post("/api/game", { amount, topic, type, unit });
      return response.data;
    },
  });

  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      topic: topicParam,
      type: "mcq",
      amount: 3,
      unit: 1,
    },
  });
  
  const onSubmit = async (data: Input) => {
    setShowLoader(true);
    getQuestions(data, {
      onError: (error) => {
        setShowLoader(false);
        if (error instanceof AxiosError) {
          if (error.response?.status === 500) {
            toast({
              title: "Error",
              description: "Something went wrong. Please try again later.",
              variant: "destructive",
            });
          }
        }
      },
      onSuccess: ({ gameId }: { gameId: string }) => {
        setFinishedLoading(true);
        setTimeout(() => {
          if (form.getValues("type") === "mcq") {
            router.push(`/play/mcq/${gameId}`);
          } else if (form.getValues("type") === "open_ended") {
            router.push(`/play/open-ended/${gameId}`);
          }
        }, 2000);
      },
    });
  };
  form.watch();

  if (showLoader) {
    return <LoadingQuestions finished={finishedLoading} />;
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Creation</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="w-screen">Subject</FormLabel>
                    <FormControl>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[800px] justify-between"
                          >
                            {value
                              ? subjects.find((subjects) => subjects.value === value)?.label
                              : "Select a subject..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[800px] p-0">
                          <Command>
                            <CommandInput placeholder="Search subject..." />
                            <CommandEmpty>No subject found.</CommandEmpty>
                            <CommandGroup>
                              {subjects.map((subjects) => (
                                <CommandItem
                                  key={subjects.value}
                                  onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                    form.setValue("topic", currentValue)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      value == subjects.value ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {subjects.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormDescription>
                      Please provide any topic you would like to be quizzed on
                      here. 
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a unit"
                        type="number"
                        {...field}
                        onChange={(e) => {
                          form.setValue("unit", parseInt(e.target.value));
                        }}
                        min={1}
                        max={12}
                      />
                    </FormControl>
                    <FormDescription>
                      You can choose which unit you would like to practice.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questions</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="How many questions?"
                        type="number"
                        {...field}
                        onChange={(e) => {
                          form.setValue("amount", parseInt(e.target.value));
                        }}
                        min={1}
                        max={15}
                      />
                    </FormControl>
                    <FormDescription>
                      You can choose how many questions you would like to be
                      quizzed on here.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <Button
                  variant={
                    form.getValues("type") === "mcq" ? "default" : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-l-lg"
                  onClick={() => {
                    form.setValue("type", "mcq");
                  }}
                  type="button"
                >
                  <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                </Button>
                <Separator orientation="vertical" />
                {
                <Button
                  variant={
                    form.getValues("type") === "." 
                      ? "default"
                      : "secondary"
                  } 
                  className="w-1/2 rounded-none rounded-r-lg"
                  onClick={() => form.setValue("type", ".")}
                  type="button"
                > {/* change to open_ended */}
                  <BookOpen className="w-4 h-4 mr-2" /> Open Ended (coming soon)
                </Button>
                }
              </div>
              <Button disabled={isLoading} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCreation;
