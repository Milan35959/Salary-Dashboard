import { Avatar } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Mail, MapPin, Phone, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const UserDisplay = () => {
  return (
    <div className="rounded-xl bg-white w-[350px] md:w-[365px] mt-[-15px]">
    <div className="relative h-40 w-full  rounded-t-xl">
      <div className="absolute inset-0 bg-[url('/assets/bg.jpg')] bg-cover rounded-tl-xl rounded-tr-xl h-[100px]  bg-center"></div>
      <div className="absolute bottom-5 right-35">
        <Avatar className="h-20 w-20 border-4 border-white ">
          <Image
            src="/assets/bg7.png?height=80&width=80"
            alt="Amélie Laurent"
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </Avatar>
      </div>
    </div>

    <div className="px-6 pb-3">
      <h2 className="text-2xl font-[25px] text-center">Amélie Laurent</h2>
      <p className="text-gray-500 text-center">UX Designer</p>

      <div className="mt-8">
        <h3 className="mb-4 text-[18px] font-[25px]">Basic Information</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">Birthday</span>
            </div>
            
            <span className="text-sm">26 September 1998</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">Phone number</span>
            </div>
            <span className="text-sm">+33 1 70 36 39 50</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">E-Mail</span>
            </div>
            <span className="text-sm">amelielaurent88@gmail.com</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-gray-500">Citizenship</span>
            </div>
            <span className="text-sm">France</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">City</span>
            </div>
            <span className="text-sm">Paris</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">Adress</span>
            </div>
            <span className="text-sm">95700 Roissy-en-France</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4  text-[18px] font-[25px]">Documents</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H9H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium">Contract</div>
              <div className="text-xs text-gray-500">23 mb</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 2V8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9H9H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium">Resume</div>
              <div className="text-xs text-gray-500">76 mb</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4  text-[18px] font-[25px]">Statistics</h3>

        <div className="space-y-4">
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm">Business trips</span>
              <span className="text-sm font-medium">58 days</span>
            </div>
            <Progress value={70} className="h-2 bg-gray-200" indicatorClassName="bg-amber-400" />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm">Sickness</span>
              <span className="text-sm font-medium">24 days</span>
            </div>
            <Progress value={30} className="h-2 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default UserDisplay
