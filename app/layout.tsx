import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Nano Voltz Dashboard",
  description: "Payroll & Attendance System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-[#f4ede3] text-gray-800">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html >
  );
}
