<!-- We need to make a counter in svelte -->
<script>
    let count = 0;
    function increment() {
        count += 1;
    }
</script>

<h1>Counter</h1>
<button on:click={increment}>Increment</button>
<p>{count}</p>
