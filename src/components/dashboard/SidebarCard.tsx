"use client"
import Link from "next/link";

import React from "react";

import { Calendar } from "@/components/ui/calendar"

import { UserCircle2, CalendarDays, ListTodo, HeartHandshake } from "lucide-react";
import { Instagram, Github, Linkedin } from "lucide-react";

type Props = {};

const SidebarCard = (props: Props) => {
   const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="p-8">
        <div className="rounded flex align-bottom p-3 hover:bg-zinc-800 hover:opacity-75 space-x-4">
            <UserCircle2 size={20} color="white" />
            <Link className="text-white hover:opacity-75" href="/">View your profile</Link>
        </div>
        <div className="rounded flex align-bottom p-3 hover:bg-zinc-800 hover:opacity-75 space-x-4">
            <ListTodo size={20} color="white" />
            <Link className="text-white hover:opacity-75" href="https://apstudents.collegeboard.org/course-index-page">View AP courses</Link>
        </div>
        <div className="rounded flex align-bottom p-3 hover:bg-zinc-800 hover:opacity-75 space-x-4">
            <CalendarDays size={20} color="white" />
            <Link className="text-white hover:opacity-75" href="https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates">View test dates</Link>
        </div>
        <div className="rounded flex align-bottom p-3 hover:bg-zinc-800 hover:opacity-75 space-x-4 mb-10">
            <HeartHandshake size={20} color="white" />
            <Link className="text-white hover:opacity-75" href="/">Make suggestions</Link>
        </div>
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border text-white"
        />{/*=
        <div className="align-middle">
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="5GUZSU9B6PVMC" />
                <input type="hidden" name="no_recurring" value="0" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://pics.paypal.com/00/s/NmFmMTI3MjktZDFkMS00YzJjLTliMzctZTVmMzMyYjM5OGVi/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
  </div>*/}
        <div className="flex mx-auto space-x-8 justify-center mt-10">
            <Instagram size={15} color="white" />
            <Github size={15} color="white" />
            <Linkedin size={15} color="white" />
        </div>
    </div>
  )
}

export default SidebarCard;