import { useState, useEffect } from 'react'

const useFirstScreenLoader = (imageUrls: Array<string>, minimumTime: number) => {
    const [imageCount, setImageCount] = useState(0)
    const [imageLoadedCount, setImageLoadedCount] = useState(0)
    const [showSplash, setShowSplash] = useState(false)
    const [progress, setProgress] = useState(10)

    useEffect(() => {
        let isMounted = true

        const handleImageLoad = () => {
            if (!isMounted) return
            setImageLoadedCount((prevCount) => prevCount + 1)
            setProgress(((imageLoadedCount + 1) / (imageCount || 1)) * 50)
        }

        const images = imageUrls.map((url) => {
            const img = new Image()
            img.src = url
            img.onload = handleImageLoad
            img.onerror = handleImageLoad// 处理图片加载失败的情况
            return img
        })

        setImageCount(images.length)

        return () => {
            isMounted = false
        }
    }, [imageUrls])

    useEffect(() => {
        if (imageCount > 0 && progress > 49) {
            const interval = setInterval(() => {
                if (progress < 100) {
                    setProgress((prevProgress) => Math.min(prevProgress + 15, 100))
                }
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [progress, imageCount])

    useEffect(() => {
        if (imageLoadedCount === imageCount) {
            // 图片加载完成后设置最低显示时间
            const timer = setTimeout(() => {
                setShowSplash(true)
            }, minimumTime)
            return () => clearTimeout(timer)
        }
    }, [imageLoadedCount, imageCount, minimumTime])

    return { showSplash: progress > 95 && showSplash, progress }
}

export default useFirstScreenLoader
