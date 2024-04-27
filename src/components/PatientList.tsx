import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

const PatientList = () => {
    const { patients } = usePatientStore()
        



    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen">
            <h2 className = "font-black text-3xl text-center" > Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>

            </p>
            <div className="w-full h-full overflow-y-scroll">


                {patients.length ? (
                    <>

                        {patients.map(patient => (
                            <PatientDetails key={patient.id} patient={patient} />
                        ))}

                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando pacientes {''}
                            <span className="text-indigo-600 font-bold"> en este listado</span></p>
                    </>
                )}
            </div>
        </div>
    )
}

export default PatientList
