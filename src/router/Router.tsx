

import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homepage/HomePage'
import { MainLayout } from '../layouts/MainLayout'
import { CursosPage } from '../pages/cursos/CursosPage'
import { AppTheme } from '../themes'
import { NosotrosPage } from '../pages/nosotros/NosotrosPage'

export const Router = () => {

  return (
    <AppTheme>
      <MainLayout>
          <Routes>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/cursos" element={<CursosPage />} />
              <Route path="/cursosdetalle" element={<CursosPage />} />
              <Route path="/perfilestudiante" element={<CursosPage />} />
              <Route path="/estudiantecursos" element={<CursosPage />} />
              <Route path="/perfilmaestro" element={<CursosPage />} />

              {/* opcionales */}
              <Route path="/planes" element={<CursosPage />} />

          </Routes>
      </MainLayout>
    </AppTheme>
  )
}
