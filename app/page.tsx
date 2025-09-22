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
    <main className="p-6 bg-[#f4ede3] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Payroll Dashboard</h1>

      {/* Row 1: Charts + Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-5">
          <PayrollChart />
        </div>

        <div className="md:col-span-4">
          <EmployeeStatusChart />
        </div>

        <div className="md:col-span-3">
          <QuickActions />
        </div>
      </div>


      {/* Row 2: Pay Runs + Salary Revisions + Off Cycle */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <PayRuns />
        <SalaryRevisions />
        <OffCyclePayRuns />
      </div>

      {/* Row 3: Payouts + Nationality  */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-6">
          <Payouts />
        </div>
        <div className="md:col-span-2">
          <NationalitySummary />
        </div>
      </div>
    </main>
  );
}