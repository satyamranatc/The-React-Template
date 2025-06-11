import React from 'react'
import { Link } from 'react-router-dom'
import { Home,BookUserIcon,BookOpenCheckIcon,UsersRoundIcon } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-20 bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">SmartCoach CRM</h2>
        <ul className="flex items-center space-x-8">
          <li>
         <Link
              to={"/"}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <Home size={18} />
              <span className="font-medium">Home</span>
            </Link>
          </li>  

          <li>
         <Link
              to={"/courses"} 
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <BookOpenCheckIcon size={18} />
              <span className="font-medium">Courses</span>
            </Link>
          </li>

          <li>
         <Link
              to={"/teacher"} 
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <BookUserIcon size={18} />
              <span className="font-medium">Teachers</span>
            </Link>
          </li>


          <li>
         <Link
              to={"/students"}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <UsersRoundIcon size={18} />
              <span className="font-medium">Students</span>
            </Link>
          </li>


        </ul>
      </div>
    </nav>
  )
}