const API_KEY = '5b119d53fa5e770c3fc666d15d4c947f'
const API_BASE = 'https://api.themoviedb.org/3'
const base_api='https://todolistbackend.rubenandre.repl.co';



const basicFetch = async (endpoint:any) => {
    const request = await fetch(`${API_BASE}${endpoint}`)
    const json = await request.json()
    return json
}


export default {


    getHomelist: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: await basicFetch(`/discover/tv?with_network=213$languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'treding',
                title: 'Recomendados para Voçe',
                items: await basicFetch(`/trending/all/week?languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'topreted',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&languange=Pt_BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&languange=Pt_BR&api_key=${API_KEY}`)
            }

        ];

    },
  
    signin: async(nome:any,usuario:any,senha:any,foto_de_perfil:any)=>{
      const request = await fetch(`${base_api}/usuarios/cadastro`,{
        method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({nome,usuario,senha,foto_de_perfil})      
        }
      );
    const json =await request.json();
   return json;
    
},
    login: async(usuario:any,senha:any)=>{
      const request = await fetch(`${base_api}/usuarios/login`,{
        method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({usuario,senha})      
        }
      );
    const json =await request.json();
   return json;
    
}
,
 tarefas: async()=>{
      const request = await fetch(`${base_api}/tarefas`)
    const json =await request.json();
   return json;
    
},
    l: async(id:any)=>{
      const request = await fetch(`${base_api}/tarefas`,{
        method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({id})      
        }
      );
    const json =await request.json();
   return json;
    
}
,
    update: async(id:any,feito:any)=>{
      const request = await fetch(`${base_api}/tarefas`,{
        method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({id,feito})      
        }
      );
    const json =await request.json();
   return json;
    
},
 deleta: async(id:any)=>{
      const request = await fetch(`${base_api}/tarefas`,{
        method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({id})      
        }
      );
    const json =await request.json();
   return json;
    
}
,
 cria: async(nome:any,id_usuario:any,data:any)=>{
      const request = await fetch(`${base_api}/tarefas/criar`,{
        method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({nome,id_usuario,data})      
        }
      );
    const json =await request.json();
   return json;
    
}
,
 google: async(usuario:any)=>{
      const request = await fetch(`${base_api}/tarefas/google`,{
        method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      body: JSON.stringify({usuario})      
        }
      );
    const json =await request.json();
   return json;
    
}

}