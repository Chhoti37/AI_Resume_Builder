import React, { useState } from 'react'
import { Plus, Sparkles, X} from 'lucide-react';
const SkillsForm = ({ data, onChange }) => {
    const [newSkill, setNewSkill] = useState("")
    const addSkill = () => {
        if(newSkill.trim() && !data.includes(newSkill.trim())){
        onChange([...data, newSkill.trim()])
        setNewSkill("")
      }
    }
    const removeSkill = (indexToRemove) => {
        const updated = data.filter((_, i) => i !== indexToRemove)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            addSkill()
        }
    }

 return (
    <div className='space-y-6'>
        <div>
            <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Skills </h3>
            <p className='text-sm text-gray-500'>List your relevant skills here.</p>
        </div>
        <div className='flex flex-wrap gap-2'>
            <input type="text" placeholder="Enter a skill (e.g., JavaScript, Project Management)" className='flex-1 px-3 py-2 text-sm' onChange={(e)=>setNewSkill(e.target.value)}
            value={newSkill} 
            onKeyDown={handleKeyPress}/>
            <button onClick={addSkill} disabled={!newSkill.trim()} className='flex items-center gap-2 px-3 py-1.5 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
                <Plus className="size-4" /> Add
            </button>
        </div>
        {data.length > 0 ? (
            <div className='flex flex-wrap gap-2'>
                {data.map((skill, index) => (
                    <span key={index} className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                        {skill}
                        <button onClick={() => removeSkill(index)} className='ml-2 text-blue-500 hover:text-blue-700 transition-colors'>
                            <X className="size-4" />
                        </button>
                    </span>
                ))}
            </div>
        ) 
        : 
        (
            <div className='text-center py-6 text-gray-500'>
                <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                <p>No skills added yet.</p>
                <p className='text-xs'>Start adding your skills to showcase your expertise.</p>
            </div>
        )}
        <div className='bg-blue-50 p-3 rounded-lg'>
            <p className='text-sm text-blue-800'><strong>Tip:</strong> Add 8-12 relevant skills. Include both technical skills (programming languages, tools) and soft skills (communication, leadership).</p>
        </div>

    </div>

 )
}
export default SkillsForm