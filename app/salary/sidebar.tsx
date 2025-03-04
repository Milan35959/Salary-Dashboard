'use client'
import { EmployeeCard } from '@/components/Employeecard';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const employeesPerPage = 7;

  const allEmployees = [
    {
      name: "Harry Bender",
      role: "Head of Design",
      progress: 60,
      image: "/assets/user.png?height=80&width=80",
    },
    {
      name: "Katy Fuller",
      role: "Fullstack Engineer",
      progress: 45,
      image: "/assets/user2.png?height=80&width=80",
    },
    {
      name: "Jonathan Kelly",
      role: "Mobile Lead",
      progress: 85,
      image: "/assets/user1.png?height=80&width=80",
    },
    {
      name: "Sarah Page",
      role: "Network Engineer",
      progress: 65,
      image: "/assets/user4.png?height=80&width=80",
    },
    {
      name: "Erica Wyatt",
      role: "Head of Design",
      progress: 30,
      image: "/assets/user6.png?height=80&width=80",
    },
    {
      name: "Michael Johnson",
      role: "Backend Developer",
      progress: 75,
      image: "/assets/user3.png?height=80&width=80",
    },
    {
      name: "Emma Wilson",
      role: "UI Designer",
      progress: 55,
      image: "/assets/user7.png?height=80&width=80",
    },
    {
      name: "David Chen",
      role: "DevOps Engineer",
      progress: 40,
      image: "/assets/user5.png?height=80&width=80",
    },
  ]

  const totalPages = Math.ceil(allEmployees.length / employeesPerPage)
  const indexOfLastEmployee = currentPage * employeesPerPage
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
  const currentEmployees = allEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee)
  return (
    <div className="flex flex-col h-full rounded-4xl ml-[-15px] mt-[-15px]">
    <div className="flex-1 space-y-1 mb-6">
      {currentEmployees.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.name}
          role={employee.role}
          progress={employee.progress}
          progressColor="bg-slate-600"
          image={employee.image}
        />
      ))}
    </div>

    <div className="flex items-center justify-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className='cursor-pointer'
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        // Show first page, last page, current page, and pages around current page
        if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
          return (
            <Button
              key={page}
              variant="ghost"
              className={`h-8 w-8 rounded-full ${currentPage === page ? "bg-white shadow-sm" : "bg-gray-50"}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          )
        }

        // Show ellipsis for gaps
        if (page === 2 || page === totalPages - 1) {
          return (
            <span key={page} className="text-gray-400">
              ...
            </span>
          )
        }

        return null
      })}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  </div>
  )
}

export default Sidebar;
