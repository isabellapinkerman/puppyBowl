import React from 'react'
import ReactDOM from "react-dom/client"
import {Main} from './components'
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
        <Route path="/" element={<Main />}>
        </Route>
    )
)

root.render(<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>)