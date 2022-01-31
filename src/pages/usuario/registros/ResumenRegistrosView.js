import { EntityTable } from '../../../components/EntityTable'
import useFetchData from '../../../hooks/useFetchData'
export const ResumenRegistrosView = () => {
    const [resumen, refreshData] = useFetchData('/persona/resumenps')
    return (
        <div className="container ">
            <div className="d-flex justify-content-end mt-2 mb-4">
                <button
                    onClick={refreshData}
                    className="btn btn-sm btn-outline-dark"
                >Actualizar</button>
            </div>
            <p className="h4 ms-3 mt-4 mb-4">Resumen informacion</p>
            {
                resumen != null ?
                    <>
                        {console.log(resumen)}
                        <p className="h5 ms-3 mt-4 mb-4">Datos Primer jefe</p>
                        <EntityTable data={[resumen?.primer_jefe]} />
                        <p className="h5 ms-3 mt-4 mb-4">Datos Segundo jefe</p>
                        <EntityTable data={[resumen?.segundo_jefe]} />
                    </> :
                    <>
                    </>
            }

        </div>
    )
}
