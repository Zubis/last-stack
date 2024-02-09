import './styles/app.css'
import alienGreeting from './lib/alien-greeting.js'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()
jsConfetti.addConfetti()

alienGreeting('Give us all your candy !', false)
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉')
