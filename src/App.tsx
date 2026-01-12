import './App.css'
import {useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import Dish from './interface/Dish'

function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 
  const [valor, setValor] = useState<Dish[]>([]);

  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`Error HTTPS: ${response.status}`);
                }

                const json = await response.json();
                setValor(json);
            } catch (err) {
                console.error(err);
            } 

        };
        fetchData();

    }, [url]); 


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student apellidos="Pazmiño Montes" nombres="Silvia Milena" paralelo="1"></Student>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={valor}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App