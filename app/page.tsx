import QuickActions from "@/components/QuickActions";
import PayRuns from "@/components/PayRuns";
import SalaryRevisions from "@/components/SalaryRevisions";
import OffCyclePayRuns from "@/components/OffCyclePayRuns";
import Payouts from "@/components/Payouts";
import NationalitySummary from "@/components/NationalitySummary";
import PayrollChart from "@/components/PayrollChart";
import EmployeeStatusChart from "@/components/EmployeeStatusChart";

export default function Page() {
  return (
    <main className="p-3 bg-[#f4ede3] min-h-screen">
      {/* Row 1: Charts + Quick Actions */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-5 sm:col-span-2 col-span-1 w-full">
          <PayrollChart />
        </div>

        <div className="lg:col-span-4 sm:col-span-2 col-span-1 w-full">
          <EmployeeStatusChart />
        </div>

        <div className="lg:col-span-3 sm:col-span-2 col-span-1 w-full">
          <QuickActions />
        </div>
      </div>


      {/* Row 2: Pay Runs + Salary Revisions + Off Cycle */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="w-full" >
          <PayRuns />
        </div>
        <div className="w-full">
          <SalaryRevisions />
        </div>
        <div className="w-full">
          <OffCyclePayRuns />
        </div>
      </div>

      {/* Row 3: Payouts + Nationality  */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-6 w-full">
          <Payouts />
        </div>
        <div className="md:col-span-2 w-full">
          <NationalitySummary />
        </div>
      </div>
    </main>
  );
}