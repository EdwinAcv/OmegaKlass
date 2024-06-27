

import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homepage/HomePage'
import { MainLayout } from '../layouts/MainLayout'
import { CursosPage } from '../pages/cursos/CursosPage'

export const Router = () => {


  return (

    <MainLayout>
        <Routes>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cursos" element={<CursosPage />} />
        </Routes>
    </MainLayout>
  )
}
