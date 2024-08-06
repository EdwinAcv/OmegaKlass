

import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homepage/HomePage'
import { MainLayout } from '../layouts/MainLayout'
import { CursosPage } from '../pages/cursos/CursosPage'
import { AppTheme } from '../themes'
import { NosotrosPage } from '../pages/nosotros/NosotrosPage'
import { ProfesoresPage } from '../pages/profesores/ProfesoresPage'
import { PerfilEstudiantePage } from '../pages/estudiante/PerfilEstudiantePage'
import { DetalleCursoPage } from '../pages/cursos/detalle-curso/detalle-curso'
import PageTransition from '../components/pageTransition'
import {  } from 'react-router-dom'
import { CursoAsignado } from '../pages/estudiante/curso/cursoAsignado'

export const Router = () => {

  return (
    <AppTheme>
      <MainLayout>
          <Routes>
              <Route index element={<Navigate to="/home" replace />} />
              {/* edwwin */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/planes" element={<CursosPage />} />

              {/*
                  En el home page se puede agregar la parte de los planes
                  El home page pued tener informacion basica de algunas profesores y hablando un poco del proyecto 
                  La pagina nosotros debe abundar mas de la empresa y quisas tener el organigra y el analisis FODA
              */}

              {/* felix */}
              <Route path="/cursos" element={<PageTransition><CursosPage /></PageTransition>} />
              <Route path="/cursos/:id" element={<PageTransition><DetalleCursoPage /></PageTransition>} />
              <Route path="/perfil_estudiante" element={<PageTransition><PerfilEstudiantePage/></PageTransition>} />
              <Route path="/estudiante/curso/:id" element={<CursoAsignado/>} />
              {/* <Route path="/estudiante_cursos" element={<CursosPage />} /> */}

              {/*
                En el perfil del estudiante se debe ver los cursos que tiene el estudiante y poder filtrar, pueden ser cards como en la pagina del curso
                En el json del estudiante el campo cursos es un arregl ode string con los id de los cursos para agregar o mas cursos solo hay que aumenta el arreglo
              */}


              {/* George */}
              <Route path="/profesores" element={<ProfesoresPage />} />
              <Route path="/perfilmaestro" element={<CursosPage />} />
              <Route path="/profesores" element={<ProfesoresPage />} />
              {/*
                Se deben ver los curos que tiene el profesor y poder filtrar/paginar
                Debe tener un parte para agendar las tutorias en caso de que el profesor permita tutorias
              */}
          </Routes>
      </MainLayout>
    </AppTheme>
  )
}
