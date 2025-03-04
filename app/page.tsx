import Calender from "./salary/calender";
import Sidebar from "./salary/sidebar";
import UserDisplay from "./salary/userDisplay";


export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-r from-gray-400 to-amber-200 p-4 md:p-8">
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Salary</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[350px_1fr_350px] rounded-3xl bg-gradient-to-r from-gray-400 to-amber-100 p-6 shadow-lg">
        <Sidebar/>
        <Calender/>
        <UserDisplay/>

      </div>

    </div>
    
   </div>
  );
}
