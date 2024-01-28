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

<style>
  @import './Counter.css'
</style>

<div class="counter">
  <button class="button" on:click={increase}>+</button>
  <span class="counter-text">{$counter}</span>
  <button class="button" on:click={decrease}>-</button>
</div>
