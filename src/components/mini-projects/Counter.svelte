<script lang="ts">
  import { atom } from 'nanostores'

  const counter = atom<number>(0)

  function increase() {
    counter.set(counter.get() + 1)
  }

  function decrease() {
    counter.set(counter.get() - 1)
  }
</script>

<div class="flex justify-center items-center">
  <button class="bg-white text-blue-500 w-12 h-12 text-2xl rounded-full" on:click={increase}>+</button>
  <span class="text-xl mx-4">{$counter}</span>
  <button class="bg-white text-blue-500 w-12 h-12 text-2xl rounded-full" on:click={decrease}>-</button>
</div>
