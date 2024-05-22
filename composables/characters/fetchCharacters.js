import { ref, onMounted } from "vue";

export const fetchCharacters = () => {
  const characters = ref(null)
  const error = ref(null)

  const req = async() => {
    try {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=8f451114de7f32ad934f044b1d80ef89`)

      if (!res.ok) {
        throw Error('No response from server')
      }
      const data = await res.json()
      characters.value = data
    } catch (err) {
      error.value = err.message
    }
  }

  onMounted(req)

  return {
    characters,
    error,
    req,
  }
}
