import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/apppointment.actions";
import WavingHands from "@/components/ui/waving-hands";
import IconFull from "@/components/ui/iconFull";

const AdminPage = async () => {
    const appointments = await getRecentAppointmentList();

    return (
        <div className="mx-auto flex max-w-7xl flex-col space-y-14">
            <header className="admin-header">
                <IconFull />

                <p className="text-16-semibold">Admin Dashboard</p>
            </header>

            <main className="admin-main">
                <section className="w-full space-y-4">
                    <div className="flex">
                        <h1 className="header">Welcome </h1>
                        <WavingHands />
                    </div>
                    <p className="text-dark-700">
                        Start the day with managing new appointments
                    </p>
                </section>

                <section className="admin-stat">
                    <StatCard
                        type="appointments"
                        count={appointments.scheduledCount}
                        label="Scheduled appointments"
                        icon={"/assets/icons/appointments.svg"}
                    />
                    <StatCard
                        type="pending"
                        count={appointments.pendingCount}
                        label="Pending appointments"
                        icon={"/assets/icons/pending.svg"}
                    />
                    <StatCard
                        type="cancelled"
                        count={appointments.cancelledCount}
                        label="Cancelled appointments"
                        icon={"/assets/icons/cancelled.svg"}
                    />
                </section>

                <DataTable columns={columns} data={appointments.documents} />
            </main>
        </div>
    );
};

export default AdminPage;