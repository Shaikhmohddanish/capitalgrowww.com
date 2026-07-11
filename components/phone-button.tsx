"use client"

import { Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PhoneButton() {
  const [showCallInfo, setShowCallInfo] = useState(false)

  return (
    <div className="fixed z-50 flex flex-col gap-4 bottom-8 left-8">
      {/* Phone Button */}
      <div className="relative">
        <Button
          onClick={() => (window.location.href = "tel:+918425823828")}
          className="rounded-full w-14 h-14 bg-amber-500 hover:bg-amber-600 shadow-lg flex items-center justify-center"
          onMouseEnter={() => setShowCallInfo(true)}
          onMouseLeave={() => setShowCallInfo(false)}
        >
          <Phone className="h-6 w-6 text-white" />
        </Button>

        {showCallInfo && (
          <div className="absolute bottom-16 left-0 bg-white text-slate-800 p-4 rounded-lg shadow-lg w-64 animate-fade-in">
            <p className="font-medium text-amber-600 mb-2">Call us directly</p>
            <p className="text-sm mb-3">Speak with our trading experts now</p>
            <Button
              onClick={() => (window.location.href = "tel:+918425823828")}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white"
            >
              +91 84258 23828
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
