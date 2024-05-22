import { ref, onMounted } from "vue";

export const fetchCharactersById = () => {
  const character = ref(null)
  const error = ref(null)

  const req = async() => {
    try {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=8f451114de7f32ad934f044b1d80ef89`)

      if (!res.ok) {
        throw Error('No response from server')
      }
      const data = res.json()
      character.value = data
    } catch (err) {
      error.value = err.message
    }
  }
  onMounted(req)

  return {
    character,
    error,
    req,
  }
}
