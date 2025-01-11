import React from "react"
import './App.css'


import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"
import Header from "./components/custom/Header";

export default function Home() {
  const {user,isLoaded, isSignedIn} = useUser();

  if (!isSignedIn&&isLoaded) {
    return <Navigate to="/auth/sign-in" />
  }
  return (
    
    <>
    <Header/>
    <Outlet/>
    </>
  )
} 
