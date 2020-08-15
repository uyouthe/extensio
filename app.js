const start = () => {
  // your code here
}

if (document.readyState === 'interactive') {
  start()
} else {
  document.addEventListener('DOMContentLoaded', start)
}
