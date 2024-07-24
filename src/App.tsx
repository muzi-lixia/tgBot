import './App.css'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'
import { useEffect, useState } from 'react';

function App() {

    eruda.init()

    WebApp.MainButton.setParams({
        text: 'Main Button'
    });
    WebApp.MainButton.onClick(function () {
        WebApp.showAlert('Main Button was clicked')
    });
    WebApp.MainButton.show();

    function toggleMainButton() {
        if (WebApp.MainButton.isVisible) {
            WebApp.MainButton.hide();
        } else {
            WebApp.MainButton.show();
        }
    }

    const [userInfo, setUserInfo] = useState<any>()
    
    useEffect(() => {
        const info = WebApp.initDataUnsafe
        console.log(WebApp.initData);
        console.log(WebApp.initDataUnsafe);
        console.log(info);
        if (info) {
            setUserInfo(info)
        }
    }, [])
    

    return (
        <>
            <div>{userInfo && JSON.stringify(userInfo)}</div>
            测试
            <button onClick={toggleMainButton}>Toggle Main Button</button>
        </>
    )
}

export default App
