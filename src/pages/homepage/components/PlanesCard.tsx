import { Button } from "@mui/material"

export const PlanesCard = ( { plan=1 }: {plan: number} ) => {
    const planes = [
        {
            id: 1,
            title: "Basico",
            type: "Mensual",
            price: "RD$ 2,065/mes",
            contant: 'Cobro mensual recurrente',
            description: "Para 1 estudiante",
            advantages: [
                { ability: true, adv: "Contenido profesional"},
                { ability: true, adv: "cursos ilimitados"},
                { ability: false, adv: "Acceso a la comunidad"},
                { ability: false, adv: "2 tutorias gratis al mes al mes (Max 2h)"},
            ]
        },
        {
            id: 2,
            title: "Premium",
            type: "Anual",
            price: "RD$ 3,065/mes",
            contant: 'Cobro anual recurrente',
            description: "Para 2 estudiante",
            advantages: [
                { ability: true, adv: "Contenido profesional"},
                { ability: true, adv: "cursos ilimitados"},
                { ability: true, adv: "Acceso a la comunidad"},
                { ability: true, adv: "4 tutorias gratis al mes al mes (Max 2h)"},
            ]
        },
        {
            id: 3,
            title: "Pro",
            type: "Anual",
            price: "RD$ 3,700/mes",
            contant: 'Cobro anual recurrente',
            description: "Max 5 estudiante",
            advantages: [
                { ability: true, adv: "Contenido profesional"},
                { ability: true, adv: "cursos ilimitados"},
                { ability: true, adv: "Acceso a la comunidad"},
                { ability: true, adv: "6 tutorias gratis al mes al mes (Max 4h)"},
            ]
        }
    ]

   const selectedData = planes[plan]; 
  return (

    <div className="bg-[#273B61] w-[350px]  rounded-[15px] border-double border-black shadow-lg shadow-[#273B61]/100">
        <div className=" bg-white p-10 rounded-[70px] ">

            <div className="flex justify-between mb-2">
                <h1 className=" font-bold"> { selectedData.title } </h1>
                <h2 className="px-2 border-2 border-black rounded-lg"> { selectedData.type } </h2>
            </div>


            <div className="">
                <h2 className=""> { selectedData.description } </h2>
            </div>

            <div className="">
                <h3 className="font-extrabold text-[1.6rem]"> { selectedData.price }</h3>
            </div>

            <div className="mb-[60px]">
                <p className=""> { selectedData.contant } </p>
            </div>

            <div className="">
                <ul>
                    {
                        selectedData.advantages.map((item, index) => item.ability ? <li key={index} className=" font-bold">
                            <i className="fa-solid fa-check pr-2"></i>
                                { item.adv }
                            </li>
                            :
                            <li key={index} className="text-[#a4a2a2d4] font-bold">
                                <i className="fa-solid fa-x pr-2"></i>
                                { item.adv }
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="mt-10 text-center">
                <Button variant="outlined"
                    sx={{
                        border: '2px solid #273B61',
                        fontWeight: 'bold',
                        '&:hover': {
                            bgcolor: '#273B61',
                            color: 'white',
                            border: '2px solid #273B61',
                        }
                    }}
                >
                    Suscribirme
                </Button>
            </div>
        </div>
    </div>
  )
}
