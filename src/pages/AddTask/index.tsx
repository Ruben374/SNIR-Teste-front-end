import React, { useState, useEffect } from 'react'
import * as C from './styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { SideBar } from '../../components/SideBar'
import { Header } from '../../components/Header'
import Tmdb from '../../Api'

const AddTask = () => {
  const [data, setdata] = useState('')
  const [taskname, settaskname] = useState('')
  const foto = localStorage.getItem('foto')
  const id = localStorage.getItem('id')

  const nome = localStorage.getItem('nome')

  const [mostrar, setmostrar] = useState(false)
  useEffect(() => {
    const checkToken = async () => {
      const c = await Tmdb.l(id)
      console.log(c)
      const token = localStorage.getItem('token')
      if (!token) {
        window.location.href = '/signin'
      } else {
        setmostrar(true)
      }
    }

    const getdata = async () => {
      var datax = new Date()
      var dia = String(datax.getDate()).padStart(2, '0')
      var mes = String(datax.getMonth() + 1).padStart(2, '0')
      var ano = datax.getFullYear()
      const dataAtual = dia + '/' + mes + '/' + ano
      setdata(dataAtual)
    }
    checkToken()
    getdata()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const SetarTarefa = async () => {
    if (taskname) {
      let c = await Tmdb.cria(taskname, id, data)
      alert('tarefa adicionada')
      settaskname('')
    } else {
      alert('preencha o campo')
    }
  }

  const [vx, setvx] = useState(false)
  const mudar = () => {
    if (vx) {
      setvx(false)
    }
  }
  const handleDisplaySideBar = () => {
    setvx(!vx)
  }

  return (
    <>
      {vx && <SideBar type={true} onClick={handleDisplaySideBar} />}

      <div style={{ minHeight: '100vh', backgroundColor: '#2E2938' }}>
        {mostrar && (
          <C.container onClick={() => mudar()}>
            <Header
              foto={foto}
              nome={nome}
              onClick={handleDisplaySideBar}
              ShowBtnAdd={false}
            />

            <C.Area>
              <div className='Box'>
                <div className='Boxin1'>
                  <a href='javascript:history.back()'>
                    {' '}
                    <ArrowBackIcon className='Backicon' />{' '}
                  </a>
                  <div className='Informations'>
                    {' '}
                    <div className='txt1'> Add task</div>{' '}
                    <div className='txt2'>
                      {' '}
                      Add your tasks to be registered.
                    </div>
                  </div>
                </div>

                <div className='Input'>
                  <label>Titla task</label>
                  <input
                    type='text'
                    placeholder='Insert your task'
                    value={taskname}
                    onChange={e => settaskname(e.target.value)}
                  />
                </div>
                <div className='Input'>
                  <label>Date</label>
                  <input
                    type='text'
                    placeholder='Today'
                    value='Today'
                    onChange={e => setdata(e.target.value)}
                    disabled
                  />
                </div>
                <button className='Btn' onClick={() => SetarTarefa()}>
                  Create task
                </button>
              </div>
            </C.Area>
          </C.container>
        )}
      </div>
    </>
  )
}

export default AddTask
