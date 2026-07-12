"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Packages</h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            We provide you the best packages and plans that can lead to a better future
          </p>
        </div>
      </section>

      {/* Stock Option Intraday */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Stock Option of Capital Growww
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-950 border-slate-700 hover:border-emerald-400 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Basic</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-emerald-400">₹</span>
                  <span className="text-5xl font-bold text-white">75,000</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Get 1 tip per day</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Accuracy upto 70% above</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Get proper target & Stop-loss</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Profit target Rs. 4000 – Rs. 6000</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 break-words">Eligibility criteria – capital below 50000</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+918425823828")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Primary Package */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-950 border-emerald-400 transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm font-semibold">
                POPULAR
              </div>
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Primary</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-emerald-400">₹</span>
                  <span className="text-5xl font-bold text-white">2,00,000</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Get upto 2 tips per day</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Get proper target & Stop-loss</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Personal relationship manager</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 break-words">Eligibility criteria – capital above Rs. 70,000</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Profit target Rs. 6,000 – Rs. 9,000</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Accuracy up to 85%</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+918425823828")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pro Package */}
            <Card className="bg-gradient-to-b from-slate-800 to-slate-950 border-slate-700 hover:border-emerald-400 transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-slate-700 text-center py-6">
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <p className="text-sm text-gray-300">(Exclusive of GST)</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-emerald-400">₹</span>
                  <span className="text-5xl font-bold text-white">5,00,000</span>
                  <p className="text-gray-400 mt-2">Monthly</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Get proper target & stop-loss</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Profit target- Rs. 10,000 to Rs. 15,000</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 break-words">Eligibility criteria Capital above Rs. 100,000</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">Accuracy upto 85% above</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3" onClick={() => (window.location.href = "tel:+918425823828")}>
                    Click Here
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Pro Packages */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-10">Advanced Pro Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Pro Plus 10,00,000 */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-950 border-slate-700 hover:border-emerald-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">Pro Plus</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-emerald-400">₹</span>
                    <span className="text-4xl font-bold text-white">10,00,000</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Get proper target & stop-loss</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Profit target- Rs. 15,000 to Rs. 20,000</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 break-words">Eligibility criteria Capital above Rs. 150,000</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Accuracy upto 85% above</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+918425823828")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pro Premium 14,00,000 */}
              <Card className="bg-gradient-to-b from-slate-800 to-slate-950 border-slate-700 hover:border-emerald-400 transition-all duration-300">
                <CardHeader className="bg-slate-700 text-center py-4">
                  <CardTitle className="text-xl text-white">Pro Premium</CardTitle>
                  <p className="text-sm text-gray-300">(Exclusive of GST)</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-emerald-400">₹</span>
                    <span className="text-4xl font-bold text-white">14,00,000</span>
                    <p className="text-gray-400 mt-1">Monthly</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Get upto 1 to 2 tips per day</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Get proper target & stop-loss</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Profit target- Rs. 20,000 to Rs. 25,000</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 break-words">Eligibility criteria Capital above Rs. 200,000 - 250,000</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">Accuracy upto 85% above</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2" onClick={() => (window.location.href = "tel:+918425823828")}>
                      Click Here
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Start Your Trading Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today and get started with a package that suits your investment goals.
          </p>
          <Button 
            className="bg-white text-amber-600 hover:bg-gray-100 text-lg font-medium px-8 py-3"
            onClick={() => (window.location.href = "tel:+918425823828")}
          >
            Call Us Now
          </Button>
        </div>
      </section>
    </div>
  )
}
