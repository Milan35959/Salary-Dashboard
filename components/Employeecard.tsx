import Image from "next/image"
import { Avatar } from "./ui/avatar"

interface EmployeeCardProps {
    name: string
    role: string
    progress: number
    progressColor: string
    image: string
  }
  
  export function EmployeeCard({ name, role, progress, progressColor, image }: EmployeeCardProps) {
    return (
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
        <Avatar className="h-12 w-12">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover rounded-full"
          />
        </Avatar>
        <div className="flex-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div className={`h-full rounded-full ${progressColor}`} style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
    )
  }