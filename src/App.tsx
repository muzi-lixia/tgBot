import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {

    WebApp.setBackgroundColor('#000000')

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
