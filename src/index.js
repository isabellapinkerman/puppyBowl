import React from 'react'
import ReactDOM from "react-dom/client"
import {Main, SeeDetails} from './components'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" >
            <Route path="" element={<Main />}> </Route>
            <Route path=':id' element={<SeeDetails />}></Route>
        </Route>
    )
)

root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>)