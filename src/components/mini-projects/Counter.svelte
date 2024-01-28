<script lang="ts">
  /**
   * A simple counter component.
   * 
   * @module Counter
   * @svelteProps {number} counter - The current value of the counter.
   * @svelteAction {function} increase - Increases the counter value by 1.
   * @svelteAction {function} decrease - Decreases the counter value by 1.
   */
  import { atom } from 'nanostores';
  
  const counter = atom<number>(0)

  function increase() {
    counter.set(counter.get() + 1)
  }

  function decrease() {
    counter.set(counter.get() - 1)
  }
  import './Counter.css'
</script>

<style>
  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    --at-apply: font-sans;
  }

  .counter button {
    background-color: white;
    color: #3b82f6;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    line-height: 2rem;
    /* we need button to be a fully rounded button */
    border-radius: 9999px
  }
  
  .counter span {
    font-size: 2rem;
    line-height: 2rem;
    margin: 0 1rem;
  }
</style>

<div class="counter">
  <button on:click={increase}>+</button>
  <span>{$counter}</span>
  <button on:click={decrease}>-</button>
</div>
