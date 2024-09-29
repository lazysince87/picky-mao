import { useState, useCallback, useMemo } from 'react'

export const useForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const showLoading = useCallback(() => {
        setIsLoading(true)
      }, [])
    
      const hideLoading = useCallback(() => {
        setIsLoading(false)
      }, [])
}