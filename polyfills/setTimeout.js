/**
 * Polyfill for setTimeout function.
 * @param {Function} callback - The function to be executed.
 * @param {number} delay - The time to wait (in milliseconds) before executing the callback.
 * @param  {...any} args - Optional arguments to be passed to the callback.
 * @returns {number} - A unique identifier for the scheduled timeout.
 */

function createSetTimeout() {
    var timerId = 0
    var timerMap = {}

    function setTimeoutPolyfill(callback, delay) {
        var id = timerId++
        timerMap[id] = true
        var start = Date.now()
        function triggerCallback() {
            if (!timerMap[id]) return
            if (Date.now() > start + delay) {
                callback.apply(this, args)
            } else {
                requestIdleCallback(triggerCallback)
            }
        }
        requestIdleCallback(triggerCallback)
        return id
    }

    function clearTimeoutPoly(id) {
        delete timerMap[id]
    }
    return {setTimeoutPolyfill, clearTimeoutPoly}
}
var {setTimeoutPolyfill, clearTimeoutPoly} = createSetTimeout()

console.log("start")
var myId = setTimeoutPolyfill(function() {
    console.log("Welcome to jscafe")
}, 1000)
// clearTimeoutPoly(myId)
console.log("end")

