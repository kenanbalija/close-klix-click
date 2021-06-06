const loc = window.location.toString();
const isKlix = loc.indexOf('klix.ba') !== -1;
const isAvaz = loc.indexOf('avaz.ba') !== -1;

if (isKlix || isAvaz) {
    let activated = false;
    let seconds = 0;
    const closeBtnInt = setInterval(() => {
        seconds += 0.1
        if (document.getElementsByClassName('fc-close')[0] !== undefined) {
            eventFire(document.getElementsByClassName('fc-close')[0], 'click')
            activated = true
        }
        if (activated || seconds > 5) {
            clearInterval(closeBtnInt)
        }
    }, 100);
}

function eventFire (el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        const evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}