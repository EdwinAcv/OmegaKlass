

import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homepage/HomePage'
import { MainLayout } from '../layouts/MainLayout'
import { CursosPage } from '../pages/cursos/CursosPage'
import { AppTheme } from '../themes'
import { NosotrosPage } from '../pages/nosotros/NosotrosPage'
import { ProfesoresPage } from '../pages/profesores/ProfesoresPage'
import { PerfilEstudiantePage } from '../pages/estudiante/PerfilEstudiantePage'

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

              {/* felix */}
              <Route path="/cursos" element={<CursosPage />} />
              <Route path="/cursos_detalle" element={<CursosPage />} />
              {/* <Route path="/estudiante_cursos" element={<CursosPage />} /> */}
              <Route path="/perfil_estudiante" element={<PerfilEstudiantePage />} />


              {/* George */}
              <Route path="/profesores" element={<ProfesoresPage />} />
              <Route path="/perfilmaestro" element={<CursosPage />} />

              {/* opcionales */}

          </Routes>
      </MainLayout>
    </AppTheme>
  )
}
