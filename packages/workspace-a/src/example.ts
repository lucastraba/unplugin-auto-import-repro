// This should use auto-imported @vueuse/core functions
export function useExample() {
  // useCounter is from @vueuse/core and should be auto-imported
  const { count, inc } = useCounter(0)
  
  // useLocalStorage is from @vueuse/core and should be auto-imported
  const storedValue = useLocalStorage('example-key', 'default-value')
  
  // watchEffect is from Vue (but used with VueUse) and should be auto-imported  
  watchEffect(() => {
    console.log('Counter value:', count.value)
    console.log('Stored value:', storedValue.value)
  })
  
  return {
    count,
    increment: inc,
    storedValue,
    updateStoredValue: (newValue: string) => {
      storedValue.value = newValue
    }
  }
}