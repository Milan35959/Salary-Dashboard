'use client';
import { useQuery } from '@tanstack/react-query';
import { EmployeeCard } from '@/components/Employeecard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

// Fetch employees from the API
const fetchEmployees = async () => {
  const response = await fetch('/api/employees');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 7;

  // Use TanStack Query to fetch employees
  const {
    data: allEmployees = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['employees'], // Use queryKey instead of an array
    queryFn: fetchEmployees, // Use queryFn instead of the second argument
  });

  // Calculate pagination
  const totalPages = Math.ceil(allEmployees.length / employeesPerPage);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = allEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Handle loading and error states
  if (isLoading) return <div>Loading employees...</div>;
  if (isError) return <div>Error fetching employees</div>;

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
          className="cursor-pointer"
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
                className={`h-8 w-8 rounded-full ${currentPage === page ? 'bg-white shadow-sm' : 'bg-gray-50'}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            );
          }

          // Show ellipsis for gaps
          if (page === 2 || page === totalPages - 1) {
            return (
              <span key={page} className="text-gray-400">
                ...
              </span>
            );
          }

          return null;
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
  );
};

export default Sidebar;