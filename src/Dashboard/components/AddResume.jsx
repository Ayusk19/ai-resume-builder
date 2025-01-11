import { PlaySquare } from 'lucide-react'
import { Input } from "@/components/ui/input"

import { useState, React } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../../components/ui/button'
  

function AddResume() {
    const [openDialog, setOpenDialog] = useState(false)
  return (
    <div >
      <div className='items-center justify-center py-24 border rounded-lg p-14 flex bg-secondary h-[280px] hover:scale-105 transistion-all hover:shadow-md cursor-pointer border-dashed' onClick={()=>setOpenDialog(true)}>
        <PlaySquare />
      </div>
{/* */}
      <Dialog  open={openDialog} >
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
        <input/>
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button variant="ghost">Cancel</Button>
        <Button>Create</Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume
