import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import IconFull from "@/components/ui/iconFull";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
    const patient = await getPatient(userId);

    return (
        <div className="flex h-screen max-h-screen overflow-hidden">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <div className="mb-12">
                        <IconFull />
                    </div>

                    <AppointmentForm
                        patientId={patient?.$id}
                        userId={userId}
                        type="create"
                    />

                    <p className="copyright mt-10 py-12">© 2024 HealthCare</p>
                </div>
            </section>

            <Image
                src="/assets/images/appointment-img.png"
                height={1500}
                width={1500}
                alt="appointment"
                className="side-img max-w-[390px] bg-bottom"
            />
        </div>
    );
};

export default Appointment;