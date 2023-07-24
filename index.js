const sweetCookie = new SweetCookie()

document.querySelector('button').addEventListener('click', () => {
    const logoutChannel = new BroadcastChannel("logout-channel")
    sweetCookie.remove('token')
    logoutChannel.postMessage("your session is expired")
    // logoutChannel.postMessage("hello")
    // logoutChannel.postMessage([1,2,3])
})