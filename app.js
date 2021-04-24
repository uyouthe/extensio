const start = () => {
  // your code here
}

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  start()
} else {
  document.addEventListener('DOMContentLoaded', start)
}
