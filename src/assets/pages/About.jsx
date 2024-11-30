
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
    MapPin, Phone, Mail } from 'lucide-react'
import Link from "next/link"

export default function CarRental() {
  const locations = [
    {
      city: "Karachi",
      phone: "03177100001",
      email: "info@nafeesrentacarpakistan.pk"
    },
    {
      city: "Lahore",
      phone: "03003975497",
      email: "info@nafeesrentacarpakistan.pk"
    },
    {
      city: "Islamabad",
      phone: "03177100001",
      email: "info@nafeesrentacarpakistan.pk"
    },
    {
      city: "Multan",
      phone: "03003975497",
      email: "info@nafeesrentacarpakistan.pk"
    },
    {
      city: "Sukkar",
      phone: "0316279024",
      email: "info@nafeesrentacarpakistan.pk"
    },
    {
      city: "Hyderabad",
      phone: "0316279024",
      email: "info@nafeesrentacarpakistan.pk"
    }
  ]

  const carRates = [
    {
      model: "Toyota Corolla 2021/2023",
      rates: ["6000/-", "5500/-", "5000/-", "4500/-"]
    },
    {
      model: "Toyota Corolla 2018/2020",
      rates: ["5000/-", "4500/-", "4500/-", "4500/-"]
    },
    {
      model: "Toyota Prado 2018/2023",
      rates: ["15000/-", "14000/-", "13000/-", "13000/-"]
    },
    {
      model: "Toyota Fortuner 2018/2023",
      rates: ["15000/-", "14000/-", "13000/-", "13000/-"]
    },
    {
      model: "Toyota V8 Land Cruiser 2018/2023",
      rates: ["25000/-", "23000/-", "22000/-", "20000/-"]
    },
    {
      model: "Honda Civic 2022/2023",
      rates: ["15000/-", "13000/-", "12000/-", "11000/-"]
    },
    {
      model: "Honda Civic 2018/2021",
      rates: ["8000/-", "7500/-", "7000/-", "6500/-"]
    },
    {
      model: "Honda City 2018/2023",
      rates: ["6000/-", "5500/-", "5000/-", "4500/-"]
    },
    {
      model: "Suzuki Cultus 2018/2023",
      rates: ["4000/-", "3500/-", "3500/-", "3500/-"]
    },
    {
      model: "Suzuki Alto 2018/2023",
      rates: ["4000/-", "3500/-", "3500/-", "3500/-"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=400&width=1920"
            alt="Car rental hero"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Nafees Rent A Car Rates
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">Best Car Rental Service Providers</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Rent A Car Rates In Karachi</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Rent a Car Service Pakistan provides not just vehicles but a total solution for your entire customized traveling needs. 
            We maintain our charges at an affordable level. Our Rent a car rates in Karachi are cheap and geared for an enduring relationship. 
            Cars for rent are available with driver.
          </p>
        </div>

        {/* Rates Table */}
        <div className="mt-12 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[200px]">Make/Model</TableHead>
                <TableHead>1-3 Days per Day Rate</TableHead>
                <TableHead>3-6 Days per Day Rate</TableHead>
                <TableHead>7-13 Days per Day Rate</TableHead>
                <TableHead>14+ Days per Day Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {carRates.map((car, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{car.model}</TableCell>
                  {car.rates.map((rate, rateIndex) => (
                    <TableCell key={rateIndex}>{rate}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Payment Method */}
        <div className="mt-12 rounded-lg bg-gray-100 p-6 text-center">
          <h3 className="text-lg font-semibold">Payment Method:</h3>
          <p className="mt-2 text-gray-600">
            Payment will be made on confirmation of booking. Payment instructions will be sent to client at confirmation. 
            Payment can be made in cash besides using methods like Cross Cheque, Demand Draft, Online Bank Transfer, 
            Western Union, Money Gram, easy paisa. Residents of Karachi can pay via cash or cross cheque to be picked from their doorstep.
          </p>
        </div>

        {/* Car Rental CTA */}
        <div className="mt-12 rounded-lg bg-gray-900 p-8 text-white">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">Car Rental Karachi</h3>
              <p className="mt-2">We provide car rentals throughout Karachi for various expeditions.</p>
            </div>
            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Book Your Ride Right Now →
            </button>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mt-16">
          <div className="text-center">
            <p className="text-base font-semibold text-primary">Customer Center</p>
            <h2 className="mt-2 text-3xl font-bold">Our Locations</h2>
            <p className="mt-4 text-lg text-gray-600">Feel free to contact us with any questions</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                    {location.city} Customer Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <Link href={`tel:${location.phone}`} className="text-primary hover:underline">
                      {location.phone}
                    </Link>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <Link href={`mailto:${location.email}`} className="text-primary hover:underline">
                      {location.email}
                    </Link>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-2">
        <Link
          href="#"
          className="rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700"
          aria-label="Facebook"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
          href="#"
          className="rounded-full bg-pink-600 p-2 text-white transition-colors hover:bg-pink-700"
          aria-label="Instagram"
        >
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

