import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Capital Growww provides premium market research solutions, empowering traders and investors globally
              with cutting-edge analysis and insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                Services
              </Link>
              <Link href="/packages" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                Packages
              </Link>
              <Link href="/about" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                Contact
              </Link>
              <Link href="/terms" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>Global IT Center, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
              <p className="mt-3">info@capitalgrowww.com</p>
              <p>+91 84258 23828</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 capitalgrowww.com | All Rights Reserved</p>
          <div className="mt-4 text-sm">
            <p><strong>Legal</strong></p>
            <p>This Website is NOT a part of Meta or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta in any way</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
