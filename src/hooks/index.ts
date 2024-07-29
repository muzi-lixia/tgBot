import { useState, useEffect } from 'react'

const useImageLoader = (imageUrls: Array<string>, minimumTime: number) => {
    const [imageCount, setImageCount] = useState(0)
    const [imageLoadedCount, setImageLoadedCount] = useState(0)
    const [showSplash, setShowSplash] = useState(false)

    useEffect(() => {
        let isMounted = true

        const handleImageLoad = () => {
            if (!isMounted) return
            setImageLoadedCount((prevCount) => prevCount + 1)
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
        if (imageLoadedCount === imageCount) {
            // 图片加载完成后设置最低显示时间
            const timer = setTimeout(() => {
                setShowSplash(true)
            }, minimumTime)
            return () => clearTimeout(timer)
        }
    }, [imageLoadedCount, imageCount, minimumTime])

    return showSplash
}

export default useImageLoader
