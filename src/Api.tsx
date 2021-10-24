const base_api = 'https://todolistbackend.rubenandre.repl.co'

export default {
  signin: async (nome: any, usuario: any, senha: any, foto_de_perfil: any) => {
    const request = await fetch(`${base_api}/usuarios/cadastro`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, usuario, senha, foto_de_perfil })
    })
    const json = await request.json()
    return json
  },
  login: async (usuario: any, senha: any) => {
    const request = await fetch(`${base_api}/usuarios/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usuario, senha })
    })
    const json = await request.json()
    return json
  },
  tarefas: async () => {
    const request = await fetch(`${base_api}/tarefas`)
    const json = await request.json()
    return json
  },
  l: async (id: any) => {
    const request = await fetch(`${base_api}/tarefas`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    const json = await request.json()
    return json
  },
  update: async (id: any, feito: any) => {
    const request = await fetch(`${base_api}/tarefas`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, feito })
    })
    const json = await request.json()
    return json
  },
  deleta: async (id: any) => {
    const request = await fetch(`${base_api}/tarefas`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    const json = await request.json()
    return json
  },
  cria: async (nome: any, id_usuario: any, data: any) => {
    const request = await fetch(`${base_api}/tarefas/criar`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, id_usuario, data })
    })
    const json = await request.json()
    return json
  },
  google: async (usuario: any) => {
    const request = await fetch(`${base_api}/tarefas/google`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usuario })
    })
    const json = await request.json()
    return json
  }
}
