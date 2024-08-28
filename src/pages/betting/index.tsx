import WebApp from "@twa-dev/sdk"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Betting() {

    const navigate = useNavigate()

    useEffect(() => {
        // 显示取消按钮
        WebApp.BackButton.show()

        const handleCancelClick = () => {
            navigate(-1)
        }

        WebApp.BackButton.onClick(handleCancelClick)

        // 清理函数
        return () => {
            WebApp.BackButton.offClick(handleCancelClick)
            WebApp.BackButton.hide()
        }
    }, [])

    return (
        <div>
            vsababbafba
        </div>
    )
}