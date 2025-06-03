import React from 'react'
import { Home } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Logo</h2>
        <ul className="flex items-center space-x-8">
          <li>
            <a 
              href="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <Home size={18} />
              <span className="font-medium">Home</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}