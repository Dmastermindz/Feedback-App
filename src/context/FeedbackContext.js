import {createContext, useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])

     const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
     })

     useEffect(() => {
        console.log(123)
     }, [])

     //Fetch feedback
     const fetchFeedback = async()

     //Delete Feedback
     const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
        
    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //Update Feedback Item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item))
    } 

     return <FeedbackContext.Provider 
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback, //function
            feedbackEdit,    //State
            updateFeedback
        }}
        >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext