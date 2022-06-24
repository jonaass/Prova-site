import { ConsultarAnime } from "../../api/anime";

import { useEffect, useState } from "react";



export default function Index() {
    const [animes,SetAnimes] =useState([]);


  async function CarregarAnimes() {
      const resposta= await ConsultarAnime();
      SetAnimes(resposta);
  }

  useEffect(() =>{
      CarregarAnimes();
  })
    
    
  return(
        <main className="pai">
         <div>
             <table>
                     <thead>
                         <tr>
                             <th>
                                 Nome
                             </th>
                         </tr>
                     </thead>
                     <tbody>
                         {animes.map(item =>
                            <tr>
                                <td>{item.nome}</td>
                            </tr>
                            )}
                     </tbody>
             </table>

         </div>

    </main>
  );



}



