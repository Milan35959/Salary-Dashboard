import { CalendarDay } from '@/components/CalenderDay'
import { Button } from '@/components/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {  FileText, Plus, Search, Shield } from 'lucide-react'
import React from 'react'
interface CustomSelectProps extends SelectProps {
  indicatorClassName?: string;
}
function Calender() {
  return (
    <div className="space-y-6 ">
            <div className=" flex items-center justify-between  ">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                  <Shield className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                  <FileText className="h-4 w-4" />
                </Button>
                <div className="relative ">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="h-10 w-[100px]  md:w-[300px]  rounded-full border border-input bg-background pl-9 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 6H20M4 12H20M4 18H12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="mb-6 text-3xl font-[1rem]]">264.00 hrs / $2,647</h2>

              <div className="mb-8 grid grid-cols-3 gap-1 ">
                  <div className="text-sm text-gray-200">Work day
                <div className="rounded-xl bg-slate-600 flex items-center h-4 p-4">
                  <div className="font-semibold">167 hrs</div>
                </div>
                </div>
                  <div className="text-sm">Truancy
                <div className="rounded-xl bg-gray-800 p-4 h-4 flex items-center text-white">
                  <div className="font-semibold">43 hrs</div>
                </div>
                </div>
                  <div className="text-sm text-gray-700">Vocation
                <div className="rounded-xl bg-gray-300 h-4 p-4 flex items-center">
                  <div className="font-semibold">74 hrs</div>
                </div>
                </div>
              </div>

              <div className="mb-4 flex items-center  justify-between">
                <Select defaultValue="december">
                  <SelectTrigger className="w-[180px] cursor-pointer bg-white">
                    <SelectValue placeholder="December" />
                  </SelectTrigger>
                  <SelectContent>
              <ScrollArea className="max-h-[200px] w-full overflow-y-auto">
                    <SelectItem value="november">November</SelectItem>
                    <SelectItem value="december">December</SelectItem>
                    <SelectItem value="january">January</SelectItem>
                    <SelectItem value="february">February</SelectItem>
                    <SelectItem value="march">March</SelectItem>
                    <SelectItem value="april">April</SelectItem>
                    <SelectItem value="may">May</SelectItem>
                    <SelectItem value="june">June</SelectItem>
                    <SelectItem value="july">July</SelectItem>
                    <SelectItem value="august">August</SelectItem>
                    <SelectItem value="september">September</SelectItem>
                </ScrollArea>
                  </SelectContent>
                
                </Select>
              </div>

              <div className="mb-2 grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-500">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {[
                  { day: 29, striped: true },
                  { day: 30, striped: true },
                  { day: 1 },
                  { day: 2 },
                  { day: 3 },
                  { day: 4 },
                  { day: 5 },
                  { day: 6 },
                  { day: 7 },
                  { day: 8 },
                  { day: 9 },
                  { day: 10 },
                  { day: 11, highlight: true, event: "Birthday Mike's" },
                  { day: 12, striped: true },
                  { day: 13 },
                  { day: 14 },
                  { day: 15 },
                  { day: 16 },
                  { day: 17 },
                  { day: 18 },
                  { day: 19 },
                  { day: 20 },
                  { day: 21 },
                  { day: 22 },
                  { day: 23 },
                  { day: 24 },
                  { day: 25 },
                  { day: 26, striped: true },
                  { day: 27 },
                  { day: 28 },
                  { day: 29 },
                  { day: 30 },
                  { day: 31 },
                  { day: 1, nextMonth: true },
                  { day: 2, nextMonth: true },
                ].map((date, index) => (
                  <CalendarDay
                    key={index}
                    day={date.day}
                    striped={date.striped}
                    highlight={date.highlight}
                    event={date.event}
                    nextMonth={date.nextMonth}
                  />
                ))}
              </div>

        

              
            </div>
          </div>
  )
}

export default Calender
