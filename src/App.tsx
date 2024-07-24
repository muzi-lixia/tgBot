import './App.css'
import WebApp from '@twa-dev/sdk'
import eruda from 'eruda'

function App() {

    eruda.init()
    WebApp.ready()

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

    return (
        <>
            测试
            <button onClick={toggleMainButton}>Toggle Main Button</button>
        </>
    )
}

export default App
