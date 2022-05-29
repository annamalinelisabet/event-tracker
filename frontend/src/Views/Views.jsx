import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'
import RegisterView from './Register/RegisterView'
import EventsView from './Events/EventsView'
import DetailView from './Detail/DetailView'
import NewEventView from './NewEvent/NewEventView'
import NotFoundView from './NotFound/NotFoundView'
import HistoryView from './History/HistoryView'
import { ProtectedRoute } from '../Routes/ProtectedRoute'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView /> } />
        <Route path='/register' element={ <RegisterView /> } />
        <Route path='/events/:userId' element={ <ProtectedRoute> <EventsView /> </ProtectedRoute>  } />
        <Route path='/events/detail/:id' element={ <ProtectedRoute> <DetailView /> </ProtectedRoute> } />
        <Route path='/history/:userId' element={ <ProtectedRoute> <HistoryView /> </ProtectedRoute>  } />        
        <Route path='/new' element={ <ProtectedRoute> <NewEventView /> </ProtectedRoute> } />        
        <Route path='*' element={ <NotFoundView /> } />
    </Routes>
  )
}

export default Views